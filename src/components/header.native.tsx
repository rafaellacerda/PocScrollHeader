import React from 'react';
import {Animated, StyleSheet, Text, Dimensions, View} from 'react-native';

const {height} = Dimensions.get('window');
const min = height * 0.14;
const max = height * 0.3;

type HeaderProps = {
  scrollY: Animated.Value;
};

const Header = ({scrollY}: HeaderProps) => {
  return (
    <Animated.View
      style={[
        {
          height: scrollY.interpolate({
            inputRange: [10, 120, max],
            outputRange: [max, min, min],
            extrapolate: 'extend',
          }),
        },
      ]}>
      <View style={styles.cabecalho}>
        <Text style={styles.textHeader}>Saúde</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textHeader: {
    color: '#fff',
    fontSize: 25,
    marginHorizontal: 20,
    marginBottom: 20,
    textTransform: 'uppercase',
  },
});

export default Header;
