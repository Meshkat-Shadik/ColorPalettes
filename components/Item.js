import React, { Component } from 'react'
import { View,Text,StyleSheet } from 'react-native'

const Item=({title,color})=>
{
  const textColor = parseInt(color.replace('#', ''), 16) > 0xffffff / 1.5?'black':'white';
  return(
    <View>
      <Text style={[styles.textStyle,{backgroundColor: color, color:textColor}]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    textStyle:{
      marginVertical: 5,
      padding: 10,
      textAlign:'center',
      borderRadius: 10,
      
      shadowColor:'#000',
      shadowOpacity:1,
      shadowRadius:2,
      shadowOffset:{width:0,height:1},
      elevation:2
    }
  });

 export default Item; 