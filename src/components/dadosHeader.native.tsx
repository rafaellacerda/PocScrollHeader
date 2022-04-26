import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Animated,
} from 'react-native';
import {listActions} from '../utils/consts';

type ItemProps = {
  item: {
    name: string;
  };
};

type DadosHeaderProps = {
  scrollY: Animated.Value;
};

const DadosHeader = ({scrollY}: DadosHeaderProps) => {
  const action = (name: string) => {
    Alert.alert('Ação feita:', name);
  };

  const renderItem = ({item: {name}}: ItemProps) => (
    <TouchableOpacity style={styles.item} onPress={() => action(name)}>
      <Text style={styles.itemText}>{name}</Text>
    </TouchableOpacity>
  );

  return (
    <Animated.View
      style={{
        height: scrollY.interpolate({
          inputRange: [10, 120, 180],
          outputRange: [180, 75, 0],
          extrapolate: 'clamp',
        }),
        marginBottom: 15,
      }}>
      <View style={{position: 'relative', zIndex: 888}}>
        <View style={styles.headerMain}>
          <Text style={styles.title}>Saldo disponível:</Text>
          <Text style={styles.amount}>
            R$ <Text style={styles.bold}>1.000,00</Text>
          </Text>
        </View>
        <FlatList
          horizontal
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={listActions}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item['name']}
          style={styles.list}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerMain: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    borderBottomColor: '#EBEBEB',
    borderBottomWidth: 3,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  list: {
    display: 'flex',
    width: '100%',
    paddingTop: 10,
    marginHorizontal: 5,
  },
  item: {
    borderRadius: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#000',
    height: 70,
    marginRight: 7,
  },
  itemText: {
    flex: 1,
    height: '100%',
    marginTop: 25,
  },
  title: {
    color: '#2E2F30',
    fontSize: 16,
    fontWeight: '200',
  },
  amount: {
    color: '#2E2F30',
    fontSize: 20,
    fontWeight: '200',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default DadosHeader;
