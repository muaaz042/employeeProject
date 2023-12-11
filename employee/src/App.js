import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/Navbar.jsx'
import AddEmployee from './Pages/AddEmployee';
import UpdateEmployee from './Pages/UpdateEmployee'
import SearchEmployee from './Pages/SearchID.jsx'
import DeleteEmployee from './Pages/DeleteID.jsx'
import GetData from './Pages/GetData.jsx';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AddEmployee/>}/>
        <Route path="/update" element={<UpdateEmployee/>}/>
        <Route path="/search" element={<SearchEmployee/>}/>
        <Route path="/delete" element={<DeleteEmployee/>}/>
        <Route path="/getData" element={<GetData/>}/>
      </Routes>
    </Router>
  );
}

export default App;
