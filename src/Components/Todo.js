import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Keyboard,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Add from './Add';
import Display from './Display';

const {width, height} = Dimensions.get('screen');
let count = 2;
function Todo() {
  const list = [
    {
      title: 'Buy Chocolates',
      key: '1',
    },
    {
      title: 'Drink Water',
      key: '2',
    },
  ];

  const [taskList, setList] = useState(list);
  function addTaskToList(val) {
    count++;
    if (val.length > 0) {
      setList((list) => {
        return [{title: val, key: count.toString()}, ...list];
      });
    } else {
      Alert.alert('Oops!', ' Task must not be null', [
        {text: 'Understood', onPress: () => {}},
      ]);
    }
  }
  function delItem(key) {
    setList((list) => list.filter((val) => val.key != key));
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex: 1}}>
        <Text style={styles.heading}> To Do</Text>
        <Add addTaskToList={addTaskToList} /> 
        <FlatList
          style={{flex: 1, marginVertical: 30}}
          data={taskList}
          renderItem={({item}) => <Display item={item} delItem={delItem} />}
        />
      </View>  
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: 'pink',
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    padding: 10,
    height: 70,
  },
});
export default Todo;
