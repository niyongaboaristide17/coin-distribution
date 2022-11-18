import React, { useRef } from 'react'
import { toast } from 'react-toastify'

const AddAddress = (props) => {

	const addressRef = useRef(null)
	const amountRef = useRef(null)

	const handleAddAddress = () => {

		const address = addressRef.current.value
		const amount = amountRef.current.value 

		if (!address || address.length <= 0) {
			toast.warn('Address required')
			return
		}

		if (!amount || amount <= 0) {
			toast.warn('Amount should exceed 0')
			return
		}

		props.setRecords(prevState => [...prevState, {
			id: prevState.length + 1,
			address: address,
			amount: amount
		}])

		addressRef.current.value = ''
		amountRef.current.value = 0

		toast.success('New records added')

	}

	return (
		<div className='flex flex-col md:flex-row space-y-2 md:space-y-0  md:space-x-2'>
			<input ref={addressRef} type="text" className='border-2 p-2 px-4 rounded-full focus:outline-cyan-700' placeholder='Recepient Address' />
			<input ref={amountRef} type="number" className='border-2 p-2 px-4 rounded-full focus:outline-cyan-700' placeholder='Amount' />
			<button onClick={handleAddAddress} className='border-2 p-2 px-4 rounded-full bg-cyan-700 text-slate-200 hover:bg-cyan-800 font-medium' >ADD</button>
		</div>
	)
}

export default AddAddress
