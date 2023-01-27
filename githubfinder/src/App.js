// import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Alert from './components/layout/Alert'
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from './pages/NotFound'
import User from './pages/User'
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
     <div className=" contain d-flex flex-column justify-content-between">
       <Navbar />

       <main className="container mx-auto px-3 pb-2">
         <Alert />
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:login" element={<User />} />
            <Route path="/notfound" element= {<NotFound />} />
            <Route path="/*" element= {<NotFound />} />
  
          </Routes>
          </main>

       <Footer />
     </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
