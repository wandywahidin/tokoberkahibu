import { PrismaClient } from "@prisma/client"
import AddLaporan from "./addLaporan"
import DeleteLaporan from "./deleteLaporan"

const prisma = new PrismaClient()

const getLaporans = async () => {
    const res = await prisma.laporan.findMany({
        select : {
            id : true,
            tanggal : true,
            pemasukan : true,
            pengeluaran : true,
            margin : true,
            keuntungan : true
        }
    })
    return res
}

const Laporan = async () => {
    const laporans = await getLaporans()
  return (
    <div>
        <AddLaporan/>
        <table className="table w-full">
            <thead>
                <tr>
                    <th>Tanggal</th>
                    <th>Pemasukan</th>
                    <th>Pengeluaran</th>
                    <th>Margin</th>
                    <th>15%</th>
                    <th className=" text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {laporans.map((item) => (
                <tr key={item.id}>
                    <td>{item.tanggal}</td>
                    <td>{new Intl.NumberFormat('id-ID',  { style: 'currency', currency: 'IDR',minimumFractionDigits: 0, maximumFractionDigits: 0, }).format(item.pemasukan)}</td>
                    <td>{new Intl.NumberFormat('id-ID',  { style: 'currency', currency: 'IDR',minimumFractionDigits: 0, maximumFractionDigits: 0, }).format(item.pengeluaran)}</td>
                    <td>{new Intl.NumberFormat('id-ID',  { style: 'currency', currency: 'IDR',minimumFractionDigits: 0, maximumFractionDigits: 0, }).format(item.margin)}</td>
                    <td>{new Intl.NumberFormat('id-ID',  { style: 'currency', currency: 'IDR',minimumFractionDigits: 0, maximumFractionDigits: 0, }).format(item.keuntungan)}</td>   
                    <td>
                        <DeleteLaporan/>
                    </td>
                </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default Laporan