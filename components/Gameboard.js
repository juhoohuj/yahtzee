import { View, Text, ViewComponent, Button, Pressable} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Home, NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS, NBR_OF_SCOREBOARD_ROWS, PLAYER} from "./Home";   
import { useState, useEffect } from "react";

const icons = ["dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6"]

function randomNum() {
   return Math.floor(Math.random() * 6) + 1;
}


const Gameboard = () => {
    const [points, setPoints] = useState([
      [1, 0, true],
      [2, 0, true],
      [3, 0, true],
      [4, 0, true],
      [5, 0, true],
      [6, 0, true]
    ]);
  
    let dices = [[0, false], [0, false], [0, false], [0, false], [0, false]];
    const [thrownDices, setThrownDices] = useState([]);
    const [throwsLeft, setThrowsLeft] = useState(NBR_OF_THROWS);

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


      if(checkPoints() === true) {

        for (let i = 0; i < dices.length; i++) {
          if (dices[i][1] === false) {
            dices[i][0] = randomNum();
          }
        }

        setThrownDices([...dices]);
        setThrowsLeft(throwsLeft - 1);
        console.log(throwsLeft);
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
                  size={50}
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
          setThrownDices([...thrownDices]); // Update the thrownDices state
        }

        console.log(thrownDices);
      }
  
      function addToScore() {
        thrownDices.forEach((item) => {
          if (item[1] === true) {
            let number = item[0];
            points[number - 1][1] += number;
            points[number - 1][2] = false;
          }
        });
        console.log(points);
        setThrownDices([]);
      }

    return(
        <View>
            <Text>{thrownDices}</Text>
            <Buttons/>
            <Button onPress={diceThrow} title="Throw dices" />
            <Button onPress={addToScore} title="Add to score" />
            <Text>Throws left: {throwsLeft}</Text>
            <Text>POINTS</Text>
            <View style={{flexDirection: 'row', alignSelf:"center"}}>
                {points.map((n, index) => {
                    return (
                        <View key={index} style={{flexDirection: 'column', alignSelf:"center"}}>
                            <Text>{n[0]}</Text>
                            <Text>{n[1]}</Text>
                        </View>
                    )
                })}
            </View>
                <Button title="test" onPress={checkPoints}/>
        </View>

    )
}


export {Gameboard};
