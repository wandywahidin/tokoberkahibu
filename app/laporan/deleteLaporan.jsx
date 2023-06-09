"use client"
import {useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation'

const DeleteLaporan = ({laporan, getData}) => {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    const handleModal = () => {
        setIsOpen(!isOpen)
    }
   
    const handleDelete = async (laporanId) => {
        await axios.delete(`/api/laporan/${laporanId}`)
        // router.refresh()
        getData()
        setIsOpen(false)
    }
  return (
    <div>
        <button className='btn bg-red-500 dark:text-white' onClick={handleModal}>Delete</button>
        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-xl mb-2">Serius Hapus laporan tanggal {laporan.tanggal} ?</h3>
                <div className="modal-action">
                    <button onClick={handleModal} type="button" className="btn">Ga jadi</button>
                    <button onClick={() => handleDelete(laporan.id)} type="button" className="btn btn-error">Serius lah</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteLaporan