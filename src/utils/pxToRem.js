const rootFontSize = 16

export const rem = (px = 0) =>
  px ? `${(Math.abs(px) / rootFontSize).toFixed(3)}rem` : '0rem'
