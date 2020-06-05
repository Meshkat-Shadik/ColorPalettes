import React, { useState , useCallback} from 'react'
import { View,Text,TextInput,StyleSheet, TouchableOpacity,Alert } from 'react-native'

const ColorPaletteModal=()=>
{

    const [name,setName] = useState('');
    const handleSubmit = useCallback(()=>
    {
        if(!name){
            Alert.alert('Please Enter a Palette name');
        }
    },[name]);


    return(
        <View style={{padding:10}}>
            <Text>Name of the palette</Text>
            <TextInput value={name} onChangeText={setName} style={styles.input}
            placeholder="Palette Name"
            />
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderColor: 'grey',
        borderWidth:1,
        padding:5,
        backgroundColor:'white',
        borderRadius:5,
        elevation:10,
        marginBottom:20
    },
    btn:{
        height:40,
        backgroundColor:'teal',
        borderRadius:5,
        elevation:10,
        justifyContent:'center',
        alignItems:'center'
    },
    btnText:{
        color:'white',
        fontWeight:'bold',
        fontFamily:'monospace'
    }
})

export default ColorPaletteModal;
