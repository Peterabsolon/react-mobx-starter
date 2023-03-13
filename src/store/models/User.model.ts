import { makeAutoObservable } from 'mobx'

/**
 * TODO: Use your own type
 */
export interface IUser {
  id: string
}

export class UserModel {
  // ====================================================
  // Model
  // ====================================================
  isAwesome = true

  // ====================================================
  // Constructor
  // ====================================================
  constructor(public props: IUser) {
    makeAutoObservable(this)
  }
}
