import { TextField } from '@mui/material'
import styles from './style.module.scss'
import ReactInputMask from 'react-input-mask'

export function Input({
  label,
  mask,
  options,
  error,
  style,
  className = '',
  ...props
}) {
  return (
    <div className={styles.control} style={style}>
      {label && <label>{label}</label>}
      {mask ? (
        <ReactInputMask
          className={`${styles.input_phone} ${className}`}
          mask={mask}
          maskChar={null}
          {...props}
        />
      ) : (
        <TextField
          className={`${styles.input} ${className}`}
          hiddenLabel
          {...props}
        >
          {options}
        </TextField>
      )}
      {error && <small style={{ color: 'red' }}>{error}</small>}
    </div>
  )
}
