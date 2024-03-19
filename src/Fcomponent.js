import React, { useState , useEffect} from 'react'

function Fcomponent() {
    const[time  , setTime] = useState( new Date().toString())
    const[message , setMessage] = useState("Functional Component")

    useEffect ( () => {
        console.log("Component mounted/updated");
        const interval = setInterval(showDate , 1000)

        return () => {
            console.log("cleanup of interval");
            clearInterval(interval)
        }
    },[time])

    const showDate = () => {
        setTime(new Date().toString());
    }
  return (
    <div>
      <div>{time}</div>
      <button onClick={showDate}>Show Date</button>
      <div>{message}</div>
      <button onClick={ () => setMessage("Changes functional component")}>Change Message</button>
    </div>
  )
}

export default Fcomponent