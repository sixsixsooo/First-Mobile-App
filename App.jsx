import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import { View } from 'react-native'; 

const Drawer = createDrawerNavigator();

function ScreenWrapper({ children, title, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header title={title} />
      <View style={{ flex: 1 }}>{children}</View>
      <Footer navigation={navigation} />
    </View>
  );
}

function HomeWrapper({ navigation }) {
  return (
    <ScreenWrapper title="Главная" navigation={navigation}>
      <HomeScreen />
    </ScreenWrapper>
  );
}

function ProfileWrapper({ navigation }) {
  return (
    <ScreenWrapper title="Профиль" navigation={navigation}>
      <ProfileScreen />
    </ScreenWrapper>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeWrapper} />
        <Drawer.Screen name="Profile" component={ProfileWrapper} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}