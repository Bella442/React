import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '@/App.css'

import { ROUTES } from '@constants/routes'
import Table1Page from '@pages/Public/Table1Page/Table1Page'
import Table2Page from '@pages/Public/Table2Page/Table2Page'

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<Table1Page />} path="/" />
        <Route element={<Table2Page />} path={ROUTES.SECOND_TABLE_PAGE} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
