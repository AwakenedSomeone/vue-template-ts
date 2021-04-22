
interface AppStateTypes {
  token: string;
  userInfo: {}
}

interface LoadingStateTypes {
  actions: []
}

export default interface RootStateTypes {
  app: AppStateTypes;
  loading: LoadingStateTypes
}
