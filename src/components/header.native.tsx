import React from 'react';
import {Animated, StyleSheet, Text, Dimensions} from 'react-native';

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
        styles.cabecalho,
        {
          height: scrollY.interpolate({
            inputRange: [10, 120, max],
            outputRange: [max, min, min],
            extrapolate: 'clamp',
          }),
          opacity: scrollY.interpolate({
            inputRange: [1, 80, 170],
            outputRange: [1, 0.8, 0.5],
            extrapolate: 'clamp',
          }),
        },
      ]}>
      <Text style={styles.textHeader}>Vendas</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#666',
    width: '100%',
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
