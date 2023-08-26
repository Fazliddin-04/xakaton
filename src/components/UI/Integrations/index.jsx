import { Container } from '@mui/material'
import styles from './style.module.scss'
import Image from 'next/image'
import { useEffect, useMemo } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedTitle from '../AnimatedTitle'

export default function Integrations() {
  const integrations = useMemo(
    () => ({
      payment: [
        {
          img: '/image/Integrations/click.png',
          id: 'click',
          name: 'click',
        },
        {
          img: '/image/Integrations/payme.png',
          id: 'payme',
          name: 'payme',
        },
        {
          img: '/image/Integrations/uzum.png',
          id: 'uzum',
          name: 'uzum',
        },
      ],
      sms: [
        {
          img: '/image/Integrations/eskiz.png',
          id: 'eskiz',
          name: 'eskiz',
        },
        {
          img: '/image/Integrations/play_mobile.png',
          id: 'play_mobile',
          name: 'play_mobile',
        },
      ],
      pos: [
        {
          img: '/image/Integrations/iiko.png',
          id: 'iiko',
          name: 'iiko',
        },
        {
          img: '/image/Integrations/jowi.png',
          id: 'jowi',
          name: 'jowi',
        },
        {
          img: '/image/Integrations/poster.png',
          id: 'poster',
          name: 'poster',
        },
        {
          img: '/image/Integrations/r_keeper.png',
          id: 'r_keeper',
          name: 'r_keeper',
        },
      ],
      others: [
        {
          img: '/image/Integrations/tg_bot.png',
          id: 'tg_bot',
          name: 'tg_bot',
        },
        {
          img: '/image/Integrations/yandex.png',
          id: 'yandex',
          name: 'yandex',
        },
      ],
    }),
    []
  )

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const container = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  }

  const variant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <Container sx={{ pt: '80px' }} id="integrated">
      <div className={styles.integrations}>
        <AnimatedTitle className={styles.title} text="Интеграции с системами" />
        <motion.div
          className={styles.integrations_wrapper}
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <h3>POS</h3>
          <div>
            {integrations.pos.map((system) => (
              <motion.div key={system.id} variants={variant}>
                <Image
                  src={system.img}
                  alt={system.name}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            ))}
          </div>
          <h3>Платежные системы</h3>
          <div>
            {integrations.payment.map((system) => (
              <motion.div key={system.id} variants={variant}>
                <Image
                  src={system.img}
                  alt={system.name}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            ))}
          </div>
          <h3>SMS-провайдеры</h3>
          <div>
            {integrations.sms.map((system) => (
              <motion.div key={system.id} variants={variant}>
                <Image
                  src={system.img}
                  alt={system.name}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            ))}
          </div>
          <h3>Другие</h3>
          <div>
            {integrations.others.map((system) => (
              <motion.div key={system.id} variants={variant}>
                <Image
                  src={system.img}
                  alt={system.name}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  )
}
