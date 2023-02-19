import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  // const [message, SetMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:5000/message")
  //   .then(res => res.json())
  //   .then((data) => SetMessage(data.message));
  // }, []);

  return (
    <>
    <Router>
        <Header />
    </Router>
    <main className='min-h-screen bg-indigo-200 bg-opacity-25'>
    </main>
    <Router>
      <Footer />
    </Router>
    </>
  )
}

export default App