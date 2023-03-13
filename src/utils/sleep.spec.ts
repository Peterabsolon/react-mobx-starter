import { sleep } from './sleep'

describe('sleep', () => {
  it('resolves promise after some period of time', async () => {
    jest.useFakeTimers()
    const spy = jest.fn()

    const promise = sleep(10000).then(spy)
    expect(spy).not.toBeCalled()

    jest.runAllTimers()
    await promise
    expect(spy).toBeCalled()

    jest.useRealTimers()
  })
})
