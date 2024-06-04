// App.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  const [theme, setTheme] = useState('light');

  const lightTheme = {
    backgroundColor: '#fff',
    textColor: '#333',
    buttonColor: '#ddd',
  };

  const darkTheme = {
    backgroundColor: '#333',
    textColor: '#fff',
    buttonColor: '#888',
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const themeStyles = theme === 'light' ? lightTheme : darkTheme;

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ ...styles.container, backgroundColor: themeStyles.backgroundColor }}>
          <Text style={{ ...styles.text, color: themeStyles.textColor }}>Huidig thema: {theme}</Text>
          <TouchableOpacity onPress={toggleTheme} style={{ ...styles.button, backgroundColor: themeStyles.buttonColor }}>
            <Text style={{ color: themeStyles.textColor }}>Schakel Thema</Text>
          </TouchableOpacity>
        </View>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
};

export default App;
