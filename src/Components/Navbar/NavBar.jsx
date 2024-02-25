import Sidebar from "./Sidebar/Sidebar"
import "./navBar.scss"
import { motion } from "framer-motion"
const NavBar = () => {
  return (
    <div className='navbar'>
      {/* SideBar */}
      <Sidebar/>
      <div className='wrapper'>
        <motion.span
        initial = {{opacity:0,scale:0.5}}
        animate = {{opacity:1,scale:1}}
        transition={{duration:.5}}
        >Taha Triqui</motion.span>
        <div className='social'>
          <a href=""><img src="facebook.png" alt="" /></a>
          <a href=""><img src="instagram.png" alt="" /></a>
          <a href=""><img src="youtube.png" alt="" /></a>
          <a href=""><img src="dribbble.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default NavBar