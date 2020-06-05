import React, { useState , useCallback} from 'react'
import { View,Text,TextInput,StyleSheet, TouchableOpacity,Alert ,Switch,FlatList} from 'react-native'

const COLORS = [
    { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
    { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
    { colorName: 'Aqua', hexCode: '#00FFFF' },
    { colorName: 'Aquamarine', hexCode: '#7FFFD4' },
    { colorName: 'Azure', hexCode: '#F0FFFF' },
    { colorName: 'Beige', hexCode: '#F5F5DC' },
    { colorName: 'Bisque', hexCode: '#FFE4C4' },
    { colorName: 'Black', hexCode: '#000000' },
    { colorName: 'BlanchedAlmond', hexCode: '#FFEBCD' },
    { colorName: 'Blue', hexCode: '#0000FF' },
    { colorName: 'BlueViolet', hexCode: '#8A2BE2' },
    { colorName: 'Brown', hexCode: '#A52A2A' },
    { colorName: 'BurlyWood', hexCode: '#DEB887' },
    { colorName: 'CadetBlue', hexCode: '#5F9EA0' },
    { colorName: 'Chartreuse', hexCode: '#7FFF00' },
    { colorName: 'Chocolate', hexCode: '#D2691E' },
    { colorName: 'Coral', hexCode: '#FF7F50' },
    { colorName: 'CornflowerBlue', hexCode: '#6495ED' },
    { colorName: 'Cornsilk', hexCode: '#FFF8DC' },
    { colorName: 'Crimson', hexCode: '#DC143C' },
    { colorName: 'Cyan', hexCode: '#00FFFF' },
    { colorName: 'DarkBlue', hexCode: '#00008B' },
    { colorName: 'DarkCyan', hexCode: '#008B8B' },
    { colorName: 'DarkGoldenRod', hexCode: '#B8860B' },
    { colorName: 'DarkGray', hexCode: '#A9A9A9' },
    { colorName: 'DarkGrey', hexCode: '#A9A9A9' },
    { colorName: 'DarkGreen', hexCode: '#006400' },
    { colorName: 'DarkKhaki', hexCode: '#BDB76B' },
    { colorName: 'DarkMagenta', hexCode: '#8B008B' },
    { colorName: 'DarkOliveGreen', hexCode: '#556B2F' },
    { colorName: 'Darkorange', hexCode: '#FF8C00' },
    { colorName: 'DarkOrchid', hexCode: '#9932CC' },
    { colorName: 'DarkRed', hexCode: '#8B0000' },
    { colorName: 'DarkSalmon', hexCode: '#E9967A' },
    { colorName: 'DarkSeaGreen', hexCode: '#8FBC8F' },
    { colorName: 'DarkSlateBlue', hexCode: '#483D8B' },
    { colorName: 'DarkSlateGray', hexCode: '#2F4F4F' },
    { colorName: 'DarkSlateGrey', hexCode: '#2F4F4F' },
    { colorName: 'DarkTurquoise', hexCode: '#00CED1' },
    { colorName: 'DarkViolet', hexCode: '#9400D3' },
    { colorName: 'DeepPink', hexCode: '#FF1493' },
    { colorName: 'DeepSkyBlue', hexCode: '#00BFFF' },
    { colorName: 'DimGray', hexCode: '#696969' },
    { colorName: 'DimGrey', hexCode: '#696969' },
    { colorName: 'DodgerBlue', hexCode: '#1E90FF' },
    { colorName: 'FireBrick', hexCode: '#B22222' },
    { colorName: 'FloralWhite', hexCode: '#FFFAF0' },
    { colorName: 'ForestGreen', hexCode: '#228B22' },
    { colorName: 'Fuchsia', hexCode: '#FF00FF' },
    { colorName: 'Gainsboro', hexCode: '#DCDCDC' },
    { colorName: 'GhostWhite', hexCode: '#F8F8FF' },
    { colorName: 'Gold', hexCode: '#FFD700' },
    { colorName: 'GoldenRod', hexCode: '#DAA520' },
    { colorName: 'Gray', hexCode: '#808080' },
    { colorName: 'Grey', hexCode: '#808080' },
    { colorName: 'Green', hexCode: '#008000' },
    { colorName: 'GreenYellow', hexCode: '#ADFF2F' },
    { colorName: 'HoneyDew', hexCode: '#F0FFF0' },
    { colorName: 'HotPink', hexCode: '#FF69B4' },
    { colorName: 'IndianRed', hexCode: '#CD5C5C' },
    { colorName: 'Indigo', hexCode: '#4B0082' },
    { colorName: 'Ivory', hexCode: '#FFFFF0' },
    { colorName: 'Khaki', hexCode: '#F0E68C' },
    { colorName: 'Lavender', hexCode: '#E6E6FA' },
    { colorName: 'LavenderBlush', hexCode: '#FFF0F5' },
    { colorName: 'LawnGreen', hexCode: '#7CFC00' },
    { colorName: 'LemonChiffon', hexCode: '#FFFACD' },
    { colorName: 'LightBlue', hexCode: '#ADD8E6' },
  ];






const ColorPaletteModal=({navigation})=>
{

    const [paletteName,setName] = useState('');
    const [selectedColors,setSelectedColors] = useState([])
    const handleSubmit = useCallback(()=>
    {
        if(!paletteName){
            Alert.alert('Please Enter a Palette name');
        }
        else if(selectedColors.length <3)
        {
            Alert.alert('Please add at least 3 colors!');
        }
        else
        {
            const newColorPalette ={
                paletteName,
                colors:selectedColors,
                key:Math.random(),
            };
            navigation.navigate('Home',{newColorPalette});
        }
    },[paletteName,selectedColors]);

const HandleValueChange = useCallback((value,color)=>{
  if(value === true)
  {
      setSelectedColors(colors=>[...colors,color])
  }
  else{
    setSelectedColors(
        colors => colors.filter(selColor => color.colorName !== selColor.colorName)
    )
  }

},[]);
    return(
        <View style={{padding:10}}>
            <Text>Name of the palette</Text>
            <TextInput value={paletteName} onChangeText={setName} style={styles.input}
            placeholder="Palette Name"
            />
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
            
             <FlatList
             style={{paddingVertical:20}}
            data={COLORS}
            keyExtractor={item=>item.colorName}
            renderItem={({item})=>( 
                <View style={styles.color}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={[styles.box,{backgroundColor:item.hexCode}]}/>
                       <Text>{item.colorName}</Text>
                    </View>               
                <Switch value={
                    !!selectedColors.find(color=>color.colorName === item.colorName)} 
                    
                    onValueChange={(selected)=>{HandleValueChange(selected,item)}}/>
            </View>
            )} 
            /> 
            <View style={{marginBottom:50}}/>
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
        marginBottom:10
    },
    btn:{
        height:40,
        backgroundColor:'teal',
        borderRadius:5,
        elevation:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:30
    },
    btnText:{
        color:'white',
        fontWeight:'bold',
        fontFamily:'monospace'
    },
    color:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:5,
        borderColor: 'grey',
        borderWidth:0.5,
        marginBottom:10,
        borderRadius:5,
        backgroundColor:'white',
        elevation:1,
    },
    box:{
        height:30,
        width:30,
        borderRadius:5,
        elevation:5,
        marginRight:10,
        borderWidth: 0.2,
        borderColor:'black'
    }
})

export default ColorPaletteModal;
