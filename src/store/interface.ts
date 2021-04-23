
import { StateUser } from './modules/app'
import { LoadingStateTypes } from './modules/loading'
export default interface RootStateTypes {
  app: StateUser;
  loading: LoadingStateTypes
}
