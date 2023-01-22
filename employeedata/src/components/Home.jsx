import React,{useEffect,useState} from 'react'
import { Helmet } from 'react-helmet'
import { Link, Route, Routes } from "react-router-dom"
import Navbar from './Navbar'
import axios from "axios"
import LoadingScreen from './LoadingScreen'

const Home = () => {
  
  var EmployeeApi="https://jsonplaceholder.typicode.com/users";

  const [EmployeeData,setData]=useState([])
  var [Isloading,setLoading]=useState(true)

  var FetchEmployeeData=()=>{
    axios.get(EmployeeApi)
    .then((response)=>{
      console.log(response.data)
      setData(response.data)
      setLoading(false)
    })
    .catch((error)=>{
      alert(`Something went wrong:${error}`)
    })
  }

useEffect(()=>{
  FetchEmployeeData()
},[])
  
  return (
    <>
      <Helmet>
        <style>{'body { background-color:#8EE4AF; }'}</style>
      </Helmet>
      <Navbar />
      {Isloading ? <LoadingScreen/> : <div className="container">
        <div className="row" >  
        <h2 style={{ textAlign: "center", color: "whitesmoke" }}>Employee List</h2>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          {/* Main Table starts here */}
          <table class="table" style={{textAlign:"center"}}>
              <thead>
                <tr style={{ border: "2px solid white" }}>
                  <th style={{ border: "2px solid white" }} scope="col">ID</th>
                  <th style={{ border: "2px solid white" }} scope="col">NAME</th>
                  <th style={{ border: "2px solid white" }} scope="col">EMAIL-ID</th>
                </tr>
              </thead>
              {EmployeeData.map((item, key) => {
            return (
                  <tbody style={{border:"1px solid white"}}>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                    </tr>
                  </tbody>
                
            )
          })}
          </table>
              
          {/*  Main Table ends here */}
          </div>
        </div>
      </div>}
      
    </>
  )
}

export default Home
