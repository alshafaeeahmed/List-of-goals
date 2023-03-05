import { Button, StyleSheet, Text, TextInput, View } from "react-native";
export default function App() {
  function goalsInputHandler() {}
  function addGoalsHandler() {}
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your goals"
        ></TextInput>
        <Button title="add Goal!"></Button>
      </View>
      <View style={styles.goalsContainer}>
        <Text>list of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: "#A288A6",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#A288A6",
    width: "70%",
    marginRight: 5,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
