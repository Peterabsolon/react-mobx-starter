import { makeAutoObservable } from 'mobx'
import { Session } from 'next-auth'
import { getSession, signOut } from 'next-auth/react'

export class AppStore {
  // ====================================================
  // Model
  // ====================================================
  session?: Session | null = null

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

  logout = async () => {
    await signOut()
  }
}

export const app = new AppStore()
