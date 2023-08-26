import { Button as MuiButton } from '@mui/material'

export function Button({
  variant = 'contained',
  disabled = false,
  children,
  ...props
}) {
  return (
    <MuiButton
      variant={variant}
      disableElevation={true}
      disabled={disabled}
      {...props}
    >
      {children}
    </MuiButton>
  )
}
