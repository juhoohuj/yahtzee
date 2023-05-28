import { View, Text, ScrollView,} from "react-native"
import { useState, useEffect } from "react";
import Styles from "../styles/Styles.js";
import { Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataTable } from 'react-native-paper';



const Scoreboard = ( {navigation} ) => {

    const [scores, setScores] = useState([])

    //function to get scores from async storage and set them to state
    const getScores = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('scoreboard');
        if (jsonValue !== null) {
          const parsedValue = JSON.parse(jsonValue);
          const sortedScores = parsedValue.sort((a, b) => {
            return b.score - a.score;
          });
          setScores(sortedScores);
        }
      } catch (e) {
        console.log(e);
      }
    };

    //useEffect to get scores from async storage and sort them
    useEffect(() => {
        getScores();
        const unsubscribe = navigation.addListener("focus", getScores);
      
        return unsubscribe;
      }, [navigation]);


      
      function clearScores() {
        AsyncStorage.removeItem('scoreboard');
        getScores();
      }



      return (
        <View style={Styles.scorecontainer}>
          <Text style={Styles.subtitle}>Top scores</Text>
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
          <Button containerStyle={Styles.button} onPress={() => navigation.navigate('Home')}>
            Back to Home
          </Button>
          <Button title="Play Again" containerStyle={{...Styles.button, marginBottom:20,}} onPress={() => navigation.navigate('Gameboard', { newGame: true })}>
          </Button>
        </View>
      );
      
}



export {Scoreboard};