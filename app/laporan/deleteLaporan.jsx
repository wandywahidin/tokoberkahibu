"use client"
import {useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation'

const DeleteLaporan = () => {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    const handleModal = () => {
        setIsOpen(!isOpen)
    }
   
    const handleSubmit = async (e) => {
        e.preventDefault()
       
        router.refresh()
        setIsOpen(false)
    }
  return (
    <div>
        <button className='btn btn-error' onClick={handleModal}>Delete</button>
        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-xl mb-2">Apakah anda yakin akan menghapus laporan tanggal 20 Juni 2023 ?</h3>
                <div className="modal-action">
                    <button onClick={handleModal} type="button" className="btn">Tidak</button>
                    <button type="button" className="btn btn-primary">Ya</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteLaporan