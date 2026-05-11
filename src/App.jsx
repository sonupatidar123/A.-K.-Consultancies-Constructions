
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReviewFunnel from './ReviewFunnel'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="review" element={<ReviewFunnel />} />
        <Route path="/" element={<h1>Welcome to the Review Funnel</h1>} />
      </Routes>
    </Router>
  )
}

export default App
