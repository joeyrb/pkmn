<template>
  <v-app id="sandbox">
    
    <AppDrawer/>

    <AppBar/>

    <v-content>
      <router-view></router-view>
    </v-content>

    <AppFooter/>
  </v-app>
</template>

<script>
import AppDrawer from '@/components/app/AppDrawer.vue'
import AppBar from '@/components/app/AppBar.vue'
import AppFooter from '@/components/app/AppFooter.vue'

export default {
  data: () => ({
  }),

  components: {
    AppDrawer,
    AppBar,
    AppFooter,
  },
}
</script>