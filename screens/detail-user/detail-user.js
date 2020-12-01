import React, { useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View, } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

function DetailUser({ route, navigation }) {
    const { nombre, Apellido, Documento, Fecha_Nacimiento, Ciudad, Barrio, Numero_Celular, id } = route.params.citas;
    const deleteUser = async () => {
        try {
            const response = await fetch('localhost:3000/citas/:id', {//duda
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                })
            });
            const json = await response.json();
            Alert.alert("user delete con exito");
            navigation.goBack();
        } catch (error) {
            Alert.alert(error);
        }
    }
    const updateUser = ()=>{
        navigation.navigate('Update',{citas: route.params.citas});
    }
    return (
        <View style={styles.container}>
            <View style={styles.detailCard}>
                <Text>nombre:{nombre}</Text>
                <Text>Apellido:{Apellido}</Text>
                <Text>Documento:{Documento}</Text>
                <Text>Fecha_Nacimiento:{Fecha_Nacimiento}</Text>
                <Text>Ciudad:{Ciudad}</Text>
                <Text>Barrio:{Barrio}</Text>
                <Text>Numero_Celular:{Numero_Celular}</Text>
                <View style={styles.buttonsView}>
                    <TouchableHighlight onPress={updateUser} style={styles.editButton}>
                        <Text style={styles.textButtonCrud}>Edit</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={deleteUser} style={styles.deleteButton}>
                        <Text style={styles.textButtonCrud}>Delete</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center'
    },
    detailCard: {
        paddindg:5,
        marginTop:10,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: Dimensions.get('screen').width * 0.9

    },
    textCreateButton: {
        color: 'white'
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    editButton: {
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'purple',
        padding: 15,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.4
    },
    deleteButton: {
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'purple',
        padding: 15,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.4
    },
    textButtonCrud: {
        color: 'white'
    }
});

export default DetailUser; 