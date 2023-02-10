import {useState} from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet } from 'react-native'

import { COLORS, NFTData } from '../constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch =  (value) => {
    if(!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));

    if(filteredData.length){
      setNftData(filteredData);
    }else{
      setNftData(NFTData);
    }
  }


  return (
    <SafeAreaView style={style.statusBar}>
        <FocusedStatusBar background={COLORS.primary}/>
        <View style={style.container}>
          <View style={style.nftList}>
            <FlatList
              data={nftData}
              renderItem={({ item }) => <NFTCard data={item}/>}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
            />
          </View>

          <View style={style.background}>
            <View style={style.topBackground}/>
            <View style={style.bottomBackground}/>
          </View>
        </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    statusBar: {
    flex: 1
    },
    container: {
      flex: 1
    },
    nftList: {
      zIndex: 0
    },
    background: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: -1
    },
    topBackground:{
      height: 300,
      backgroundColor: COLORS.primary
    },
    bottomBackground: {
      flex: 1,
      backgroundColor: COLORS.white
    }
  });

export default Home 