import "./App.css"
import "antd/dist/antd.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes, } from "react-router-dom"

import Contatcts from "./components/departmentPages/ContactMaster"

function App() {
 
  console.log("app.js called...")
  return (
    
      <div className="app">
        <Routes>
       
          <Route path="/home/:pageName" element={<Contatcts />} />
         
        </Routes>
      </div> 
  )
}

export default App

