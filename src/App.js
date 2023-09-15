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

  useEffect(()=>{
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


/*

Certainly, Yash! `useEffect` ka istemal API fetching mein isliye hota hai kyunki ye 
React components ke sahi tarah se load hone aur data fetching ko control karne mein
madad karta hai.

Imagine kijiye ki aap ek room mein hain aur aapko kisi se kuch maloomat chahiye. `useEffect` 
ek alarm clock ki tarah hai. Aap alarm set karte hain aur kehte hain, "Alarm jab room khulta hai 
(component screen par dikhai deta hai), to maloomat lekar aana (API se data fetch karna)." Yeh 3 
wajah se acha hota hai:

1. **Timing Ka Control**: Aapka alarm sirf tab bajta hai jab room khulta hai, iska matlab jab aapka 
component pehli baar screen par aata hai. Isse aap data ko sahi samay par le sakte hain.

2. **State Ki Sudhar**: API se data lete waqt aap apne room ke andar kuch tabdil bhi kar sakte hain. 
Jaise ki aap kuch saman tayyar kar sakte hain ya loading indicator dikh sakte hain (isLoading ki madad se).

3. **Component Ki Organize**: `useEffect` se aap apne data-fetching logic ko component ke bahar nikal
 sakte hain, jisse aapka component saaf aur organized rahta hai.

Isliye, `useEffect` ka istemal API fetching mein isliye hota hai taaki aap data ko sahi samay par aur 
sahi tarike se le sakein jab aapka component screen par dikhai deta hai.

*/