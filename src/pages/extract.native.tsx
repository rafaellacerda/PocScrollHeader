import React, {useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

import {generateData, calcScroll} from '../utils';

import DadosHeader from '../components/dadosHeader.native';
import Container from '../components/container.native';
import Header from '../components/header.native';
import Image from '../components/image.native';

const headerHeight = 54 * 2;
const data = generateData(50);

const Extract = () => {
  const ref = useRef(null);
  const translateYNumber = useRef();

  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = Animated.diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 5)],
  });

  translateY.addListener(({value}) => {
    translateYNumber.current = value;
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: scrollY.current},
        },
      },
    ],
    {
      useNativeDriver: false,
    },
  );

  const handleSnap = ({nativeEvent}: any) => {
    const offsetY = nativeEvent.contentOffset.y;

    if (
      translateYNumber.current === 0 ||
      translateYNumber.current === -headerHeight / 5
    )
      return;

    if (ref.current) {
      (ref.current as any).scrollToOffset({
        offset:
          calcScroll(translateYNumber.current, -headerHeight / 5, 0) ===
          -headerHeight / 5
            ? offsetY + headerHeight / 5
            : offsetY,
      });
    }
  };

  return (
    <>
      <Image scrollY={scrollY.current} />
      <Header scrollY={scrollY.current} />
      <View style={styles.main}>
        <Animated.View
          style={{
            height: scrollY.current.interpolate({
              inputRange: [10, 120, 180],
              outputRange: [180, 75, 0],
              extrapolate: 'clamp',
            }),
            marginBottom: 15,
          }}>
          <DadosHeader />
        </Animated.View>
        <Container
          {...{handleScroll, handleSnap, ref, data, headerHeight, translateY}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '100%',
    backgroundColor: '#fff',
    zIndex: 0,
  },
  header: {
    position: 'absolute',
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    width: '100%',
    top: 20,
    zIndex: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Extract;
