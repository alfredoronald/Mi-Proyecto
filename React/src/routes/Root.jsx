import { Outlet } from "react-router-dom";
import './Root.css'
import NavBar from "../Components/NavBar/NavBar";
import HomePage from "../features/Pages/Home/HomePage";


export default function Root() {
    return (
      <>
        <NavBar/>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }