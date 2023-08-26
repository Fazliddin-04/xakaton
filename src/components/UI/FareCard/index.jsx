import classNames from 'classnames'
import styles from './style.module.scss'
import useTranslation from 'next-translate/useTranslation'

export function FareCard({ title, details, price, active, ...props }) {
  const { t } = useTranslation('common')

  return (
    <div
      className={classNames(styles.card, { [styles.active]: active })}
      {...props}
    >
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.details}>
        <p>
          Бесплатный период <span>{details?.trial_days} дней</span>
        </p>
        <p>
          Тип <span>{t(details?.type)}</span>
        </p>
        <p>
          Бесплатных заказов <span>{details?.trial_orders} шт.</span>
        </p>
        <p>
          Абонентская плата{' '}
          <span>
            {details?.fix_price} {details?.currency}/мес.
          </span>
        </p>
      </div>
      <div className={styles.details}>
        <h4>Сумма за единицу заказа:</h4>
        <p>
          За доставку{' '}
          <span>
            {details?.subscription_fee === 'fixed'
              ? `${details?.delivery?.fixed_price} ${details?.currency}`
              : `${details?.delivery?.percent}%`}
          </span>
        </p>
        <p>
          За самовывоз{' '}
          <span>
            {' '}
            {details?.subscription_fee === 'fixed'
              ? `${details?.self_pickup?.fixed_price} ${details?.currency}`
              : `${details?.self_pickup?.percent}%`}
          </span>
        </p>
        <p>
          За заказ агрегатора{' '}
          <span>
            {' '}
            {details?.subscription_fee === 'fixed'
              ? `${details?.aggregator?.fixed_price} ${details?.currency}`
              : `${details?.aggregator?.percent}%`}
          </span>
        </p>
      </div>
      <div className={styles.footer}>
        <h4>Сумма подключения</h4>
        <p>5 000 000 сум</p>
      </div>
    </div>
  )
}
