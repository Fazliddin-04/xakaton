const { rem } = require('../pxToRem')

describe('px to rem util test', () => {
  it('Positive case px to rem test', () => {
    expect(rem(5)).toBe('0.313rem')
    expect(rem(-5)).toBe('0.313rem')
  })

  it('Negative case px to rem test', () => {
    expect(rem(null)).toBe('0rem')
    expect(rem(undefined)).toBe('0rem')
    expect(rem(0)).toBe('0rem')
  })
})
