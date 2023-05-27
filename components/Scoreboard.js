import { View, Text, ViewComponent, Pressable, ScrollView, useLayoutEffect, useCallback} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Home, NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS, NBR_OF_SCOREBOARD_ROWS, PLAYER} from "./Home";   
import { useState, useEffect } from "react";
import Styles from "../styles/Styles.js";
import { Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { DataTable } from 'react-native-paper';



const Scoreboard = ( {navigation} ) => {

    const [scores, setScores] = useState([])

    //function to get scores from async storage and set them to state
    const getScores = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('scoreboard');
          if (jsonValue !== null) {
            const parsedValue = JSON.parse(jsonValue);
            setScores(parsedValue);
          }
        } catch (e) {
          console.log(e);
        }
      };

    //function to sort scores
    const sortScores = () => {
        const sortedScores = [...scores].sort((a, b) => {
          return b[1] - a[1];
        });
      
        setScores(sortedScores);
      };

    //useEffect to get scores from async storage and sort them
    useEffect(() => {
        const getAndSortScores = async () => {
          await getScores();
          sortScores();
        };
      
        getAndSortScores();
      
        const unsubscribe = navigation.addListener("focus", getAndSortScores);
      
        return unsubscribe;
      }, [navigation]);

      function clearScores() {
        AsyncStorage.removeItem('scoreboard');
        getScores();
      }



      return (
        <View style={Styles.scorecontainer}>
          <Text style={Styles.subtitle}>Scoreboard</Text>
          <DataTable style={{ flex: 1 }}>
            <DataTable.Header>
              <DataTable.Title style={{ flex: 1, justifyContent: 'center' }}>Date</DataTable.Title>
              <DataTable.Title style={{ flex: 1, justifyContent: 'center' }}>Player</DataTable.Title>
              <DataTable.Title style={{ flex: 1, justifyContent: 'center' }}>Score</DataTable.Title>
            </DataTable.Header>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              {scores.map((item, index) => {
                return (
                  <DataTable.Row key={index}>
                    <DataTable.Cell style={{ flex: 1, justifyContent: 'center' }}>{item.date}</DataTable.Cell>
                    <DataTable.Cell style={{ flex: 1, justifyContent: 'center' }}>{item.name}</DataTable.Cell>
                    <DataTable.Cell style={{ flex: 1, justifyContent: 'center' }}>{item.score}</DataTable.Cell>
                  </DataTable.Row>
                );
              })}
            </ScrollView>
          </DataTable>
          <Button style={Styles.button} onPress={() => navigation.navigate('Home')}>
            Back to Home
          </Button>
          <Button style={Styles.button} onPress={() => navigation.navigate('Gameboard', { newGame: true })}>
            Play Again
          </Button>
          <Button style={Styles.button} title="test" onPress={clearScores} />
        </View>
      );
      
}



export {Scoreboard};