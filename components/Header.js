import { View, Text } from "react-native"
import Styles from "../styles/Styles.js";


const Header =  () => {
    return (
        <View style={Styles.header}>
            <Text style={Styles.title}>Yahtzee</Text>
        </View>
    )
}

export {Header}