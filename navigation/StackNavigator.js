import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";



import HomeScreen from "../screens/Home/index.js";
import UsersScreen from "../screens/Users/index.js";
import DrawerButton from "../components/DrawerButton";

const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={() => ({
                    headerLeft: () => 
                       <DrawerButton></DrawerButton>,
                    
                })}
            />
        </HomeStack.Navigator>
    );
}

const UsersStack = createNativeStackNavigator();

function UsersStackNavigator () {
    return (
        <UsersStack.Navigator>
            <UsersStack.Screen name="Users" component={UsersScreen} />
        </UsersStack.Navigator>
    );
}

export {HomeStackNavigator, UsersStackNavigator};