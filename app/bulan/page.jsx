"use client";
import { useEffect, useState, Suspense } from "react";
import axios from "axios";
import AddBulan from "./addBulan";
import { useRouter } from "next/navigation";

const Bulan = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter()

  const getData = async () => {
    const res = await axios.get(`/api/bulan`);
    setData(res.data);
    setLoading(false);
  };
 
  const goToLaporanPage = (id) => {
    router.push(`/laporan?bulan=${id}`)
  }

  useEffect(() => {
    getData();
  }, []);


  if (loading)
    return (
      <div className="w-full flex mt-8 justify-center h-screen">
        <div
          style={{ width: `${80}px`, height: `${80}px` }}
          className="animate-spin"
        >
          <div
            className="h-full w-full border-4 border-t-purple-500
           border-b-purple-700 rounded-[50%]"
          ></div>
        </div>
      </div>
    );
  return (
    <>
      <div className="md:flex grid grid-cols-2  gap-4 md:gap-10 ">
        <AddBulan getData={getData} />
      </div>
      <div className="mt-5 flex flex-wrap md:grid grid-cols-4 gap-4">
        {data.map((item) => (
            <button onClick={()=>goToLaporanPage(item.id)} className="btn" key={item.id}>Bulan {item.month} Tahun {item.year}</button>
        ))}
      </div>
    </>
  );
};

export default Bulan;
