import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
function Link(props) {
  return <Text {...props} role="link" style={[styles.link, props.style]} />;
}

function App() {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.title}>ChoiceFlix</Text>
      </View>
      <Text style={styles.text}>
        Você quer assistir algum filme ou série?
      </Text>
      <Pressable onPress={() => {}} style={buttonStyles.button}>
        <Text style={buttonStyles.text}>Filme</Text>
      </Pressable>
      
      <Pressable onPress={() => {}} style={buttonStyles.button}>
        <Text style={buttonStyles.text}>Serie</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    borderRadius: 2,
    marginVertical: 10,
  },
  text: {
    color: "black",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default App;
