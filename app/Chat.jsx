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
        <View style={Style.chatBox}>
            <View style={{marginBottom: 10, padding: 10, backgroundColor: "#d4d4d4", margin: 5 , borderRadius: 20}}>
            <View>
              <Text style={{fontWeight: "bold", marginBottom: 5, fontSize: 15}}>Mark</Text>
            </View>
            <View>
              <Text style={{textAlign: "justify" , paddingLeft: 10,paddingRight: 10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
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
  chatBox: {
    width: "100%",
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
});

export default Chat;
