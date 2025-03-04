import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Home screen</Text>
      <Link href='/' style={style.button}>
        Go to Hotels screen
      </Link>
    </View>
  );
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'ffff'
    },
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    }
  }
)