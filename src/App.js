import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Content from './components/Content';
import { Products } from './components/products/Products';
import { UseStateDemo } from './components/UseStateDemo';
import { UseStateDemo2 } from './components/UseStateDemo2';
import { Route, Routes } from 'react-router-dom';
import { NetflixHome } from './Netflix/NetflixHome';
import { NetflixShows } from './Netflix/NetflixShows';
import { NetflixMovies } from './Netflix/NetflixMovies';
import { Error404 } from './Error404';
import { Navbar } from './Navbar';
import { PlayShows } from './Netflix/PlayShows';
function App() {
  // var name ="Tithi"
  // var age = 23
  // var isActive = true
  // var user ={
  //   name: "vedu",
  //   age: 24,
  // }
  return (
    <div className="App">
      {/* <Header></Header> */}
      {/* <Products></Products> */}
      {/* <UseStateDemo></UseStateDemo> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      {/* <Content></Content> */}
      
      {/* {name} */}
      {/* <h1>name = {name}</h1>
      <h1>age = {age}</h1>
      <h1>Status ={isActive==true?"Active":"Not Active"}</h1>
      <h2>{user.name}</h2> */}
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element ={<Content/>}></Route>
        <Route path='/netflix/home' element={<NetflixHome/>}></Route>
        <Route path='/netflix/shows' element={<NetflixShows/>}></Route>
        <Route path='/netflix/movies' element={<NetflixMovies/>}></Route>
        <Route path='/netflix/playshow/:id' element={<PlayShows/>}></Route>
        <Route path="/*" element ={<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
