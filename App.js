import React from 'react';
import {SafeAreaView} from 'react-native';
import Todo from './src/Components/Todo';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Todo />
      </SafeAreaView>
    </>
  );
};

export default App;
