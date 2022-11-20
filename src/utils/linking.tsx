const config = {
  screens: {
    Home: 'home',
    Profile: {
      path: 'profile/:id',
      parse: {
        id: id => `${id}`,
      },
    },
    Notifications: 'notifications',
    User: 'user',
  },
};

const linking = {
  prefixes: ['RNDeepLinkingDemo://app', 'www.example.com'],
  config,
};

export default linking;
