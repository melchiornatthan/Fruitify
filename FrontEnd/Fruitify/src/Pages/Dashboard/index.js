import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, History} from '../';
const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="History" component={History} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default Dashboard;