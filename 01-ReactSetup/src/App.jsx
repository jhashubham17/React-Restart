import React, { useEffect, useState } from "react";

function App(){

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timerID); 
  }, []);
  
  return(
    <div className=" bg-green-100 w-screen h-screen flex  flex-col justify-center items-center text-8xl">
      <h1 className="font-bold pb-5">Hello React!</h1>
      <h2 className="font-semibold">{time.toLocaleTimeString()}</h2>
    </div>
  )
}

export default App
