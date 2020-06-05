import React, { Component } from 'react'
import { View,Text,TouchableOpacity,StyleSheet,FlatList} from 'react-native'

const PalettePreview = ({handlePress,ColorPalette}) =>
{
    return (
        <TouchableOpacity onPress={handlePress}>
        <Text style={styles.text} >Click For {ColorPalette.paletteName} Page</Text>
        <FlatList
        style={styles.f}
        data = {ColorPalette.colors?ColorPalette.colors.slice(0,5):''}
        keyExtractor = {item=> item.colorName }
        renderItem = {({item})=> <View style={[{backgroundColor:`${item.hexCode}`},styles.box]}/>}
        />
   </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:15,
        marginTop:10
    },
    box:
    {
        height:30,
        width:30,
        marginRight:5,
        alignItems:'center',
        justifyContent:'flex-end',
        borderRadius:5,

        shadowColor:'#000',
        shadowOpacity:1,
        shadowRadius:2,
        shadowOffset:{width:0,height:1},
        elevation:10
    },
    f:
    {
        backgroundColor:'white',
        // flex:1,
        flexDirection:'row',
        // overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:30,
        
    }
})

export default PalettePreview;