import { useState } from 'react'
import "../src/index.css"
import Sidebar from './Components/SideBar/Sidebar'
import { Route, Routes } from 'react-router'
import Viewtask  from './Components/ViewTask/viewtask'
import Createtask from './Components/CreateTask/createtask'
function App() {
  const [count, setCount] = useState(0)

  return (
<>
      <div className="d-flex">
        <Sidebar/>
<Routes>
      <Route path="/viewtask" element={<Viewtask />} />
      <Route path="/" element={<Createtask />} />
      </Routes>
      </div>
</>
  )
}

export default App
