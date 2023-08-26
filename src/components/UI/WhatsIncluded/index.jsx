import { useEffect, useMemo } from 'react'
import { Container } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import styles from './style.module.scss'
import { useInView } from 'react-intersection-observer'
import Card from './Card/Card'
import AnimatedTitle from '../AnimatedTitle'
const { motion, useAnimation } = require('framer-motion')

export default function WhatsIncluded() {
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
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  }

  const childVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const displayData = useMemo(
    () => [
      {
        title: 'Приложение для клиента',
        img: '/image/products.svg',
      },
      {
        title: 'Приложение для курьера',
        img: '/image/delever.svg',
      },
      {
        title: 'Приложение для филиалов',
        img: '/image/branch.svg',
      },
      {
        title: 'Админ панель для руководствa',
        img: '/image/person.svg',
      },
      {
        title: 'Админ панель для операторов',
        img: '/image/user.svg',
      },
      {
        title: 'Админ панель для маркетолога',
        img: '/image/diagrams.svg',
      },
    ],
    []
  )

  return (
    <div className={styles.what_is_included}>
      <Container id="includes">
        <AnimatedTitle
          className={styles.title}
          text="Что включает в себя Delever?"
        />
        {/* <p className={styles.text}>
                Платформа включает в себя несколько видов, приложений. Такие
                приложения как для клиентов, так и для курьеров и руководства.
                Разработанные для удобства управления и контроля платформы.
                <br /> Здесь мы перечислили все приложения платформы.
              </p> */}
        <motion.div
          className={styles.box}
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          {displayData.map((item) => (
            <motion.div variants={childVariant} key={item.title}>
              <Card data={item} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}
