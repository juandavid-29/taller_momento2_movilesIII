import React, { useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';


function CreateUser({ navigation }) {
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [Documento, setDocumento] = useState("");
  const [Fecha_Nacimiento, setFecha_Nacimiento] = useState("");
  const [Ciudad, setCiudad] = useState("");
  const [Barrio, setBarrio] = useState("");
  const [Numero_Celular, setNumero_Celular] = useState("");
  
  const CreateUser =  async () => {
    try{
      const response = await fetch('localhost:3000/citas', {//duda
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Nombre: Nombre,
          Apellido: Apellido,
          Documento: Documento,
          Fecha_Nacimiento: Fecha_Nacimiento,
          Ciudad: Ciudad,
          Barrio: Barrio,
          Numero_Celular: Numero_Celular
        })
      });
      const json = await response.json();
      Alert.alert("user create con exito");
      navigation.goBack();
    }catch(error){
      Alert.alert(error);
    }
    
    
    } 
  return (
    <View style={styles.container}>
      <TextInput style={styles.TextInput} onChangeText={text => setNombre(text)} placeholder="Nombre"></TextInput>
      <TextInput style={styles.TextInput} onChangeText={text => setApellido(text)} placeholder="Apellido"></TextInput>
      <TextInput style={styles.TextInput} onChangeText={text => setDocumento(text)} placeholder="Documento"></TextInput>
      <TextInput style={styles.TextInput} onChangeText={text => setFecha_Nacimiento(text)} placeholder="Fecha_Nacimiento"></TextInput>
      <TextInput style={styles.TextInput} onChangeText={text => setCiudad(text)} placeholder="Ciudad"></TextInput>
      <TextInput style={styles.TextInput} onChangeText={text => setBarrio(text)} placeholder="Barrio"></TextInput>
      <TextInput style={styles.TextInput} onChangeText={text => setNumero_Celular(text)} placeholder="Numero_Celular"></TextInput>
      <TouchableHighlight style={styles.styleButton} onPress={CreateUser}>

        <Text style={styles.textCreateButton}>create user</Text>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  TextInput: {
    marginTop: 10,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('screen').width * 0.9
  },
  styleButton: {
    marginTop: 10,
    backgroundColor: 'purple',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: Dimensions.get('screen').width * 0.9

  },
  textCreateButton: {
    color: 'white'
  }
});
export default CreateUser;