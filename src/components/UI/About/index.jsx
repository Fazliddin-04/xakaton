import { useEffect } from 'react'
import { Container } from '@mui/material'
import styles from './style.module.scss'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import AnimatedTitle from '../AnimatedTitle'
const { motion, useAnimation } = require('framer-motion')

export default function About() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <Container id="about" ref={ref}>
      <div className={styles.about}>
        <AnimatedTitle className={styles.title} text="О нас" />
        <AnimatedTitle
          className={styles.text}
          text="Предоставляем платформу для облегчения и ускорения процесса доставки с
          подробными отчетами."
        />
        {/* <motion.p
          className={styles.}
          variants={item}
          initial="hidden"
          animate="visible"
        > */}
        <AnimatedTitle
          className={styles.text}
          text="Наша особенность - мы гибки. У вас есть возможность обратиться к нашим
        разработчикам с задачей изменить или добавить определенную функцию для
        удобства вашего бизнеса."
        />
        <AnimatedTitle
          className={styles.text}
          text="С нами сотрудничают крупнейшие бренды рынка Узбекистана. Каждый
        день с ними мы бок о бок стремимся к увеличению продаж на доставку"
        />
        {/* </motion.p> */}
        <div className={styles.box}>
          <div className={styles.card}>
            <Image
              src="/image/location.svg"
              alt="location"
              width={64}
              height={65}
            />
            <div className={styles.card_info}>
              <h4>+85</h4>
              <p>Ресторанов</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/image/note.svg" alt="note" width={64} height={65} />
            <div className={styles.card_info}>
              <h4>+2 000 000</h4>
              <p>Заказов</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image src="/image/star.svg" alt="star" width={64} height={65} />
            <div className={styles.card_info}>
              <h4>+35</h4>
              <p>Брендов</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
