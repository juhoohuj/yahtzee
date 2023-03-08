import { View, Text, } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Home, NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS, NBR_OF_SCOREBOARD_ROWS, PLAYER} from "./Home";   
import { useState } from "react";

const Gameboard = () => {
    return(
        <Text>{PLAYER}</Text>
    )
}


export {Gameboard};