import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import formulario from './src/view/formulario';
import muestra from './src/view/muestra';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import { styles } from './styles/styles';
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
 return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="formulario">
        <Stack.Screen name="formulario" component={formulario} />
        <Stack.Screen name="muestra" component={muestra} />
      </Stack.Navigator>
    </NavigationContainer>
 );
}

export default App;

const Tab = createMaterialBottomTabNavigator();

export const Menu = () => {
 const { colors } = useTheme();

 return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.text,
        inactiveTintColor: colors.text,
        style: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Tab.Screen
        name="formulario"
        component={formulario}
        options={{
          tabBarLabel: 'muestra',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="muestra"
        component={muestra}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
 );
};


