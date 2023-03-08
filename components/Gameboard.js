import { View, Text, } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Home, NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS, NBR_OF_SCOREBOARD_ROWS, PLAYER} from "./Home";   
import { useState } from "react";

let icons = ["dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6"]

function randomNum() {
   return Math.floor(Math.random() * 6) + 1;
}

let dices = [0,0,0,0,0,0]

function diceThrow() {
    for (let i = 0; i < dices.length; i++) {
        dices[i] = randomNum()
    }

    console.log(dices)
    
    return(
        dices.map(n => 
        <MaterialCommunityIcons name={icons[n - 1]} size={50} color="black" />  
        )
    )
}

let dicesThrown = []


const Gameboard = () => {

    return(
        <Text>{diceThrow()}</Text>
    )
}

diceThrow()

export {Gameboard};