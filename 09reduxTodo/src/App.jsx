import './index.css'
import Form from './components/addtodo'
import Iteam from './components/todos'
import Api from './hook'
import './index.css'


function App() {

  return (

    <div className="flex flex-col items-center p-4">
      <h1 className='bg-red-400 text-white rounded h-15 w-100 text-center text-2xl font-bold'> CREATE SOME TODOS</h1>
      <div className="bg-white my-20 shadow-lg rounded-lg p-6 px-174">
      {/* <Form/>
      <Iteam/> */}
      <Api/>
    </div>
    </div>
  )
}

export default App
