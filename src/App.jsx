import { useState , useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './Components/navbar'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(() =>{
    let todoString = localStorage.getItem("todos")
    return todoString ? JSON.parse(todoString) : []
  })
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
      localStorage.setItem("todos" , JSON.stringify(todos))
  }, [todos])

  const handleClick = (e) =>{
    let value = e.target.value
    setTodo(value)
  }

  const handleAdd = (e) =>{
    setTodos([...todos , {id: uuidv4() , todo , isCompleted: false}])
    setTodo("")
  }

  const handleCheckBox = (e) =>{
    let id = e.target.name
    let index = todos.findIndex((item) =>{
      return item.id == id
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const handleDelete = (id) =>{
    let newTodos = todos.filter((item) =>{
      return item.id !== id
    })
    setTodos(newTodos)
  }

  const handleEdit = (id) =>{
    let t = todos.filter((item) =>{
      return item.id == id
    })
    setTodo(t[0].todo)
    let newTodos = todos.filter((item) =>{
      return item.id !== id
    })
    setTodos(newTodos)
  }

  const handleToggle = () =>{
    setShowFinished(!showFinished)
  }

  return (
    <>
    <Navbar/>
    <div className='border border-red-800 md:container md:mx-auto max-w-5xl my-5 bg-white rounded-xl p-4 h-[80vh] md:w-[50%] m-4'>
      <div className='flex justify-center '>
      <h1 className='text-2xl font-bold text-center'>iTask - Manage your todos at one place</h1>
      </div>
      <div className='mx-2 my-4'>
        <h1 className='text-xl font-bold'>Add a Todo</h1>
        <div className='flex justify-center items-center gap-4 my-4'>
          <input onChange={handleClick} className='bg-gray-200 w-[90%] px-4 py-2 rounded-full' value={todo} type="text" />
          <button onClick={handleAdd} disabled={todo.length < 3} className='bg-violet-800 hover:bg-violet-950 px-4 py-2 rounded-full hover:cursor-pointer text-white disabled:bg-violet-500 font-bold'>Save</button>
        </div>
      </div>
      <div className='flex gap-2 items-center my-7.5'>
        <input onChange={handleToggle} type="checkbox" name="" checked={showFinished} id="" />
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
        {todos.length == 0 && <div><p>No Todos to display</p></div>}
        {todos.map((item) =>{
          return (showFinished || !item.isCompleted) && <div key={item.id} className='flex justify-between items-center'>
          <div className='flex gap-4'>
            <input onChange={handleCheckBox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
          <p className={item.isCompleted ? "line-through" : ""}>{item.todo}</p>
          </div>
          <div className='flex gap-2'>
            <button onClick={() =>handleEdit(item.id)} className='bg-violet-800 hover:bg-violet-950 px-4 py-2 rounded-xl hover:cursor-pointer text-white'><i class="ri-pencil-line"></i></button>
            <button onClick={() => handleDelete(item.id)} className='bg-violet-800 hover:bg-violet-950 px-4 py-2 rounded-xl hover:cursor-pointer text-white'><i class="ri-delete-bin-line"></i></button>
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
