<template>
  <div id="app-bar">
    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      :color="primaryBar.color"
      :flat="primaryBar.flat"
      app
    >
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      >
        <v-icon>{{ navBarIcon }}</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title primary-title>
        <!-- <img
          :src="primaryBar.logo.src"
          :contain="primaryBar.logo.contain"
          :height="primaryBar.logo.height"
        /> -->
        {{ $store.state.appBar.title }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-menu bottom left nudge-bottom="40" nudge-left="40">
        <template v-slot:activator="{ on: alerts }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn 
                icon
                v-on="{ ...tooltip, ...alerts }"
              >
                <v-icon>mdi-bell</v-icon>
              </v-btn>
            </template>
            <span>Notifications</span>
          </v-tooltip>
        </template>
          <v-list>
            <!-- <v-list-item v-if="notifications.length <= 0"> -->
              <v-list-item>
              <v-list-item-title>No new notifications!</v-list-item-title>
            </v-list-item>
          </v-list>
      </v-menu>
        <v-menu offset-x left>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

            <v-list dark color="primary" dense>
              <v-list-item
                v-for="(item,i) in menuItems"
                :key="i"
                :to="item.path"
              >
                <v-list-item-action><v-icon>{{ item.icon }}</v-icon></v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
              <!-- <div v-if="userIsAuthenticated"> -->
                <v-divider/>
                <v-list-item @click="onLogout">
                  <v-list-item-action><v-icon>mdi-logout</v-icon></v-list-item-action>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
              <!-- </div> -->
            </v-list>
        </v-menu>

      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({  }),

  methods: {
    onLogout: function () {
      console.log("logout clicked!");
    }
  },

  computed: {
    primaryDrawer: function () {
      return this.$store.state.app.primaryDrawer;
    },
    primaryBar: function () {
      return this.$store.state.appBar;
    },
    menuItems: function () {
      return this.$store.state.appBar.items;
    },
    navBarIcon: function () {
      if (!this.primaryDrawer.model) {
        return 'mdi-menu'
      } else {
        return 'mdi-chevron-left'
      }
    }
  }
}
</script>

<style scoped>

</style>