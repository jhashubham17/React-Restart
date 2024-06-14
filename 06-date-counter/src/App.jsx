import { useState } from 'react'
// import './index.css'

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

function Counter() {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 15 2024");
  date.setDate(date.getDate() + count);
  console.log(date);

  return (
    <div className=' bg-green-100 w-full h-screen flex flex-col justify-center items-center text-2xl'>
      <div>
        <button onClick={() => setStep((c) => c - 1)}
          className=' rounded-lg bg-red-400 px-3 py-1 text-white  hover:bg-red-700'>-
          </button>
        <span className=' font-bold tracking-wider px-12'>Step {step}</span>
        <button onClick={() => setStep((c) => c + 1)}
        className=' rounded-lg bg-green-400 px-3 py-1 text-white  hover:bg-green-700'>+

        </button>
      </div>
      <div className='mt-4'>
        <button onClick={() => setCount((c) => c - step)}
          className=' rounded-lg bg-red-400 px-3 py-1 text-white hover:bg-red-700'>-
          </button>
        <span className=' font-bold tracking-wider px-10'>Count {count}</span>
        <button onClick={() => setCount((c) => c + step)}
        className=' rounded-lg bg-green-400 px-3 py-1 text-white  hover:bg-green-700'>+
        </button>
      </div>
      <p className='mt-4'>
        <span className=' tracking-wider font-bold '>{count === 0
          ? "Today is "
          : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}</span>
        <span className=' tracking-wider font-bold text-red-500'>{date.toDateString()}</span>
      </p>
    </div>
  )
}
export default App
