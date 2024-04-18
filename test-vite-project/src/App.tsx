import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Table1Page from './views/Table1Page'
import Table2Page from './views/Table2Page'

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Table1Page />} />
        <Route path="/second_table" element={<Table2Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
