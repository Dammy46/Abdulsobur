import variable from './link.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';

export default function Index({data, isActive, setSelectedIndicator}: any) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className={variable.link} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={variable.indicator}>
        </motion.div>
        <Link href={href} aria-label={title} className={variable.anchor}>{title}</Link>
      </motion.div>
    )
}