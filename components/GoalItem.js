import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function GoalItem({itemData, handlePress, id}) {
  return (
    <View>
      <Pressable
        android_ripple={{color: 'darkgreen'}}
        onPress={handlePress.bind(this, id)}>
        <Text key={itemData.item.id} style={styles.goalItem}>
          {itemData.item.text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    padding: 4,
    borderRadius: 5,
    backgroundColor: 'green',
    color: 'white',
  },
});
