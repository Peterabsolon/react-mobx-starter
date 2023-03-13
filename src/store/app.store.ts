import { makeAutoObservable } from 'mobx'

export class AppStore {
  // ====================================================
  // Services
  // ====================================================
  foo = ''

  // ====================================================
  // Constructor
  // ====================================================
  constructor() {
    makeAutoObservable(this)
  }

  // ====================================================
  // Public
  // ====================================================
  init = async () => {
    console.log('[AppStore] init')
  }
}

export const app = new AppStore()
