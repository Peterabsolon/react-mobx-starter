import { makeAutoObservable } from 'mobx'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'

export class AppStore {
  // ====================================================
  // Model
  // ====================================================
  session?: Session | null

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
    this.session = await getSession()
  }
}

export const app = new AppStore()
