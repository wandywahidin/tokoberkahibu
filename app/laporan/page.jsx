"use client";
import { useEffect, useState, Suspense } from "react";
import axios from "axios";
import AddLaporan from "./addLaporan";
import DeleteLaporan from "./deleteLaporan";
import EditLaporan from "./editLaporan";
import { useSearchParams, useRouter } from "next/navigation";
import AddKomentar from "./addKomentar";

const Laporan = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataTotalKeuntungan, setdataTotalKeuntungan] = useState("");
  const [dataTotalPemasukan, setDataTotalPemasukan] = useState("");
  const [dataTotalPengeluaran, setDataTotalPengeluaran] = useState("");
  const [dataTotalMargin, setDataTotalMargin] = useState("");
  const [dataTotalPiutang, setDataTotalPiutang] = useState("");
  const [komentar, setKomentar] = useState([])

  const router = useRouter();
  const param = useSearchParams().get("bulan");

  const getData = async () => {
    setLoading(true)
    const res = await axios.get(`/api/laporan/${param}`);
    getKomentar()
    setData(res.data.res);
    setdataTotalKeuntungan(res.data.total._sum.keuntungan);
    setDataTotalPemasukan(res.data.total._sum.pemasukan);
    setDataTotalPengeluaran(res.data.total._sum.pengeluaran);
    setDataTotalMargin(res.data.total._sum.margin);
    setDataTotalPiutang(res.data.total._sum.piutang);
    setLoading(false);
  };

  const getKomentar = async () => {
    setLoading(true)
    const res = await axios.get(`/api/komentar/${param}`);
    setKomentar(res.data);
    setLoading(false);
  };



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
      <div className="md:flex grid grid-cols-2 flex-nowrap justify-center gap-4 md:gap-10 mb-10 text-center">
        <div className=" bg-gradient-to-tr from-blue-600 to-green-500 font-bold dark:text-white flex flex-col items-center justify-center p-2 rounded-lg">
          <h1>Total Keuntungan</h1>
          <div>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(dataTotalKeuntungan)}
          </div>
        </div>
        <div className=" bg-gradient-to-tr from-blue-600 to-green-500 font-bold dark:text-white flex flex-col items-center justify-center p-2 rounded-lg">
          <h1>Total Pemasukan</h1>
          <div>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(dataTotalPemasukan)}
          </div>
        </div>
        <div className=" bg-gradient-to-tr from-blue-600 to-green-500 font-bold dark:text-white flex flex-col items-center justify-center p-2 rounded-lg">
          <h1>Total Pengeluaran</h1>
          <div>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(dataTotalPengeluaran)}
          </div>
        </div>
        <div className=" bg-gradient-to-tr from-blue-600 to-green-500 font-bold dark:text-white flex flex-col items-center justify-center p-2 rounded-lg">
          <h1>Total Margin</h1>
          <div>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(dataTotalMargin)}
          </div>
        </div>
        <div className=" bg-gradient-to-tr from-blue-600 to-green-500 font-bold dark:text-white flex flex-col items-center justify-center p-2 rounded-lg">
          <h1>Total Piutang</h1>
          <div>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(dataTotalPiutang)}
          </div>
        </div>
        
      </div>
      <div className="flex gap-4">
        <AddLaporan getData={getData} />
        <button
          onClick={() => router.push("/bulan")}
          className="btn bg-gradient-to-tl from-green-500 to-yellow-800 text-white"
        >
          Kembali
        </button>
      </div>
      <div className=" overflow-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-lg font-bold text-white">
              <th>Tanggal</th>
              <th>Pemasukan</th>
              <th>Pengeluaran</th>
              <th>Piutang</th>
              <th>Margin</th>
              <th>15%</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
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
                  }).format(item.piutang)}
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
                <td className="flex gap-2">
                  <DeleteLaporan laporan={item} getData={getData} />
                  <EditLaporan laporan={item} getData={getData} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <AddKomentar getData={getData}/>
        <div>
          {komentar.map((item) => (
          <div key={item.id} className="border border-gray rounded-md p-2 max-w-md my-3">
            <h1 className="font-bold  border-b w-fit">{item.nama}</h1>
            <p>{item.pesan}</p>
          </div>
          ))}
        </div>
    </>
  );
};

export default Laporan;
