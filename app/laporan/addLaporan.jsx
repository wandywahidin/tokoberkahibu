"use client"
import {useState} from 'react'
import axios from 'axios'
import {useSearchParams} from 'next/navigation'

const AddLaporan = ({getData}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [tanggal, setTanggal] = useState("")
    const [pemasukan, setPemasukan] = useState("")
    const [pengeluaran, setPengeluaran] = useState("")
    const [piutang, setPiutang] = useState("")

    const param = useSearchParams().get("bulan")

    const handleModal = () => {
        setIsOpen(!isOpen)
        resetState()
    }
    const resetState = () => {
        setTanggal("")
        setPemasukan("")
        setPengeluaran("")
        setPiutang("")
    }
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('/api/laporan', {
            tanggal : new Date(tanggal).toLocaleDateString('id-ID', {year:'numeric', month:'long', day:'numeric'}),
            pemasukan :Number(pemasukan) ,
            pengeluaran : Number(pengeluaran),
            piutang : Number(piutang),
            margin: pemasukan-pengeluaran,
            keuntungan : 15/100 * pemasukan,
            bulanId : Number(param)
        })
        resetState()
        getData()
        setIsOpen(false)
    }
  return (
    <div className='mb-4'>
        <button className='btn bg-gradient-to-bl from-gray-800 to-blue-400 font-bold dark:text-white' onClick={handleModal}>Tambah Laporan</button>
        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-xl mb-2">Tambah Laporan</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full mb-3">
                        <label className="label">Tanggal</label>
                        <input value={tanggal} onChange={(e)=> setTanggal(e.target.value)} type="date" className="input input-bordered w-full" placeholder="Tanggal" />
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label">Pemasukan</label>
                        <input value={pemasukan} onChange={(e)=> setPemasukan(e.target.value)} type="number" className="input input-bordered" placeholder="Rp." />
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label">Pengeluaran</label>
                        <input value={pengeluaran} onChange={(e)=> setPengeluaran(e.target.value)} type="number" className="input input-bordered" placeholder="Rp." />
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label">Piutang</label>
                        <input value={piutang} onChange={(e)=> setPiutang(e.target.value)} type="number" className="input input-bordered" placeholder="Rp." />
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

export default AddLaporan