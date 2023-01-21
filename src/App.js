// import './App.css';

import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Addquestion from "./components/pages/addQuestions/Addquestion";
import Datapage from "./components/pages/dataPage/Datapage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes >
       <Route path="/" element={<Home/>}/>
       <Route path="/add" element={<Addquestion/>}/>
       <Route path="/:datapage" element={<Datapage/>}/>
       
      </Routes>
      <Footer />
      </BrowserRouter>
    
    </>
  );
}

export default App;
