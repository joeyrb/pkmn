<template>
  <div id="app-footer">
    <v-footer
      :inset="footer.inset"
      absolute
      app
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({  }),

  computed: {
    footer: function () {
      return this.$store.state.app.footer;
    },
  }
}
</script>

<style scoped>

</style>