import "./App.css";
import './index.css'
import Header from "./component/Header";
import Filters from "./component/Filter";
import Cards from "./component/Cards";
import { apiUrl } from "./data";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./component/Loading";

function App() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("All");
  
  useEffect(()=>{
  async function getData() {
    setIsLoading(true);
    try {
      const URL = apiUrl;
      const fetchData = await fetch(URL);
      const response = await fetchData.json();
      setResult(response.data);
      setIsLoading(false);
    } 
    catch (error) {
      console.log("Error :", error);
      toast.error("ERROR IN API 🙄");
      setIsLoading(false);
    }

  }

 
    getData()
  },[])

  return (
    <div>
      <Header />
      <Filters setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
     <div className='flex justify-center items-center overflow-hidden bg-sky-950 bg-opacity-80'>
        {isLoading ? <Loading/>: <Cards  result={result} selectedFilter={selectedFilter}  />}
     </div>
      <ToastContainer theme="colored" autoClose={3000} />
    </div>
  );
}

export default App;
