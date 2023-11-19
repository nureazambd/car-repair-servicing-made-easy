import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import HeadComp from './components/HeadComp';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <HeadComp/>
      <Home/>
      <Footer/>
      {/* <Routes>
          <Route path="/" element={""}>
          <Route path="/applytobea-mechanic" element={""} />
          <Route path="/support" element={""} />
          <Route path="/our-service" element={""} />
          <Route path="/blog" element={""} />
          <Route path="/sing-in" element={""} />
          </Route>
      </Routes> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
