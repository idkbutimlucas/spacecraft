import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Headline, TextInput, Button } from 'react-native-paper';
import { purpleA700 } from 'react-native-paper/lib/typescript/styles/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const LoginScreen = () => {
    const [text, setText] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    return (
      <SafeAreaView style={styles.parent}>
        <View style={styles.container}>
          <Headline style={styles.headline}>Welcome to STARPORT</Headline>
        </View>
        <View style={styles.container2}>
          <TextInput style={styles.InputText}
            autoComplete={true}
            label= "Email"
            value={text}
            onChangeText={text=>setText(text)}
          />
          <TextInput style={styles.InputText}
            autoComplete={true}
            label= "Password"
            value={password}
            onChangeText={paswword=>setPassword(text)}
          />
          <Button style={styles.button}>Button</Button>
          <Text style={styles.Text}>Read conditions and Tearms</Text>
        </View>
    </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 5,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "purple",
    borderWidth: 2,
    margin: -1,
    padding: -1,
  },
  headline: {
    color: "white",
  },
  container2: {
    paddingTop: 50,
    flex: 3,

  },
  InputText: {
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    textAlign: "center",
  },
  button: {
     marginBottom: 20,
     marginTop: 10,
  },
  Text: {
    marginLeft: "auto",
    marginRight: "auto",
  }
});