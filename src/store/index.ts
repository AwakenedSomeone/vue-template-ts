import { createStore, Store, useStore as baseUseStore } from "vuex"
import loading from './modules/loading'
import app from './modules/app'
import { InjectionKey } from "@vue/runtime-core"
import RootStateTypes from './interface'

export default createStore<RootStateTypes>({
  modules: {
    loading,
    app
  }
})
export const key:InjectionKey<Store<RootStateTypes>>=Symbol('vue-store')
export function useStore<T = RootStateTypes> () {
  return baseUseStore<T>(key)
}