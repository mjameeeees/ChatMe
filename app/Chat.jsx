import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Chat() {
  const [message, setMessage] = useState("");

  const messageText = (value) => {
    setMessage(value);
  };

  const handleSubmit = () => {
    console.log(message);
  };

  return (
    <ImageBackground source={require("../resources/background.jpeg")}>
      <View style={Style.container}>
        <View style={{borderBottomWidth: .5, marginBottom:1 ,bottom: 10}}>
          <Text>Mark</Text>
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
    </ImageBackground>
  );
}

const Style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
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
});

export default Chat;
