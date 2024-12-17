import React from "react";
import Chat from './Chat';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from "react-native";

function Login({navigation}) {


  const chat = () => {
    navigation.navigate('Chat');
  }

  return (
    <ImageBackground source={require("../resources/login.jpeg")}>
      <View style={Style.container}>
        <View style={Style.loginContainer}>
          <View style={Style.inputContainer}>
            <View style={Style.input}>
              <Text style={Style.text}>User ID</Text>
              <TextInput style={Style.textInput}/>
            </View>
            <View style={Style.input}>
              <Text style={Style.text}>Password</Text>
              <TextInput 
              style={Style.textInput}
              secureTextEntry={true}
              />
            </View>
            <TouchableOpacity style={Style.login} onPress={chat}>
            <Text style={{textAlign: "center"}}>Login</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const Style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: 300,
    height: 250,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    opacity: 0.7,
    borderWidth: 2,
    borderColor: "#fff",
 
  },
  inputContainer: {
    height: "100%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12
  },
  input: {
    width: "100%",
    marginTop: 10
  },  
  textInput:{
    borderColor: "#000",
    borderWidth: .5,
    height: 40,
    fontSize: 15,
    alignItems: "center",
    borderRadius: 10
  },
  login:{
    width: 60,
    height: 25,
    backgroundColor: "#A59D84",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "flex-end",
    borderRadius: 5
  },
  text: {
    fontWeight: "bold"
  }
});

export default Login;
