import React from 'react'
import { Text, View, Button } from 'react-native'

const data = [
    {
        id: 1,
        name: "Ahmet",
    },
    {
        id: 2,
        name: "Mehmet",
    },
    {
        id: 3,
        name: "Ayşe",
    },
];



const UsersScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
           data={data}
           keyExtractor={item => item.id}
           renderItem={(item) => <Item item={item} />  }
           
        />
        </View>

    );
};

export default UsersScreen;
