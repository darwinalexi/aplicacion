import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet,Text} from 'react-native';
import { styles } from '../styles/styles';


function muestra(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.Container}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
}
export default muestra;