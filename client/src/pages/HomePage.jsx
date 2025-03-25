import React, { useEffect, useState } from 'react';
import { Tabs, Calendar, Row } from 'antd';
import axios from 'axios';
import '../styles/LayoutStyles.css';
import DoctorList from '../components/DoctorList';
import UserLayout from '../components/UserLayout';
import dayjs from 'dayjs';

const { TabPane } = Tabs;

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [nextAppointment, setNextAppointment] = useState(null);
  const [queueCount, setQueueCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(dayjs().format('HH:mm:ss'));
  const user = JSON.parse(localStorage.getItem('user'));

  const fetchDoctors = async () => {
    try {
      const res = await axios.get('/api/v1/user/getAllDoctors', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const res = await axios.get('/api/v1/user/userAppointment', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (res.data.success) {
        const approved = res.data.data.filter(app => app.status === 'approved');
        setAppointments(approved);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchQueueInfo = async () => {
    try {
      const res = await axios.get('/api/v1/user/userAppointment', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (res.data.success) {
        const userAppointments = res.data.data.filter(app => dayjs(app.date).isAfter(dayjs()));
        if (userAppointments.length > 0) {
          const nextApp = userAppointments.sort((a, b) => dayjs(a.date).diff(dayjs(b.date)))[0];
          setNextAppointment(nextApp);
          console.log('Next Appointment:', nextApp); // Debugging log
          const queueRes = await axios.post('/api/v1/user/getDoctorAppointmentsByDay', {
            doctorId: nextApp.doctorId,
            date: dayjs(nextApp.date).format('DD-MM-YYYY')
          }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          });

          if (queueRes.data.success) {
            const allApps = queueRes.data.data.sort((a, b) => dayjs(a.time).diff(dayjs(b.time)));
            const position = allApps.findIndex((app) => app._id === nextApp._id);
            setQueueCount(position);
            console.log('Queue Count:', position); // Debugging log
          }
        }
      }
    } catch (error) {
      console.error("Error fetching queue info", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
    fetchAppointments();
  }, []);

  useEffect(() => {
    if (user) {
      fetchQueueInfo();
    }

    const clockInterval = setInterval(() => {
      setCurrentTime(dayjs().format('HH:mm:ss'));
    }, 1000);

    const handleResize = () => {
      // Handle resize logic here if needed
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(clockInterval);
    };
  }, [user]);

  const appointmentsByDate = appointments.reduce((acc, app) => {
    const key = dayjs(app.date).format('YYYY-MM-DD');
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(app);
    return acc;
  }, {});

  const cellRender = (current) => {
    const key = current.format('YYYY-MM-DD');
    const dayApps = appointmentsByDate[key] || [];
    return (
      <div>
        {dayApps.map((app, index) => (
          <div
            key={index}
            style={{
              background: '#bae7ff',
              marginBottom: 2,
              padding: '2px 4px',
              borderRadius: 2,
              fontSize: 12,
            }}>
            Dr. {app.doctorInfo.firstName} {app.doctorInfo.lastName} @ {dayjs(app.date).format('HH:mm')}
          </div>
        ))}
      </div>
    );
  };

  const cellRender2 = (current) => {
    const key = current.format('YYYY-MM-DD');
    const dayApps = appointmentsByDate[key] || [];
    return (
      <div>
        {dayApps.map((app, index) => (
          <div
            key={index}
            className="appointment"
          >
            {app.userInfo.name} booked with Dr. {app.doctorInfo.firstName} {app.doctorInfo.lastName} @ {dayjs(app.date).format('HH:mm')}
          </div>
        ))}
      </div>
    );
  };

  return (
    <UserLayout>
      <Tabs className="custom-tabs" defaultActiveKey="1">
        <TabPane tab="Doctors" key="1">
          <Row>
            {doctors && doctors.map((doctor) => <DoctorList key={doctor._id} doctor={doctor} />)}
          </Row>
        </TabPane>
        <TabPane tab="My Bookings" key="2">
          <div className="custom-calendar-container">
            <Calendar cellRender={cellRender} />
          </div>
        </TabPane>
        <TabPane tab="Dr.Queue" key="3">
          <div className="custom-calendar-container">
            <Calendar cellRender={cellRender2} />
          </div>
        </TabPane>
        <TabPane tab="My Queue" key="4">
			<div className="queue-info" >Queue: {queueCount} appointment{queueCount === 1 ? "" : "s"} before you.</div>
			<span className="reminder2-text">
                      Current Time: {currentTime}</span>
        </TabPane>
      </Tabs>
    </UserLayout>
  );
};

export default HomePage;