const AppState = {
  state: {
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: null,
      type: 'default (no property)',
      clipped: false,
      floating: false,
      mini: false,
      hideOverlay: true,
      disableResizeWatcher: true,
      disableRouteWatcher: true,
      img: {
        src: require("@/assets/imgs/plant_background.jpeg"),
        gradient: 'to top right, rgba(0,0,0,.9), rgba(250,250,250,0)'       
      },
    },
    footer: {
      inset: true,
    },
  },
  mutations: {},
  actions: {}
};

export default AppState;