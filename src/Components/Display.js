import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

function Display({item, delItem}) {
  const [done, strikedone] = useState(false);
  function strike() {
    if (done) strikedone(false);
    else strikedone(true);
  }
  return (
    <>
      {/* <View style={{marginVertical: 20}}> */}
      <TouchableOpacity onPress={() => strike()}>
        <View style={styles.Field}>
          <Text style={done ? styles.strike : styles.nostrike}>
            {item.title}
          </Text>
          <TouchableOpacity onPress={() => delItem(item.key)}>
            <Text> X </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  Field: {
    backgroundColor: 'pink',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    marginVertical: 10,
    borderColor: '#bbb',
    borderStyle: 'dotted',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
  },
  strike: {
    textDecorationLine: 'line-through',
    textDecorationColor: 'white',
  },
  nostrike: {
    textDecorationLine: 'none',
  },
});
export default Display;
