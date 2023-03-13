import { sleep } from './sleep'

const runTest = async (fn: Function, ms: number) => {
  await sleep(ms)
  fn()
}

describe('sleep', () => {
  it('resolves promise after some period of time', async () => {
    jest.useFakeTimers()

    const fn = jest.fn()
    const promise = runTest(fn, 500)

    expect(fn).not.toBeCalled()
    jest.advanceTimersByTime(500)
    await promise
    expect(fn).toBeCalled()
  })
})
