import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {listActions} from '../utils/consts';

type ItemProps = {
  item: {
    name: string;
  };
};

const DadosHeader = () => {
  const action = (name: string) => {
    Alert.alert('Ação feita:', name);
  };

  const renderItem = ({item: {name}}: ItemProps) => (
    <TouchableOpacity style={styles.item} onPress={() => action(name)}>
      <Text style={styles.itemText}>{name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
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
    </>
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
  },
  amount: {
    color: '#2E2F30',
    fontSize: 32,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default DadosHeader;
