
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReviewFunnel from './ReviewFunnel'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReviewFunnel />} />
      </Routes>
    </Router>
  )
}

export default App
