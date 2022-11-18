import React, { useState } from 'react';
import AddAddress from './components/AddAddress';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddressList from './components/AddressList';
import DistributeAddress from './components/DistributeAddress';

function App() {

  const [records, setRecords] = useState([]);

  return (

    <>
      <ToastContainer />
      <div className="w-screen py-4 space-y-2 min-h-screen flex flex-col justify-center items-center">
        <h1 className='md:text-lg font-bold text-cyan-700'>DISTRIBUTE COIN</h1>
        <AddAddress setRecords={setRecords} />
        <AddressList records={records}/>
        {/* {records.length > 0 && <DistributeAddress records={records}/>} */}
        {/* <DistributeAddress records={records}/> */}
      </div>
    </>

  );
}

export default App;
