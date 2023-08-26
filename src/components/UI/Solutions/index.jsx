import React, { useEffect } from 'react'
import styles from './style.module.scss'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Container } from '@mui/material'
import AnimatedTitle from '../AnimatedTitle'

export default function Solutions({
  title = 'Позволяет решать задачи бизнеса',
  img,
  childs,
  id = '#',
}) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const container = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <Container>
      <div className={styles.wrapper} id={id}>
        <div className={styles.content}>
          <AnimatedTitle text={title} className={styles.title} />
          <div className={styles.tasks}>
            <div className={styles.phone}>
              <Image src={img} alt="solutions" width={260} height={528} />
            </div>
            <motion.ul
              variants={container}
              initial="hidden"
              animate={controls}
              className={styles.features}
              ref={ref}
            >
              {childs
                ? childs.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariant}
                      className={styles.feature_item}
                    >
                      <img src={item.img} alt="Delever" />
                      <div>
                        <h3 className={styles.feature_title}>{item.title} </h3>
                        <p className={styles.feature_about}>{item.about}</p>
                      </div>
                    </motion.li>
                  ))
                : ''}
            </motion.ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
