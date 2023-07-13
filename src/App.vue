<template>
  <q-layout view="hHr LpR lFf" class="bg-grey-2 text-dark">
      <SideBar></SideBar>
      <q-page-container class="row justify-center">
        <Home></Home>
        <router-view></router-view>
      </q-page-container>
  </q-layout>
</template>
<script>
import { ref } from 'vue'

import SideBar from "./components/SideBar.vue"
import Home from "./views/Home.vue"
export default {
  name: 'LayoutDefault',

  components: {
    Home,
    SideBar
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
