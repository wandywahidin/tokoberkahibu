"use client";
import { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { PrismaClient } from "@prisma/client";
import AddLaporan from "./addLaporan";
import DeleteLaporan from "./deleteLaporan";
import EditLaporan from "./editLaporan";

const Laporan = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const res = await axios.get(`/api/laporan`);
    console.log("res.data :>> ", res.data);
    setData(res.data);
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
    <div>
      <AddLaporan getData={getData} />
      <table className="table w-full">
        <thead>
          <tr className="text-lg font-bold">
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
            <tr key={item.id}>
              <td>{item.tanggal}</td>
              <td>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(item.pemasukan)}
              </td>
              <td>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(item.pengeluaran)}
              </td>
              <td>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(item.margin)}
              </td>
              <td>
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
  );
};

export default Laporan;
