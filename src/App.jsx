import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Category from "./pages/Category"
import Dashboard from "./pages/Dashboard"
import Form from './pages/Form'
import { Model } from "./pages/Model"
import NotFound from "./pages/NotFound"
import Table from "./pages/Table"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/model" element={<Model />} />
        <Route path="/form" element={<Form />} />
        <Route path="/table" element={<Table />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}