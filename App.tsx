import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
 Home: undefined;
 Home2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Home = ({ navigation }) => {
  return (
     <SafeAreaView style={styles.SafeAreaView}>
       <View>
       <Image
 source={require('./src/view/loginImage.jpg')}
/>
         <Text>Hola, Bienvenido a Linkcafe!</Text>
       </View>
       <TouchableOpacity onPress={() => navigation.navigate('Home2')} style={styles.button}>
         <Text>Vamos a la siguiente vista</Text>
       </TouchableOpacity>
     </SafeAreaView>
  );
 };
const Home2 = ({navigation}) => {
 return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View>
        <Text>Hola, esta es la sgunda  viista</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Text>Vamos a la anterior vista</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
 );
};

function App(): React.JSX.Element {
 return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Home2" component={Home2} />
      </Stack.Navigator>
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 SafeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
 },
});

export default App;
