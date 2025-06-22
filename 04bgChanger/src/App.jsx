import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive');

  function changeColor(color){
    setColor(color);
  }
  // instead of this setColor can also directly be used to apply any changes to it

  return (
    <div className="w-full fixed inset-0 duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => changeColor("red")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-600'>Red</button>
          <button onClick={() => changeColor("green")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-600'>Green</button>
          <button onClick={() => changeColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-yellow-500'>Yellow</button>
          <button onClick={() => changeColor("black")} className='outline-none px-4 py-1 rounded-full shadow-lg bg-black text-white'>Black</button>
          <button onClick={() => changeColor("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-pink-500'>Pink</button>
          <button onClick={() => changeColor("orange")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-orange-500'>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
