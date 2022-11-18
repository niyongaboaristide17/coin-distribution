import React from 'react'

const AddressList = (props) => {

	return (
		<div className='w-screen px-2 md:px-10 flex justify-center items-center flex-col'>
			<div className='flex flex-col w-full space-y-1 md:space-y-0'>
				<div className='w-full hidden md:flex flex-col md:flex-row border-b border-b-white  text-white'>
					<div className='bg-cyan-900 p-2 flex justify-center items-center w-full md:w-1/2'>Address</div>
					<div className='bg-gray-900 p-3 flex justify-center items-center w-full md:w-1/2'>Amount</div>
				</div>
				{props.records.map(record => <div className='w-full flex flex-col md:flex-row border-b border-b-white  text-white' key={record.id}>
					<div className='bg-cyan-700 p-1 w-full md:w-1/2'>{record.address}</div>
					<div className='bg-gray-700 p-1 w-full md:w-1/2'>{record.amount}</div>
				</div>)}
			</div>
		</div>
	)
}

export default AddressList
