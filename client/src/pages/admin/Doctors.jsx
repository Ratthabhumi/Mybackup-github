import React, {useEffect,useState} from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { message, Table } from 'antd';

const Doctors = () => {
	const [doctors, setDoctors] = useState([]);

	const getDoctors = async() => {
		try {
			const res = await axios.get('/api/v1/admin/getAllDoctors', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			if(res.data.success){
				setDoctors(res.data.data)
			}
		} catch (error) {
			console.log(error)

		}
	}

	const handleAccountStatus = async (record, status) => {
		try {
		  const res = await axios.post('/api/v1/admin/accountStatus', {doctorId: record._id, status},
			{
			  headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			  }
			}
		  );
		  if (res.data.success) {
			message.success(res.data.message);
			getDoctors();
		  }
		} catch (error) {
		  message.error('Something went wrong');
		}
	  }

	useEffect(() => {
		getDoctors()
	}, [])

	const columns = [
		{
		  title: 'Name',
		  dataIndex: 'name',
		  render: (text, record) => (
			<span>{record.firstName} {record.lastName}</span>
		  )
		},
		{ title: 'Status', dataIndex: 'status' },
		{ title: 'Phone', dataIndex: 'phone' },
		{
		  title: "Actions",
		  dataIndex: "actions",
		  render: (text, record) => (
			<div className="d-flex">
			  {record.status !== 'approved' && (
				<button className="btn btn-success" onClick={() => handleAccountStatus(record, 'approved')}>
				  Approve
				</button>
			  )}
			  <button className="btn btn-danger ms-2" onClick={() => handleAccountStatus(record, 'rejected')}>
				Reject
			  </button>
			</div>
		  )
		}
	  ];
	
  return (
	<Layout>
		<h1 className="text-center m-2">All Doctors</h1>
		<Table columns={columns} dataSource={doctors} />
	</Layout>
  )
}

export default Doctors