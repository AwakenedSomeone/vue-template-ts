

export interface LoadingStateTypes {
  actions: string[]
}
const state:LoadingStateTypes = {
  actions: []
}

const mutations:any = {
  ADD_ACTIONS (state:LoadingStateTypes, actionKey:string) {
    state.actions.push(actionKey)
  },
  REMOVE_ACTIONS (state: LoadingStateTypes, actionKey:string) {
    if (state.actions.includes(actionKey)) {
      state.actions.splice(state.actions.findIndex((x:String) => x === actionKey), 1)
    }
  }
}

export default { namespaced: true, state, mutations }
