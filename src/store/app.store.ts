import { makeAutoObservable } from 'mobx'

export class AppStore {
  // ====================================================
  // Services
  // ====================================================

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
