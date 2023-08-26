import counterReducer, {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount
} from '../counter'

describe('counter slice test', () => {
  const state = {
    value: 0
  }

  it('increment test', () => {
    let initialState = state
    let action = increment()
    let expectedState = { ...state, value: 1 }
    expect(counterReducer(initialState, action)).toEqual(expectedState)
  })

  it('decrement test', () => {
    const initialState = {
      value: 4
    }
    const action = decrement()
    const expectedState = { ...state, value: 3 }
    expect(counterReducer(initialState, action)).toEqual(expectedState)
  })

  it('increment by positive amount test', () => {
    const initialState = {
      value: 9
    }
    const action = incrementByAmount(5)
    const expectedState = { ...state, value: 14 }
    expect(counterReducer(initialState, action)).toEqual(expectedState)
  })

  it('increment async test', () => {
    const initialState = {
      value: 9
    }

    const action = incrementAsync(5)
    const expectedState = { ...state, value: 14 }

    const result = counterReducer(initialState, action)

    setTimeout(() => {
      expect(result).toBe(expectedState)
    }, 1000)
  })
})
