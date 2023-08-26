import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './style.module.scss'
import Image from 'next/image'

export default function MotionImage({
  src,
  alt,
  style,
  add,
  layout = 'fill',
  ...props
}) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  }

  return (
    <motion.div
      variants={variants}
      animate={controls}
      initial="hidden"
      ref={ref}
      className={styles.box}
    >
      <Image
        src={src}
        alt={alt}
        style={style}
        className={styles[add]}
        layout={layout}
        {...props}
      />
    </motion.div>
  )
}
