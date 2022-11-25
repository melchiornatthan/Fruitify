import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, History} from '../';
import { Image } from 'react-native';
import AppleGreen from './appleGreen.png';
import AppleRed from './appleRed.png';
import BananaOpen from './bananaOpen.png';
import BananaClosed from './bananaClosed.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? AppleRed : AppleGreen;
          } else if (route.name === 'History') {
            iconName = focused ? BananaOpen : BananaClosed;
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{
                width: 30,
                height: 30,
                alignSelf: 'center',
                paddingBottom: 10,
              }}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#FF731D',
        tabBarInactiveBackgroundColor: '#FFFFFF',
        tabBarItemStyle: {
          borderRadius: 10,
          margin:3
        }
      })}
     
      >
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default Dashboard;
