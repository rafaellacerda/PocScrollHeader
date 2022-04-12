import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type MainProps = {
  headerHeight: number;
}

const MainHeader = ({ headerHeight }: MainProps) => {
  return (
    <>
      <View
        style={[
          styles.subHeader,
          {
            height: headerHeight / 2,
          },
        ]}>
        <Text style={styles.title}>Extrato</Text>
      </View>
      <View
        style={[
          styles.subHeader,
          {
            height: headerHeight / 2,
          },
        ]}>
        <View style={styles.searchBox}>
          <Text style={styles.searchText}>01/04/2022 até 30/04/2022</Text>
        </View>
      </View>
    </>
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
  subHeader: {
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {color: '#000', fontSize: 16, fontWeight: 'bold'},
  searchText: {
    color: '#666',
    fontSize: 17,
    lineHeight: 22,
    marginLeft: 8,
  },
  searchBox: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#f1f1f1',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default MainHeader;
