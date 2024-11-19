import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
  return (
    <body className="bg-slate-50 w-screen h-screen p-8">

        <header className="text-center text-blue-700">
            <h1 className="text-4xl font-bold text-center ">WELCOME TO REPLICA</h1>
            <h2 className="text-2xl font-semibold">This site contains replications of different web pages</h2>
            <p className="text-1xl">Please click on any below to view</p>
        </header>

        <main>
            <p className="bg-blue-400 border-blue-700 rounded-lg cursor-pointer text-center w-32 p-2 text-white font-semibold" onClick={()=> navigate('/hondaCyprus')}>Honda Cyprus</p>
        </main>
    </body>
    
  )
}

export default Home