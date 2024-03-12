import React from 'react';
import {SafeAreaView,ScrollView,Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../styles/styles';


function formulario({navigation}): React.JSX.Element {
  return (
    <SafeAreaView style={styles.Container}>
      <Text>Hello World</Text>
      <TextInput placeholder='ingrese la categoria' style={styles.entrada}></TextInput>
      <Text>LAPTOP</Text>
      <Text>PC DE ESCRITORIO</Text>
      <TouchableOpacity onPress={() => navigation.navigate('muestra')} style={styles.boton}>
        <Text style={styles.botontext}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


export default formulario;
