import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Inicio" component={TabNavigator} />
            <Stack.Screen name="PantalladePublicación" component={PostScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
