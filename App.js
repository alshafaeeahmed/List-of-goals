import { Button, StyleSheet, Text, TextInput, View } from "react-native";
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your goals"
        ></TextInput>
        <Button title="add Goal!"></Button>
      </View>
      <View>
        <Text>list of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  inputText: {
    borderWidth: 1,
    width: "75%",
    marginRight: 5,
    textAlign: "center",
    borderColor: "red",
    
  },
});
