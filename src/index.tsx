import { Navigation } from 'react-native-navigation';

import { Profile, News } from './screens';
import { TopBarSwitch } from './components';

console.disableYellowBox = true;

Navigation.registerComponent('Profile', () => Profile);
Navigation.registerComponent('News', () => News);
Navigation.registerComponent('TopBarSwitch', () => TopBarSwitch);

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
                        visible: false,
                      },
                      bottomTab: {
                        text: 'Home',
                        icon: require('./assets/images/profile.png'),
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              id: 'NewsScreen',
              children: [
                {
                  component: {
                    name: 'News',
                    options: {
                      bottomTab: {
                        text: 'News',
                        icon: require('./assets/images/news.png'),
                      },
                      topBar: {
                        title: {
                          text: 'News',
                        },
                        rightButtons: [
                          {
                            id: 'TopBarSwitchId',
                            component: {
                              id: 'TopBarSwitchId',
                              name: 'TopBarSwitch',
                            },
                          },
                        ],
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
