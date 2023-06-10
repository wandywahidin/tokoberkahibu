export const metadata = {
    title: "Bulan",
  };
  
  import Image from "next/image";
  
  const LaporanLayout = ({ children }) => {
    return (
      <div className="py-10 px-10 overflow-hidden relative w-full min-h-screen">
        
        <div className="text-center mb-8 text-white">
          <h1 className="text-4xl font-bold">Toko Berkah Ibu</h1>
          <h3 className="text-2xl font-semibold">
            Laporan Pemasukan dan Pengeluaran
          </h3>
        </div>
        {children}
        <Image
          src="/bg.svg" // Sesuaikan path dengan lokasi file SVG Anda
          fill={true}
          alt="background"
          priority={true}
          className=" -z-50 object-cover"
        />
      </div>
    );
  };
  
  export default LaporanLayout;
  