import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebaseConfig";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Chat({navigation}) {
  const [message, setMessage] = useState("");

  const messageText = (value) => {
    setMessage(value);
  };

  const handleSubmit = () => {
    console.log(message);
  };

  const logout = () => {
    const auth = getAuth(app);
    signOut(auth)
    .then(()=>{
      alert("Logout!");
      navigation.navigate('Login');
    })
    .catch((error)=> {
      console.log("This is the error: ",error);
    })
  }

  return (
    <ImageBackground source={require("../resources/background.jpeg")}>
      <View style={Style.container}>
        <View style={{
            width: "100%",
            height: 80,
            backgroundColor: 'rgba(244,244,231,.7)',
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
      
              }}>
          <View style={{
            flexDirection: "row",
            width: "70%",
            marginLeft: 10,
            alignItems: "center",
            gap: 5,
            marginTop:20,
            shadowColor: '#000',
           
          }}>
          <TouchableOpacity onPress={logout}><Text>logout</Text></TouchableOpacity>
          <Text style={{ fontSize: 20, margin: 5 }}>Mark James Dinong</Text>
          </View>
          <View style={{
            gap: 10,
            flexDirection: "row",
            marginTop:20
            }}>
            <TouchableOpacity><Text>Call</Text></TouchableOpacity>
            <TouchableOpacity><Text>Video Call</Text></TouchableOpacity>
          </View>
        </View>
        <View style={Style.chatBox}>
          <View style={{
            justifyContent: "flex-end",
            justifyContent: "flex-start",
            alignItems: "flex-end"           
            }}>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 5,
                  marginRight: 10,
                  fontSize: 17,
                  textAlign: "right",
                }}
              >
                Mark
              </Text>
            </View>
            <View style={{
              width: "90%",
              backgroundColor: "#d4d4d4",
              borderRadius: 20,
              marginBottom: 10,
              marginRight: 15,
            }}>
              <Text
                style={{
                  textAlign: "justify",
                  paddingLeft: 10,
                  paddingRight: 10,
                  margin: 10
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </View>
          </View>
          
          <View style={Style.chatContainer}>
            <TouchableOpacity
              onPress={() => {
                console.log("Open Others");
              }}
            >
              <ImageBackground
                source={require("../resources/others.png")}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </TouchableOpacity>
            <TextInput
              multiline
              onChangeText={messageText}
              value={message}
              style={{
                width: "75%",
                backgroundColor: "#fff",
                opacity: 0.5,
                borderWidth: 0.5,
                height: 40,
                borderRadius: 10,
              }}
            />
            <TouchableOpacity onPress={handleSubmit}>
              <ImageBackground
                source={require("../resources/sent.png")}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
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
    justifyContent: "space-between",
  },
  chatContainer: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
  },
  textInput: {
    width: "70%",
    borderWidth: 0.5,
  },
  chatBox: {
    width: "100%",
    marginBottom: 5,
  },
});

export default Chat;
