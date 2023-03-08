import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from "./components/Home.js"
import {Gameboard} from "./components/Gameboard.js"
import {Scoreboard} from "./components/Scoreboard.js"
import { MaterialIcons } from '@expo/vector-icons'; 



const Tab = createBottomTabNavigator();

const HOME = "Home";
const GAMEBOARD = "Gameboard";
const SCOREBOARD = "Scoreboard";


const Nav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                  name={HOME}
                  component={Home}
                  options={{tabBarIcon: ()=> <MaterialIcons name="home" size={24} color="black" />}}
                />
                <Tab.Screen 
                  name={GAMEBOARD} 
                  component={Gameboard}
                  options={{tabBarIcon: ()=> <MaterialIcons name="videogame-asset" size={24} color="black" />}}
                />
                <Tab.Screen
                  name={SCOREBOARD}
                  component={Scoreboard}
                  options={{tabBarIcon: ()=> <MaterialIcons name="leaderboard" size={24} color="black" />}}  
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Nav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
