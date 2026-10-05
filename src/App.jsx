import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './Components/navbar'
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css" rel="stylesheet" />

function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleClick = (e) =>{
    let value = e.target.value
    setTodo(value)
  }

  const handleAdd = (e) =>{
    setTodos([...todos , {todo , isCompleted: false}])
    setTodo("")
  }

  const handleCheckBox = (e) =>{
    let id = e.target.name
  }

  return (
    <>
    <Navbar/>
    <div className='border border-red-800 container mx-auto max-w-5xl my-5 bg-white rounded-xl p-4 h-[80vh] w-[50%]'>
      <div className='flex justify-center '>
      <h1 className='text-xl font-bold'>iTask - Manage your todos at one place</h1>
      </div>
      <div className='mx-2 my-4'>
        <h1 className='text-xl font-bold'>Add a Todo</h1>
        <div className='flex justify-center items-center gap-4 my-4'>
          <input onChange={handleClick} className='bg-gray-200 w-[90%] px-4 py-2 rounded-2xl' value={todo} type="text" />
          <button onClick={handleAdd} className='bg-violet-400 px-4 py-2 rounded-full hover:cursor-pointer text-white font-bold'>Save</button>
        </div>
      </div>
      <div className='flex gap-2 items-center my-7.5'>
        <input type="checkbox" name="" id="" />
        <p>Show Finished</p>
      </div>
      <div className='flex justify-center items-center'>
      <div className='h-px w-[90%] bg-pink-400'>

      </div>
      </div>
      <div>
        <h1 className='text-xl font-bold mt-2 mb-4'>Your Todos</h1>
      </div>
      <div className='flex flex-col gap-2'>
        {todos.map((item) =>{
          return <div className='flex justify-between items-center'>
          <div className='flex gap-4'>
            <input onChange={handleCheckBox} className={item.isCompleted ? "line-through" : ""} type="checkbox" name="1" id="" />
          <p>{item.todo}</p>
          </div>
          <div className='flex gap-2'>
            <button className='bg-violet-400 px-4 py-2 rounded-xl hover:cursor-pointer text-white'><i class="ri-pencil-line"></i></button>
            <button className='bg-violet-400 px-4 py-2 rounded-xl hover:cursor-pointer text-white'><i class="ri-delete-bin-line"></i></button>
          </div>
        </div>
        })
        
        }
         <div className='flex justify-between items-center'>
          <div className='flex gap-4'>
            <input type="checkbox" name="" id="" />
          <p>Pen la ka aoo</p>
          </div>
          <div className='flex gap-2'>
            <button className='bg-violet-400 px-4 py-2 rounded-xl hover:cursor-pointer text-white'><i class="ri-pencil-line"></i></button>
            <button className='bg-violet-400 px-4 py-2 rounded-xl hover:cursor-pointer text-white'><i class="ri-delete-bin-line"></i></button>
          </div>
        </div>
        
        </div>
      </div>
    </>
  )
}

export default App
