"use client"
const axios = require('axios')
async function  fetchPython(){
    try {
      const res = await axios.get("https://catfact.ninja/fact")
      console.log("Script output",res.data.fact);
      if(!res.data.error){
        console.error("Script error",res.data.error)
      }
    } catch (error) {
      console.error("Script error",error)
    }  
  }

  export default function Btn1(){
    return(
        <button className="border-2 border-black" onClick={fetchPython}>Run python script</button>
    )
  }