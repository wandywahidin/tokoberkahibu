"use client"
import {useState} from 'react'
import axios from 'axios'
import {useSearchParams} from 'next/navigation'

const AddKomentar = ({getData}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [nama, setNama] = useState("")
    const [komentar, setKomentar] = useState("")

    const param = useSearchParams().get("bulan")

    const handleModal = () => {
        setIsOpen(!isOpen)
        resetState()
    }
    const resetState = () => {
        setNama("")
        setKomentar("")
    }
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('/api/komentar', {
            nama: nama,
            pesan : komentar,
            bulanId : Number(param)
        })
        resetState()
        getData()
        setIsOpen(false)
    }
  return (
    <div className='my-4 border-t border-gray-400'>
        <div className='flex gap-1 items-center'>
            <img onClick={handleModal} src="/coment.png" alt="komentar" sizes='10px' />
            <h1 className='text-white font-bold'>Komentar</h1>
        </div>
        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-xl mb-2">Tambah Komentar</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full mb-3">
                        <label className="label">Nama</label>
                        <input value={nama} onChange={(e)=> setNama(e.target.value)} type="text" className="input input-bordered" placeholder="Nama anda" />
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label">Komentar</label>
                        <textarea className='textarea textarea-bordered textarea-md' value={komentar} onChange={(e)=> setKomentar(e.target.value)} placeholder="Komentar anda" cols="10" rows="5"/>
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

export default AddKomentar