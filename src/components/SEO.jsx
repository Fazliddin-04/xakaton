import React from 'react'
import Head from 'next/head'

export default function SEO({ title }) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0"
      />
      <meta charSet="utf-8" />
      <title>{'Delever | Система автоматизации доставки'}</title>
      <meta
        name="description"
        content="Оптимизируйте процесс доставки с помощью нашей передовой системы автоматизации доставки. Увеличьте эффективность, снизьте затраты и повысьте удовлетворенность клиентов с помощью функций интеллектуального маршрутизации, отслеживания в режиме реального времени и автоматического планирования. Оптимизируйте процесс доставки и опережайте конкурентов. Начните уже сегодня"
      />
      <meta
        name="keywords"
        content="delever, yetkazib berish, dostavka, доставка, система, делевер, delivery, system, tashkent, uzbekistan"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={'Delever | Система автоматизации доставки'}
        key="ogtitle"
      />
      <meta
        property="og:description"
        content="Оптимизируйте процесс доставки с помощью нашей передовой системы автоматизации доставки. Увеличьте эффективность, снизьте затраты и повысьте удовлетворенность клиентов с помощью функций интеллектуального маршрутизации, отслеживания в режиме реального времени и автоматического планирования. Оптимизируйте процесс доставки и опережайте конкурентов. Начните уже сегодня"
        key="ogdesc"
      />
      <meta property="og:site_name" content="Delever" key="ogsitename" />
      <meta property="og:image" content="/logo_256.png" key="ogimage" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content={'Delever | Система автоматизации доставки'}
      />
      <meta
        name="twitter:description"
        content="Оптимизируйте процесс доставки с помощью нашей передовой системы автоматизации доставки. Увеличьте эффективность, снизьте затраты и повысьте удовлетворенность клиентов с помощью функций интеллектуального маршрутизации, отслеживания в режиме реального времени и автоматического планирования. Оптимизируйте процесс доставки и опережайте конкурентов. Начните уже сегодня"
      />
      <meta name="twitter:site" content="Delever" />
      <meta name="twitter:creator" content="Udevs" />
      <meta name="twitter:image" content="/logo_256.png" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
