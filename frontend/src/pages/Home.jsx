import { useState, useEffect } from "react"
import DataTable from "../components/DataTable"
import api from "../api"

function Home() {
  const [flooddata, setFlooddata] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  const getData = () => {
    api.get("/api/flooddata/")
      .then((res) => res.data)
      .then((data) => { setFlooddata(data); console.log(data) })
      .catch((err) => alert(err));
  }

  return (
    <>
      Home

      <DataTable data={flooddata}/>
    </>
  )
}

export default Home
