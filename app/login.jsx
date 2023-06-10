"use client"
import {useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation'
import Error from 'next/error'

const Login = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const router = useRouter()

    const handleModal = () => {
        setIsOpen(!isOpen)
        resetState()
    }
    const resetState = () => {
        setPassword('')
        setUsername('')
        setError(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (username == 'sindicantik' && password == 'sindicantik') { 
            router.push('/bulan')
            resetState()
            setIsOpen(false)
        } else {
            setError(true)
        }    
    }
  return (
    <div className='mb-4'>
        <button className='btn btn-primary' onClick={handleModal}>Masuk</button>
        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-xl mb-2">Hallo, Selamat Datang Kembali</h3>
                {error && <p className='text-xs text-red-500'>Username / Password salah</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full mb-3">
                        <label className="label">Username</label>
                        <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text" className="input input-bordered" placeholder="Masukan Username" />
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label">Password</label>
                        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className="input input-bordered" placeholder="Masukan Password" />
                    </div>
                    <div className="modal-action">
                        <button onClick={handleModal} type="button" className="btn">Batal</button>
                        <button type="submit" className="btn btn-primary">Masuk</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login