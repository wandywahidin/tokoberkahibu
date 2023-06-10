"use client";
import { useEffect, useState, Suspense } from "react";
import axios from "axios";
import AddLaporan from "./addLaporan";
import DeleteLaporan from "./deleteLaporan";
import EditLaporan from "./editLaporan";

const Laporan = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataTotal, setdataTotal] = useState("")

  const getData = async () => {
    const res = await axios.get(`/api/laporan`);
    setData(res.data);
    setLoading(false);
  };
  const getDataTotal = async () => {
    const response = await axios.get('/api/total', {cache:false});
    const dataTotal = await response.data.keuntungan;
    setdataTotal(dataTotal)
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getDataTotal()
  }, [data]);

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
        <AddLaporan getData={getData} />
        {/* <button className='btn bg-gray-400 font-bold dark:text-white'> Total Keuntungan {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(dataTotal)}</button> */}
      </div>
      <div className=" overflow-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-lg font-bold text-white">
              <th>Tanggal</th>
              <th>Pemasukan</th>
              <th>Pengeluaran</th>
              <th>Margin</th>
              <th>15%</th>
              <th className=" text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} >
                <td className="text-white">{item.tanggal}</td>
                <td className="text-white">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(item.pemasukan)}
                </td>
                <td className="text-white">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(item.pengeluaran)}
                </td>
                <td className="text-white">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(item.margin)}
                </td>
                <td className="text-white">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(item.keuntungan)}
                </td>
                <td className="flex gap-2 justify-center">
                  <DeleteLaporan laporan={item} getData={getData} />
                  <EditLaporan laporan={item} getData={getData} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Laporan;
