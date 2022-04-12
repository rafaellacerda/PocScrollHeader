import React from 'react';
import {SafeAreaView, Animated, StyleSheet} from 'react-native';

import ListItem from './listItem.native';
import MainHeader from './mainHeader.native';

type ContainerProps = {
  handleScroll: (...args: any[]) => void;
  handleSnap: ({ nativeEvent }: { nativeEvent: any; }) => void;
  translateY: number | Animated.Value | Animated.AnimatedInterpolation;
  headerHeight: number;
  ref: any;
  data: any[];
};

const Container = ({
  handleScroll,
  handleSnap,
  translateY,
  headerHeight,
  ref,
  data,
}: ContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.header, {transform: [{translateY}]}]}>
        <MainHeader {...{headerHeight}} />
      </Animated.View>
      <Animated.FlatList
        scrollEventThrottle={16}
        contentContainerStyle={{paddingTop: headerHeight}}
        onScroll={handleScroll}
        ref={ref}
        onMomentumScrollEnd={handleSnap}
        data={data}
        renderItem={ListItem}
        keyExtractor={(item, index) => `list-item-${index}-${item.color}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default Container;
