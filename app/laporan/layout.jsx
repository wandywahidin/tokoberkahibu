export const metadata = {
    title : "Laporan"
}

const LaporanLayout = ({children}) => {
  return (
    <div className="py-10 px-10">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Toko Berkah Ibu</h1>
            <h3 className="text-2xl font-semibold">Laporan Pemasukan dan Pengeluaran</h3>
        </div>
        {children}
    </div>
  )
}

export default LaporanLayout