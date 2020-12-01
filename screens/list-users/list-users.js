import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import CardComponent from './card-component';
import { useIsFocused } from '@react-navigation/native';

function ListUsers({ navigation }) {
  const isFocused = useIsFocused();
  const [users, setUsers] = useState([]);
  const citas = async () => {
    let response = await fetch('localhost:3000/citas/:id')
    let json = await response.json();
    setUsers(json.citas);
  }
  const detailUser = (item) => {
    navigation.navigate('Detail', { citas: item });
  }
  useEffect(() => {
    /* console.log("isFocused:" + isFocused); */
    citas();
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.styleButton} onPress={() => navigation.navigate('Create')}>
        <Text style={styles.textCreateButton}>list user</Text>
      </TouchableHighlight>
      <FlatList
        data={users}
        renderItem={({ item }) => <TouchableHighlight onPress={ ()=>detailUser(item)} style={styles.styleButton} >
          <CardComponent user={item} />
        </TouchableHighlight>}
        keyExtractor={item => item.id}
      ></FlatList>
    </View >
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  styleButton: {
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: 'purple',
    padding: 15,
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.9

  },
  textCreateButton: {
    color: 'white'
  },
  styleButton: {
    marginTop: 10,
    backgroundColor: 'purple',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: Dimensions.get('screen').width * 0.9
  }
});

export default ListUsers;

























