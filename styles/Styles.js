import { StyleSheet } from "react-native"

export default StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    buttons: {
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 10,
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
      paddingBottom: 60,
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
      backgroundColor: 'orange',
      width: '100%',
      padding: 15,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      marginBottom: 20,

    },

    footer: {
      backgroundColor: 'orange',
      width: '100%',
      padding: 15,
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: 'black',
      marginTop: 20,
      position: 'absolute',
      bottom: 0,
    },

    title: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
    },

    homecontainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',

    },

  })