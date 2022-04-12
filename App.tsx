import React from 'react';
import {View, StyleSheet} from 'react-native';
import Extract from './src/pages/extract.native';
const App = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <Extract />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#666',
    height: '100%',
  },
});

export default App;
