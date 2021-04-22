<template>
  <div class="about">
    <input v-model="form.username"  />
    <input v-model="form.password" type="password"  />
    {{hasLoading('login-login')}}
    <button v-if="hasLoading('login-login')">登录中</button>
    <button @click="onLogin" v-else>登录</button>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import useLoading from '@/hooks/useLoading'
export default defineComponent({
  name: 'login',
  setup () {
    const form = reactive({
      username: '15013859709',
      password: 'Bb@123456'
    })
    const hasLoading = (key) => {
      return useLoading(key)
    }
    const store = useStore()
    const onLogin = () => {
      store.dispatch('app/login', form)
    }
    return {
      form,
      hasLoading,
      onLogin
    }
  }
})
</script>
