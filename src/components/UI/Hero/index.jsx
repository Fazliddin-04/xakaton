import { useEffect } from 'react'
import { Container } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import styles from './style.module.scss'
import { Button } from '../Button'
import { useInView } from 'react-intersection-observer'
const { motion, useAnimation } = require('framer-motion')
import MotionImage from '../MotionImage'
import AnimatedTitle from '../AnimatedTitle'

export default function Hero() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const router = useRouter()
  const { t } = useTranslation('common')

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.4 + 2,
        staggerChildren: 0.4,
      },
    },
  }

  const item = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.wrapper} ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={container}
            className={styles.content}
          >
            <AnimatedTitle
              text="Доставка теперь легко и просто"
              className={styles.title}
              delay={1.5}
            />
            <motion.p variants={item}>
              Мульти-функциональная платформа для облегчения и ускорения
              процесса доставки
            </motion.p>
            <motion.div variants={item}>
              {/* <Button onClick={() => router.push('/connect')}> */}
              <Button onClick={() => router.push('/#contact')}>
                {/* Зарегистрироваться */}
                Связаться с нами
              </Button>
            </motion.div>
          </motion.div>
          <div
            className={styles.image_box}
            style={{
              overflow: 'visible',
            }}
          >
            <MotionImage
              src="/image/laptop_phone.png"
              alt="laptop_phone"
              width={657}
              height={320}
              layout="responsive"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
