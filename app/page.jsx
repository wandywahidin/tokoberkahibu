import Login from "./login"

const Home = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center w-full h-screen">
        <h1 className="text-5xl font-bold text-center my-4">Toko Berkah Ibu</h1>
        <Login/>
      </div>
    </>
  )
}

export default Home