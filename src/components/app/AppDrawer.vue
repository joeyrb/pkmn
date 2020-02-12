<template>
  <div id="app-drawer">
    <v-container fluid>
      <v-navigation-drawer
        v-model="primaryDrawer.model"
        :clipped="primaryDrawer.clipped"
        :floating="primaryDrawer.floating"
        :mini-variant="primaryDrawer.mini"
        :permanent="primaryDrawer.type === 'permanent'"
        :temporary="primaryDrawer.type === 'temporary'"
        :hide-overlay="primaryDrawer.hideOverlay"
        :disable-resize-watcher="primaryDrawer.disableResizeWatcher"
        :disable-route-watcher="primaryDrawer.disableRouteWatcher"
        overflow
        app
        :dark="primaryDrawer.dark"
      >

        <v-img
          :aspect-ratio="16/9"
          :src="$store.state.app.primaryDrawer.img.src"
          :gradient="$store.state.app.primaryDrawer.img.gradient"
        >
          
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <v-avatar color="accent" size="48">
                <span class="white--text headline">J</span>
              </v-avatar>
              <!-- <div v-if="userIsAuthenticated" class="title">{{ username }}</div> -->
              <div class="title">{{ $store.state.navDrawer.drawerTitle }}</div>
              <div class="body-1">{{ $store.state.navDrawer.drawerSubtitle }}</div>
              </v-col>
          </v-row>
        </v-img>

        <v-divider></v-divider>

        <v-list
          dense
          nav
          shaped
        >
          <v-list-item-group
            v-model="item"
            color="accent"
          >

          </v-list-item-group>
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            link
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    item: 1,
  }),

  computed: {
    drawers: function () {
      return this.$store.state.app.drawers;
    },
    primaryDrawer: function () {
      return this.$store.state.app.primaryDrawer;
    },
    menuItems: function () {
      return this.$store.state.navDrawer.menuItems;
    },
    drawerTitle: function () {
      return this.$store.state.navDrawer.drawerTitle;
    },
    drawerSubtitle: function () {
      return this.$store.state.navDrawer.drawerSubtitle;
    }
  }
}
</script>