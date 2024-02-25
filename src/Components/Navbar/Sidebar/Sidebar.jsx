import './Sidebar.scss'
import Links from "./Links/Links"
import ToogleButton from './ToogleButton/ToogleButton'
import { useState } from 'react'
import {motion} from 'framer-motion'
 
const Sidebar = () => {

    const [open,setOpen] = useState(false)

    const varitants={
        open:{
            clipPath:"circle(1000px at 50px 50px)",
            trasition:{
                delay:0.5,
                type:"spring",
                stiffness:20,
            } 
        },
        closed:{
            clipPath:"circle(25px at 50px 50px)",
            trasition:{
                delay:0.5,
                type:"spring",
                stiffness:400,
                damping:40,
            }

        }
    }
  return (
    <motion.div className='sidebar' animate={open ? "open" :"closed"}>
        <motion.div className="bg" variants={varitants}>
        <Links/>
        </motion.div>
        <ToogleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar