import { useRef } from "react"
import "./Portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items = [
  {
    id:1,
    title:"React Component",
    img:"https://images.pexels.com/photos/20327411/pexels-photo-20327411/free-photo-of-bois-bleu-building-batiment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel nostrum veritatis cum dolorum, aspernatur nisi consequatur fuga sed ullam quibusdam a quidem velit. Voluptatibus magni rerum repellat. Eos, eum.",
  },{
    id:2,
    title:"laravel",
    img:"https://images.pexels.com/photos/20327411/pexels-photo-20327411/free-photo-of-bois-bleu-building-batiment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel nostrum veritatis cum dolorum, aspernatur nisi consequatur fuga sed ullam quibusdam a quidem velit. Voluptatibus magni rerum repellat. Eos, eum.",
  },{
    id:3,
    title:"Next.js",
    img:"https://images.pexels.com/photos/1632035/pexels-photo-1632035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel nostrum veritatis cum dolorum, aspernatur nisi consequatur fuga sed ullam quibusdam a quidem velit. Voluptatibus magni rerum repellat. Eos, eum.",
},{
  id:4,
  title:"vanilla js",
  img:"https://images.pexels.com/photos/20327411/pexels-photo-20327411/free-photo-of-bois-bleu-building-batiment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel nostrum veritatis cum dolorum, aspernatur nisi consequatur fuga sed ullam quibusdam a quidem velit. Voluptatibus magni rerum repellat. Eos, eum.",
}
]


const Single = ({item}) =>{
  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    // offset:["start start","end start"]
  });

  const y = useTransform(scrollYProgress,[0,1], [-300,300])

  return (
          <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
          </div>
        <motion.div className="textCantainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>)
   
  
}

const Portfolio = () => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","start start"]
  });
  const scaleX = useSpring(
    scrollYProgress,
    {stifness:100,damping:30})
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featurs Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item,index)=> <Single key={item.id} item ={item}/> )}
    </div>
  )
}

export default Portfolio