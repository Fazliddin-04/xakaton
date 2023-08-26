import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

export default function Card({ data }) {
  return (
    <div className={styles.card}>
      <Image src={data.img} alt="Delever" width={65} height={65} />
      <div className={styles.title}>{data.title}</div>
    </div>
  )
}
