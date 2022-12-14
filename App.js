import { Image, StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import logo from './assets/Front.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.clube}>Clube Senacoin</Text>
      <View>
        <Login></Login>
        <Text style={{textAlign: "center"}}>Senac MS ₢ - 2022</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "rgba(230, 230, 230,1)",
  },
  logo: {
    width: 150,
    height: 150,
    alignContent: 'center',
    resizeMode: 'stretch'
  },
  clube: {
    textAlign: 'center',
    color: "rgba(139,87,42,1)",
    fontWeight: 'bold',
    shadowColor: 'black',
    fontSize: 24.0,
  }
});
