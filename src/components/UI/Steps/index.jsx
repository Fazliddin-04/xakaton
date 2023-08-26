import React from 'react'
import styles from './style.module.scss'
import { Container } from '@mui/material'
import Image from 'next/image'

export default function Steps() {
  return (
    <Container>
      <div className={styles.container} id="steps">
        <h1 className={styles.title}>Этапы работы</h1>
        <div className={styles.wrapper}>
          <Image
            src="/image/bg_steps.svg"
            alt="process diagram"
            layout="fill"
          />
        </div>
      </div>
    </Container>
  )
}
