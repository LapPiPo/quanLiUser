import {Link, Route, Routes} from "react-router-dom";
import ListUser from "./ListUser";
import Login from "./Login";
import Register from "./Register";
import Edit from "./Edit";
import Reviews from "./Reviews";

function App() {
  return (
   <>
       <div className={'nav'}><button><Link to={"/"}> Login </Link></button></div>
       <div><button><Link to={"/Register"}> Register </Link></button></div>
       <div><button><Link to={"/list"}> list </Link></button></div>
       <Routes>
           <Route path="/list" element={<ListUser/>} />
           <Route path="/" element={<Login/>} />
           <Route path="/Register" element={<Register/>} />
           <Route path="/edit/:id" element={<Edit/>} />
           <Route path="/reviews/:id" element={<Reviews/>} />
       </Routes>
   </>
  )
}

export default App;