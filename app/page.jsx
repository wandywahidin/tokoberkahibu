import Login from "./login"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <div className=" flex flex-col relative justify-center items-center w-full h-screen">
      <Image
        src="/bg.svg" // Sesuaikan path dengan lokasi file SVG Anda
        fill={true}
        alt="background"
        priority={true}
        className=" -z-50 object-cover"
      />
        <h1 className="text-5xl font-bold text-center my-8 text-white">Hallo Sindi <span>&#x1F642;</span> </h1>
        <Login/>
      </div>
    </>
  )
}

export default Home