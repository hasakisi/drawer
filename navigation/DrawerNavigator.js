import React from "react";
import {UsersStackNavigator} from "./StackNavigator";
import TableNavigator from "./TableNavigator";
import { createDrawerNavigator } from '@react-navigation/drawer'; 

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerPosition: "right",
                drawerType: "front",
                swipeEnabled: false,
                drawerStyle: {
                    width: 150,

                },
            }}
        >
            <Drawer.Screen name="HomeDrawer"
                options={{ title: "Home"}}
            component={TableNavigator}/>
            <Drawer.Screen name="UsersDrawer" 
                options={{ title: "Users"}}
            component={UsersStackNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;