import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {generateData} from '../utils';

import DadosHeader from '../components/dadosHeader.native';
import Container from '../components/container.native';
import Header from '../components/header.native';
import Image from '../components/image.native';
import MainHeader from '../components/mainHeader.native';

const headerHeight = 54 * 2;
const data: any[] = generateData(50);

const Extract = () => {
  const ref = useRef(null);

  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = Animated.diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 4)],
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

  const headerMain = () => (
    <Animated.View style={[styles.header, {transform: [{translateY}]}]}>
      <MainHeader {...{headerHeight}} />
    </Animated.View>
  );

  return (
    <>
      <Image scrollY={scrollY.current} />
      <Header scrollY={scrollY.current} />
      <View style={styles.main}>
        <DadosHeader scrollY={scrollY.current} />
        <SafeAreaView style={styles.container}>
          {headerMain()}
          <ScrollView
            scrollEventThrottle={16}
            contentContainerStyle={{paddingTop: headerHeight}}
            onScroll={handleScroll}
            ref={ref}>
            <Container {...{data}} />
          </ScrollView>
        </SafeAreaView>
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
    left: 5,
    right: 0,
    width: '97%',
    top: 16,
    zIndex: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Extract;
