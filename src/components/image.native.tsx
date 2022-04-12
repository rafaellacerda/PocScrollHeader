import React from 'react';
import {Animated, StyleSheet} from 'react-native';

import sales from '../images/sales.png';

type ImageProps = {
  scrollY: Animated.Value;
};

const Image = ({scrollY}: ImageProps) => {
  return (
    <Animated.Image
      source={sales}
      style={[
        styles.image,
        {
          top: scrollY.interpolate({
            inputRange: [10, 100, 150],
            outputRange: [150, 30, 0],
            extrapolate: 'clamp',
          }),
          opacity: scrollY.interpolate({
            inputRange: [1, 80, 170],
            outputRange: [1, 0.5, 0],
            extrapolate: 'clamp',
          }),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 150,
    left: 15,
    zIndex: 2,
  },
});

export default Image;
