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