import AuthPage from "./Pages/Authpage"
import { Routes,Route } from "react-router-dom"
import InvoiceGenerator from "./Pages/InvoiceGenerator"

function App() {

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/invoice-genator" element={<InvoiceGenerator />} />
    </Routes>

  )
}

export default App
