import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
function Add({addTaskToList}) {
  const [val, setVal] = useState('');

  const {width, height} = Dimensions.get('screen');
  function submit() {
    addTaskToList(val);
    setVal('');
  }
  return (
    <View>
      <TextInput
        defaultValue={val}
        placeholder="Add Task"
        onChangeText={(val) => setVal(val)}
        style={styles.inputField}></TextInput>
      <TouchableOpacity onPress={submit}>
        <Text style={{textAlign: 'center', fontSize: 20, color: 'deeppink'}}>
          Add Task
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    fontSize: 20,
    margin: 15,
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
    padding: 10,
  },
});
export default Add;
