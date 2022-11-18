import { Contract, providers, Wallet } from 'ethers';

import abi from '../utils/contractABI.json'

export function getContract() {

	const provider = new providers.JsonRpcProvider(process.env.REACT_APP_RPC_URL)
	const signer = new Wallet("").connect(provider)
	const contractInstance = new Contract(process.env.REACT_APP_CONTRACT_ADDRESS, abi, signer)

	return contractInstance
	
}