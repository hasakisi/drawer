import React from "react";
import {View, Text} from "react-native";

const Item = ({item}) => {
    return (
        <View>
            <Text>
                {item.name}
            </Text>
        </View>
    );
};
export default Item;