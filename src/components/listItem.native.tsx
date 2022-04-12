import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

type ListProps = {
  item: {
    name: string;
    color: string;
    hours: string;
    value: string;
  };
};

const ListItem = ({item}: ListProps) => {
  const {name, color, hours, value} = item;

  return (
    <TouchableOpacity style={styles.listItem}>
      <View
        style={[
          styles.contactIcon,
          {
            backgroundColor: color,
          },
        ]}
      />
      <View style={styles.main}>
        <View style={styles.dados}>
          <Text
            style={styles.contactName}
            numberOfLines={2}
            ellipsizeMode='tail'>
            {name}
          </Text>
          <Text>{hours}</Text>
        </View>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dados: {
    flex: 0.8, 
    paddingLeft: 3
  },
  listItem: {
    flexDirection: 'row',
    width: '95%',
    marginLeft: 10,
    marginTop: 25,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contactIcon: {
    height: 60,
    width: 60,
    borderRadius: 999,
  },
  contactName: {
    color: '#000',
  },
  messageContainer: {
    marginRight: 20,
    paddingHorizontal: 15,
    width: width * 0.8,
  },
  message: {
    fontSize: 14,
    color: '#979799',
  },
});

export default ListItem;
