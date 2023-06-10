"use client"
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation'

const AddBulan = ({getData}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [bulan, setBulan] = useState("")
    const [year, setYear] = useState("")
    const router = useRouter()

    const handleModal = () => {
        setIsOpen(!isOpen)
        resetState()
    }
    const resetState = () => {
        setBulan("")
        setYear("")
    }

    function convertToMonthYear(dateString) {
        const date = new Date(dateString);
        const monthName = date.toLocaleDateString('id-ID', { month: 'long' });
        const year = date.getFullYear();
      
        return `${monthName} ${year}`;
      }
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('/api/bulan', {
            month : bulan,
            year : year
        })
        resetState()
        getData()
        setIsOpen(false)
    }
  return (
    <div className='mb-4'>
        <button className='btn bg-gray-400 font-bold dark:text-white' onClick={handleModal}>Tambah Bulan</button>
        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-xl mb-2">Tambah Laporan {bulan}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full mb-3">
                        <label className="label">Bulan</label>
                        <input value={bulan} onChange={(e)=> setBulan(e.target.value)} type="text" className="input input-bordered w-full"/>
                    </div>       
                    <div className="form-control w-full mb-3">
                        <label className="label">Tahun</label>
                        <input value={year} onChange={(e)=> setYear(e.target.value)} type="number" className="input input-bordered w-full"/>
                    </div>       
                    <div className="modal-action">
                        <button onClick={handleModal} type="button" className="btn">Close</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddBulan