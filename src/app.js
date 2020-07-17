import { Navigation } from 'react-native-navigation';

import { Profile, News } from './screens';

console.disableYellowBox = true;

Navigation.registerComponent('Profile', () => Profile);
Navigation.registerComponent('News', () => News);

Navigation.setDefaultOptions({
  topBar: {
    background: {
      color: '#cef0fd',
    },
  },
  bottomTab: {
    fontSize: 20,
    selectedFontSize: 20,
    textColor: 'rgb(50, 50, 50)',
  },
  bottomTabs: {
    backgroundColor: '#cef0fd',
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Profile',
                    options: {
                      topBar: {
                        title: {
                          text: 'Blog',
                        },
                      },
                      bottomTab: {
                        text: 'Home',
                        disableIconTint: true,
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'News',
                    options: {
                      topBar: {
                        title: {
                          text: 'News',
                        },
                      },
                      bottomTab: {
                        text: 'News',
                        disableIconTint: true,
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
