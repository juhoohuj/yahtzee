import { View, Text, Button, StyleSheet } from "react-native"
import { useState } from "react"
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';



const rules = "THE GAME: Upper section of the classic Yahtzee dice game. You have {NBR_OF_DICES} dices and for the every dice you have {NBR_OF_THROWS} throws. After each throw you can keep dices in order to get same dice spot counts as many as possible. In the end of the turn you must select your points from {MIN_SPOT} to {MAX_SPOT}. Game ends when all points have been selected. The order for selecting those is free. POINTS: After each turn game calculates the sum for the dices you selected. Only the dices having the same spot count are calculated. Inside the game you can not select same points from {MIN_SPOT} to {MAX_SPOT} again. GOAL: To get points as much as possible. {BONUS_POINTS_LIMIT} points is the limit of getting bonus which gives you {BONUS_POINTS} points more."


const Home = ({navigation}) => {

    const [pressed, setPressed] = useState(false)
    const [name, setName] = useState("")

    function buttonPressed() {
        setPressed(true)
    }

    if (pressed == false) {
        return(
            <View>
                <Text style={{textAlign:"center"}}>Please enter your name </Text>
                <TextInput style={{margin:20}}
                    onChangeText={text => setName(text)}
                    value={name}  
                />
                <Button 
                onPress={buttonPressed}
                title="Add"
                />
            </View>
        )
    }

    else {
        return(
            <>
                <Text style={{textAlign:"center", padding:25,}}>{rules}</Text>
                <Text style={{textAlign:"center", padding:25,}}>Good luck {name}</Text>
                <Button title="OK" onPress={() => {navigation.navigate("Gameboard")}} />
            </>
        )
    }

}

const home = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      fontSize:20,
      
    },
  });



export {Home};