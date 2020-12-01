import React, { useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';


function UpdateUser({ route, navigation }) {
    const [Nombre, setNombre] = useState("");
    const [Apellido, setApellido] = useState("");
    const [Documento, setDocumento] = useState("");
    const [Fecha_Nacimiento, setFecha_Nacimiento] = useState("");
    const [Ciudad, setCiudad] = useState("");
    const [Barrio, setBarrio] = useState("");
    const [Numero_Celular, setNumero_Celular] = useState("");

    const updateUser = async () => {
        try {
            const response = await fetch('localhost:3000/citas', {//duda
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: route.params.citas,id,
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
            Alert.alert("user update con exito");
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert(error);
        }


    }
    useEffect(() => {
        /* console.log("isFocused:" + isFocused); */
        setNombre(route.params.citas.Nombre);
        setApellido(route.params.citas.Apellido);
        setDocumento(route.params.citas.Documento);
        setFecha_Nacimiento(route.params.citas.Fecha_Nacimiento);
        setCiudad(route.params.citas.Ciudad);
        setBarrio(route.params.citas.Barrio);
        setNumero_Celular(route.params.citas.Numero_Celular);
    }, []);
    return (
        <View style={styles.container}>
            <TextInput style={styles.TextInput} value={Nombre} onChangeText={text => setNombre(text)} placeholder="Nombre"></TextInput>
            <TextInput style={styles.TextInput} value={Apellido} onChangeText={text => setApellido(text)} placeholder="Apellido"></TextInput>
            <TextInput style={styles.TextInput} value={Documento} onChangeText={text => setDocumento(text)} placeholder="Documento"></TextInput>
            <TextInput style={styles.TextInput} value={Fecha_Nacimiento} onChangeText={text => setFecha_Nacimiento(text)} placeholder="Fecha_Nacimiento"></TextInput>
            <TextInput style={styles.TextInput} value={Ciudad} onChangeText={text => setCiudad(text)} placeholder="Ciudad"></TextInput>
            <TextInput style={styles.TextInput} value={Barrio} onChangeText={text => setBarrio(text)} placeholder="Barrio"></TextInput>
            <TextInput style={styles.TextInput} value={Numero_Celular} onChangeText={text => setNumero_Celular(text)} placeholder="Numero_Celular"></TextInput>
            <TouchableHighlight style={styles.styleButton} onPress={updateUser}>

                <Text style={styles.textCreateButton}>update user</Text>
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
export default UpdateUser;