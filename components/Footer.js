import { View, Text } from "react-native"
import Styles from "../styles/Styles.js";


const Footer =  () => {
    return (
        <View style={Styles.footer}>
            <Text style={Styles.title}>Made by: Juho Ahonen</Text>
        </View>
    )
}

export {Footer}