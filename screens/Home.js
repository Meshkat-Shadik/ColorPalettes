import React, {PureComponent, useState, useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, Flat,RefreshControl,FlatList} from 'react-native';
import {} from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';

// const Data = [
//   {key: '1', title: 'Base03', code: '#002b36'},
//   {key: '2', title: 'Base02', code: '#073642'},
//   {key: '3', title: 'Base01', code: '#586e75'},
//   {key: '4', title: 'Base00', code: '#657b83'},
//   {key: '5', title: 'Base0', code: '#839496'},
//   {key: '6', title: 'Base1', code: '#93a1a1'},
//   {key: '7', title: 'Base2', code: '#eee8d5'},
//   {key: '8', title: 'Base3', code: '#fdf6e3'},
//   {key: '9', title: 'Yellow', code: '#b58900'},
//   {key: '10', title: 'Orange', code: '#cb4b16'},
//   {key: '11', title: 'Red', code: '#dc322f'},
//   {key: '12', title: 'Magenta', code: '#d33682'},
//   {key: '13', title: 'Violet', code: '#6c71c4'},
//   {key: '14', title: 'Blue', code: '#268bd2'},
//   {key: '15', title: 'Cyan', code: '#2aa198'},
//   {key: '16', title: 'Green', code: '#859900'},
// ];

// const RAINBOW = [
//   {key: '01', title: 'Red', code: '#FF0000'},
//   {key: '02', title: 'Orange', code: '#FF7F00'},
//   {key: '03', title: 'Yellow', code: '#FFFF00'},
//   {key: '04', title: 'Green', code: '#00FF00'},
//   {key: '05', title: 'Violet', code: '#8B00FF'},
// ];

// const FRONTEND_MASTERS = [
//   {key: '001', title: 'Red', code: '#c02d28'},
//   {key: '002', title: 'Black', code: '#3e3e3e'},
//   {key: '003', title: 'Grey', code: '#8a8a8a'},
//   {key: '004', title: 'White', code: '#ffffff'},
//   {key: '005', title: 'Orange', code: '#e66225'},
// ];

// const COLOR_PALETTES = [
//   {paletteName: 'Solarized', colors: Data},
//   {paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS},
//   {paletteName: 'Rainbow', colors: RAINBOW},
// ];

const Home = ({navigation}) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const[isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (result.ok) {
      const palettes = await result.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  const handleRefresh = useCallback(async ()=>
  {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setTimeout(()=>
    {
        setIsRefreshing(false);
    },1000)
    
  },[]);


  return (
    <FlatList
      style={{padding: 10, backgroundColor: 'white'}}
      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({item}) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          ColorPalette={item}
        />
      )}
      refreshing ={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
};
export default Home;
