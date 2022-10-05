import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet, Modal, Image} from 'react-native';

export default function GoalInput({addGoalHandler, modalVisible, cancelModal}) {
  const [text, setText] = useState('');

  function goalInputHandler(enteredText) {
    setText(enteredText);
  }
  function onPressHandler() {
    addGoalHandler(text);
    setText('');
    cancelModal();
  }

  return (
    <Modal visible={modalVisible}>
      <Image source={require('../assets/goal.jpg')} style={styles.image} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your goals"
          value={text}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onPressHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelModal} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    
  },
  inputText: {
    width: '70%',
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 8,
    marginTop: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 80,
    marginVertical: 10,
  },
});
