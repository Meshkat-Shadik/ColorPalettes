import React, { useState } from 'react'
import { View,Text,TextInput } from 'react-native'

const ColorPaletteModal=()=>
{

    const [name,setName] = useState('');

    return(
        <View>
            <TextInput value={name} onChangeText={setName}/>
        </View>
    )
}

export default ColorPaletteModal;
