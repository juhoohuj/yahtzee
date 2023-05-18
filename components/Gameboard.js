import { View, Text, ViewComponent, Button, Pressable} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Home, NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS, NBR_OF_SCOREBOARD_ROWS, PLAYER} from "./Home";   
import { useState, useEffect } from "react";

const icons = ["dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6"]

function randomNum() {
   return Math.floor(Math.random() * 6) + 1;
}



const Gameboard = () => {

    let points = [[1, 0, true], [2, 0, true], [3, 0, true], [4, 0, true], [5, 0, true], [6, 0, true]]

    let dices = [[0, false], [0, false], [0, false], [0, false], [0, false]]
    const [thrownDices, setThrownDices] = useState([])
    let throwsLeft = NBR_OF_THROWS

    function diceThrow() {
        for (let i = 0; i < dices.length; i++) {
            dices[i][0] = randomNum()
        }
        setThrownDices([...dices])
        throwsLeft--
        console.log(throwsLeft)
    }

    const Buttons = () => {
        return (
            <View style={{flexDirection: 'row', alignSelf:"center"}}>
                {thrownDices.map((n, index) => {
                    return (
                            <MaterialCommunityIcons key={index} name={icons[n[0] - 1]} size={50} color="orange" onPress={() => dicePress(n)} />
                        )     
                })}
            </View>
        )
    }
    
    function dicePress(item) {
        let index = item[0] - 1
        console.log(index)
        if(points[index][2] == true) {
            item[1] = !item[1]
        }

        console.log(thrownDices)
    }

    function addToScore() {
        
        thrownDices.forEach((item) => {
            if(item[1] == true) {
                let number = item[0]
                points[number - 1][1] += number
                points[number - 1][2] = false
            }
        })
        console.log(points)
        setThrownDices([])
    }


    return(
        <View>
            <Text>{thrownDices}</Text>
            <Buttons/>
            <Button 
                onPress={diceThrow}
                title="Throw dices"
            />
            <Button 
                onPress={addToScore}
                title="Add to score"
            />
            
        </View>

    )
}


export {Gameboard};
