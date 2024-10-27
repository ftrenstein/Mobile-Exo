import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('Button pressed'); // Выводим сообщение в консоль
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>To be or not to be!</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>to be</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#6200ea',
    backgroundColor: '#e3dddc',
    fontSize: 24,
    marginBottom: 20, 
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: '#e3dddc',
    fontSize: 18,
  },
});
