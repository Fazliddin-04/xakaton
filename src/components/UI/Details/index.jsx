import { useEffect } from 'react'
import styles from './style.module.scss'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '@mui/material'
import AnimatedTitle from '../AnimatedTitle'

export default function Details({
  img,
  childs,
  id = '#',
  title = '',
  side = 'left',
  devices = null,
  description = null,
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
    <div
      style={{ backgroundColor: side === 'left' ? '#f7f7f7' : '#fff' }}
      id={id}
    >
      <Container>
        <div className={styles.wrapper}>
          {side === 'left' && (
            <div className={styles.img}>
              <img src={img} alt={title} />
            </div>
          )}
          <motion.ul
            variants={container}
            initial="hidden"
            animate={controls}
            className={styles.features}
            ref={ref}
          >
            <AnimatedTitle
              className={`${styles.title} ${!devices ? 'w-100' : ''}`}
              text={title}
            />
            <p className={styles.description}>
              {description ? description : ''}{' '}
            </p>
            <div className={styles.cards}>
              {childs
                ? childs.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariant}
                      className={styles.feature_item}
                      style={{
                        backgroundColor: side === 'left' ? '#fff' : '#f7f7f7',
                      }}
                    >
                      <img src={item.img} alt="Delever" />
                      <div>
                        <h1 className={styles.feature_title}>{item.title} </h1>
                        <p className={styles.feature_about}>{item.about}</p>
                      </div>
                    </motion.li>
                  ))
                : ''}
            </div>
          </motion.ul>
          {side === 'right' && (
            <div className={styles.img}>
              <img src={img} alt={title} />
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
