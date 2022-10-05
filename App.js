/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {FlatList, StyleSheet, View, Button} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

function App() {
  const [goal, setGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(enteredText) {
    setGoal(newData => [
      ...newData,
      {text: enteredText, id: Math.random().toString()},
    ]);
  }
  function handlePress(id) {
    setGoal(currentGoal => {
      return currentGoal.filter(item => item.id !== id);
    });
    console.log('pressed');
  }
  function cancelModal() {
    setModalVisible(false);
  }
  function openModal() {
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Button title="ADD NEW GOAL" onPress={openModal} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        modalVisible={modalVisible}
        cancelModal={cancelModal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goal}
          renderItem={itemData => {
            return (
              <GoalItem
                itemData={itemData}
                id={itemData.item.id}
                handlePress={handlePress}
              />
            );
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textStyle: {
    margin: 15,
    borderWidth: 2,
    borderColor: 'red',
    padding: 15,
  },

  goalsContainer: {
    flex: 4,
  },
});

export default App;
