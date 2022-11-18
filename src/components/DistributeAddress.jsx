import React, { useState } from 'react'

import { toast } from 'react-toastify'
import { getContract } from '../core/contract';

const DistributeAddress = ({ records }) => {

	const [isInitializing, setIsInitializing] = useState(false)
	const [isDistributing, setIsDistributing] = useState(false);

	const contract = getContract()

	const initializeRecipients = async () => {

		setIsInitializing(true)

		const recipientsAddresses =  await records.map(record => record.address)
		const recipientsCoins = await records.map(record => record.amount + '')

		try {
			await contract.initializeRecipients(recipientsAddresses, recipientsCoins)
			setIsInitializing(false)
			toast.success('RECEPIENTS INITIALIZED')

			

		} catch (error) {
			setIsInitializing(false)
			toast.error('RECEPIENTS NOT INITIALIZED')
		}

	}

	const distributeCoin = async () => {

		setIsDistributing(true)

		try {
			await contract.distribute()
			setIsDistributing(false)
			toast.success('COIN DISTRIBUTED')
			

		} catch (error) {
			setIsDistributing(false)
			toast.error('DISTRIBUTE COIN FAILED')
			
		}

	}

	return (
		<div className='flex justify-center items-center flex-col md:flex-row'>
			<button onClick={initializeRecipients} className='border-2 p-2 px-4 rounded-full bg-gray-500 text-slate-200 hover:bg-gray-700 font-medium' >{isInitializing?'UPDATING...':'UPDATE RECEPIENT'}</button>
			<button onClick={distributeCoin} className='border-2 p-2 px-4 rounded-full bg-cyan-700 text-slate-200 hover:bg-cyan-800 font-medium' >{isDistributing?'DISTRIBUTING ...':'DISTRIBUTE'}</button>
		</div>
	)
}

export default DistributeAddress
