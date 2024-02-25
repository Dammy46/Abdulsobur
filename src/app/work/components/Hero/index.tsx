import React from 'react'
import variable from './hero.module.scss'
import {motion } from 'framer-motion'
import Navbar from '@/components/Navbar'

const Hero = () => {
  return (
    <motion.header className={variable.heroWrap}>
        <Navbar/>
        <div className={variable.container}>
            <h1>
                <span>Creating next level</span>
                <span>digital products</span>
            </h1>
        </div>
    </motion.header>
  )
}

export default Hero