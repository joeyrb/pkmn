const AppBar = {
	state: {
		title: 'PokeDex',
		color: null,
		dark: true,
		flat: false,
		logo: {
			src: require("@/assets/imgs/logo-sm.png"),
			contain: true,
			height: 40
		},
		items: [
			{
				title: 'About',
        icon: 'mdi-information',
				path: '/about',
				action: null,
      },
			{
				title: 'Settings',
				icon: 'mdi-settings',
				path: '/settings',
				action: null
			},
		]
	},
	mutations: {},
	actions: {}
};

export default AppBar;