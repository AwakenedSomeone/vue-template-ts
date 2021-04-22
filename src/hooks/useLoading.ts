import store from '../store'
import { computed } from 'vue'
function useLoading (key: string) {
  const loadings:any = computed(() => {
    return store.state.loading.actions
  })
  return loadings.value.includes(key)
}

export default useLoading