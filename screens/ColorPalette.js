import React, {Component} from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';
import Item from '../components/Item';



const ColorPalette = ({route}) => {

  const{colors,paletteName} = route.params;

  return (
    <View>
        <Text style={{textAlign:'center',fontSize:20,}}>{paletteName}</Text>
      <FlatList
        style={style2.container}
        data={colors}
        keyExtractor={item=>item.colorName}
        renderItem={({item}) => <Item title={item.colorName} color={item.hexCode} />}
      />
    </View>
  );
};

const style2 = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
});

export default ColorPalette;
