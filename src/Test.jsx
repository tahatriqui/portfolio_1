import React from 'react'
import {motion} from "framer-motion"
const Test = () => {
    const [open,setOpen] = React.useState(false)

    const variants = {
        visible:{opacity:1},
        hidden:{opacity:0}
    }

  return (
    <div className='course'>
        <motion.div 
        initial={{opacity:.5,scale:.5}}
         transition={{duration:2}} 
        whileTap={{opacity:1,scale:2}}
        variants={variants}
        drag
        animate={open? "visible" : "hidden"}
        className="box"
        >
        </motion.div>
        <button onClick={()=>{setOpen(prev=>!prev)}}>click</button>
    </div>
  )
}

export default Test