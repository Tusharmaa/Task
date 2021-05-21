import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

 const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(["Milk", "Bread"]);

   const addToList = () => {
     if(input===""){
       alert("Enter an item to add.")
     } else {
      setItems([...items, input]);
      setInput("");
     }
  }
  console.log(items);

  const list = () => {
    return items.map((item) => {
      return (
        <View key={item.key} style={{margin: 15}}>
            <Text style={{fontSize:25, paddingLeft:5, paddingBottom: 5, letterSpacing: 1}}>{item}</Text>
          <View style={{
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              }}
          />
        </View>
      );
    });
  };

  return (
    <View>
    <View style={styles.container}>
       <TextInput
        style={styles.input}
        defaultValue={input}
        onChangeText={ input => setInput(input)}
        placeholder="Enter an item"
      />
      <Icon
        style={styles.addButton} 
        name="plus" 
        size={35} 
        color="black" 
        onPress={addToList}>
        </Icon>
    </View>
      <View>
        {list()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 70,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
  input: {
    flex: 1,
    borderRadius: 10,
    borderColor: "red",
    height: 50,
    padding: 10,
    backgroundColor: "white",
    borderColor: "black",
    marginRight: 10,
    fontSize: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    },
  addButton: {
    padding: 10,
    borderColor: 'transparent',
    backgroundColor: "white",
  },
});

export default App;