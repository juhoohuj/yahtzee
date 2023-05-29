import { View, Text, ViewComponent, Pressable} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Home, NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS, NBR_OF_SCOREBOARD_ROWS, PLAYER} from "./Home";   
import { useState, useEffect } from "react";
import Styles from "../styles/Styles.js";
import { Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { Header } from "./Header";
import { Footer } from "./Footer";


const icons = ["dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6"]


const Gameboard = ( {navigation, route} ) => {
  
  function randomNum() {
    return Math.floor(Math.random() * 6) + 1;
 }

  useEffect(() => {
    if (route.params?.newGame) {
      newGame();
    }
  }, [route.params?.newGame]);

useEffect(() => {
  let totalScore = 0;
  points.forEach((item) => {
    totalScore += item[1];
  });

  if (totalScore >= BONUS_POINTS_LIMIT) {
    totalScore += BONUS_POINTS;
  }

  setScore(totalScore);

}, [addToScore])



    const [points, setPoints] = useState([
      [1, 0, true],
      [2, 0, true],
      [3, 0, true],
      [4, 0, true],
      [5, 0, true],
      [6, 0, true]
    ]);
  
    const [dices, setDices] = useState([[0, false], [0, false], [0, false], [0, false], [0, false]])
    const [thrownDices, setThrownDices] = useState([]);
    const [throwsLeft, setThrowsLeft] = useState(NBR_OF_THROWS);
    const [score, setScore] = useState(0);


    function checkPoints() {
      let pointsLeft = false;
      points.forEach((item) => {
        if (item[2] === true) {
          pointsLeft = true;
        }
      });
      return pointsLeft;
    }
  
    function diceThrow() {
      if(checkPoints() === true ) {

        for (let i = 0; i < dices.length; i++) {
          if (dices[i][1] === false) {
            dices[i][0] = randomNum();
          }

          else {
            dices[i][0] = dices[i][0];
          }
        }

        setThrownDices([...dices]);
        setThrowsLeft(throwsLeft - 1);
      } else {
        alert("No points left to add");
      }
  }
  
    const Buttons = () => {
        return (
          <View style={{ flexDirection: 'row', alignSelf: "center" }}>
            {thrownDices.map((n, index) => {

              const diceNumber = n[0];
              const isAddedToPoints = !points[diceNumber - 1][2];
              const isSelected = n[1];

              let color = "orange";
              if (isSelected) {
                color = "green";
              } else if (isAddedToPoints) {
                color = "gray";
              }
      
              return (
                <MaterialCommunityIcons
                  key={index}
                  name={icons[diceNumber - 1]}
                  size={60}
                  color={color}
                  onPress={() => dicePress(n)}
                />
              );
            })}
          </View>
        );
      };
  
      function dicePress(item) {
        const index = item[0] - 1;
        const isAlreadyAdded = !points[index][2];
      
        if (!isAlreadyAdded) {
          item[1] = !item[1];
          setThrownDices([...thrownDices]);
        }
      }

      function newGame() {
        setPoints([
          [1, 0, true],
          [2, 0, true],
          [3, 0, true],
          [4, 0, true],
          [5, 0, true],
          [6, 0, true]
        ]);
      
        setDices([[0, false], [0, false], [0, false], [0, false], [0, false]]);
        setThrownDices([]);
        setThrowsLeft(NBR_OF_THROWS);
        setScore(0);
      }
  
      function addToScore() {
        if (throwsLeft == 0) {
          thrownDices.forEach((item) => {
            if (item[1] === true) {
              let number = item[0];
              points[number - 1][1] += number;
              points[number - 1][2] = false;
            }
          });
          setThrownDices([]);
          setThrowsLeft(NBR_OF_THROWS);
          setDices([[0, false], [0, false], [0, false], [0, false], [0, false]]);

        }

        else {
          alert("You need to throw the dices first");
        }
      }

      function addScoreToScoreboard() {
        let date = new Date();
        let dateStr =
          date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        let newScore = {
          name: PLAYER,
          score: score,
          date: dateStr,
        };
      
        AsyncStorage.getItem("scoreboard")
          .then((value) => {
            let scoreboard = [];
            if (value !== null) {
              scoreboard = JSON.parse(value);
            }
            scoreboard.push(newScore);
            return AsyncStorage.setItem("scoreboard", JSON.stringify(scoreboard));
          })
          .then(() => {
            alert("Score added to scoreboard");
            return navigation.navigate("Scoreboard");
          })
          .catch((error) => console.log(error));
          newGame()
      }

    return(

        <View style={Styles.container}>
            <Header/>
          <Text style={Styles.subtitle}>Current player : {PLAYER}</Text>
          <View style={Styles.buttons}>
            <Buttons/>
          </View>
          <View>
            {throwsLeft > 0 ? <Button color="orange" containerStyle={Styles.button} onPress={diceThrow} title="Throw dices" /> : null}
            <Button color="orange" containerStyle={Styles.button} onPress={addToScore} title="Add to score" />
            <Text style={Styles.subtitle}>Throws left: {throwsLeft}</Text>
            <Text style={Styles.subtitle}>POINTS</Text>
            <View style={Styles.points}>
                {points.map((n, index) => {
                    return (
                        <View key={index} style={{flexDirection: 'column', alignItems:"center"}}>
                            <Text style={{fontWeight:"bold"}}>D{n[0]}</Text>
                            <Text>{n[1]}</Text>
                        </View>
                    )
                })}
            </View>
              <Text style={Styles.subtitle}>Current score: {score}</Text>
              {score >= BONUS_POINTS_LIMIT ? <Text style={Styles.subtitle}>You got bonus points!</Text> : null}
              {checkPoints() ? null : <Button color="green" containerStyle={Styles.button} onPress={addScoreToScoreboard} title="Add score to scoreboard" /> }
              
          </View>
          <Footer/>
        </View>

    )
}



export {Gameboard};
