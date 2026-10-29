import React from 'react';
import {View, Text, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Boats = ({icon_name, icon_color, name, description, picture}) => {
    return (
        <View>
            <Text></Text>
            <Text style={{fontSize: 20, color: '#3b82f6'}}>
                <MaterialCommunityIcons name={icon_name} color={icon_color} size = {30} /> {name}
            </Text>
            <Text>
            {description}
            </Text>
            <Image source={picture}
                   style={{width: 400, height:500}} />
        </View>
    );
};

export default Boats;
