import { Box, Modal as MuiModal } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
}

export function Modal({ open = false, handleClose, children, width = 340 }) {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
    >
      <Box sx={{ ...style, width }}>{children}</Box>
    </MuiModal>
  )
}
