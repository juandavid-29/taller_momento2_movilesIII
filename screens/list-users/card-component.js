import React, { useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View, } from 'react-native';

function CardComponent(props){
    const {nombre, Apellido,Documento,Fecha_Nacimiento,Ciudad,Barrio,Numero_Celular} = props.citas;

    return(
        <View>
            <Text>{nombre}</Text>
            <Text>{Apellido}</Text>
            <Text>{Documento}</Text>
            <Text>{Fecha_Nacimiento}</Text>
            <Text>{Ciudad}</Text>
            <Text>{Barrio}</Text>
            <Text>{Numero_Celular}</Text>
        </View>
    );

};


const styles = StyleSheet.create({
   
  });

  export default CardComponent; 