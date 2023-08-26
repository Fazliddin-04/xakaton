import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'

import styles from './style.module.scss'

export default function Contact() {
  const [formData, setFormData] = useState({
    company_name: '',
    name: '',
    phone: '',
  })

  const { company_name, name, phone } = formData

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = () => {
    if (company_name && name && phone) {
      axios
        .post('https://customer.api.delever.uz/v1/telegram-application', {
          ...formData,
          phone: phone.replaceAll(' ', ''),
        })
        .then((res) => {
          setFormData({ company_name: '', name: '', phone: '' })
          NotificationManager.success('Мы c вами свяжемся!', 'Заявка принята')
        })
        .catch((err) => {
          NotificationManager.error('Произошла ошибка', 'Повторите еще раз')
        })
    } else {
      NotificationManager.error('Произошла ошибка', 'Заполните все поля')
    }
  }

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.contact_img}>
        <Image
          src="/image/office_contact.png"
          alt="office"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className={styles.contact_form}>
        <h2 className={styles.title}>Заявка на сотрудничество</h2>
        <div className={styles.form_control}>
          <Input
            placeholder="Ф.И.O"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <Input
            mask="+\9\98 99 999 99 99"
            placeholder="Номер Телефона"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
          <Input
            placeholder="Название Компании"
            name="company_name"
            value={company_name}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit} sx={{ width: '100%' }}>
            Отправить
          </Button>
        </div>
      </div>
      <NotificationContainer />
    </div>
  )
}
