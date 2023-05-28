import { StyleSheet } from "react-native"

export default StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 20,
    },
    buttons: {
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      alignSelf: 'center',

    },
    points: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
      padding: 20,
      alignItems: 'center',

    },

    button: {
      marginTop: 20,
      borderRadius: 10,
      width: 200,
      alignSelf: 'center',
    },

    scorecontainer: {
      flex: 1,
      backgroundColor: '#fff',

    },

    scoreboard: {
      flexDirection: 'row',
      width: '100%',
      padding: 20,
      alignItems: 'center',
    },
  
    scoreboardheading: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
      padding: 20,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      backgroundColor: 'lightgrey',
    },

    header: {
      backgroundColor: 'lightgrey',
      width: '100%',
      padding: 20,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
    },

    }
  })