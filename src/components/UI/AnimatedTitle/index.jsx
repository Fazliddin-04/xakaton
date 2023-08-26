import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const AnimatedTitle = ({ text, delay = 0, ...props }) => {
  const words = text.split(' ')
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        delay: delay,
        staggerChildren: 0.12,
        delayChildren: 0.08 * i + delay,
      },
    }),
  }

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
      }}
      variants={container}
      initial="hidden"
      animate={controls}
      ref={ref}
      {...props}
    >
      {words.map((word) => (
        <motion.span variants={child} style={{ marginRight: '5px' }} key={word}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedTitle
