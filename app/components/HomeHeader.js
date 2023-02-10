import { View, Text, Image, TextInput, StyleSheet } from 'react-native'

import { COLORS, SIZES, FONTS, assets} from '../constants'

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <Image 
          source={assets.logo}
          resizeMode="contain"
          style={style.logo}
        />
        <View style={style.personContainer}>
          <Image 
            source={assets.person01}
            resizeMode= "contain"
            style={style.personImage}
          />
          <Image 
            source={assets.badge}
            resizeMode= "contain"
            style={style.badgeImage}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font}}>
        <Text style={style.h1}>
          Hello Victoria 👋
        </Text>
        <Text style={style.h2}>
          Let's Find a masterpiece
        </Text>
      </View>
      <View style={{marginTop: SIZES.font}}>
        <View style={style.searchContainer}>
          <Image 
            source={assets.search}
            resizeMode="contain"
            style={style.search}
          />
          <TextInput 
            placeholder='Search NFTs'
            style={{flex: 1}}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    backgroundColor: COLORS.primary,
    padding: SIZES.font
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo:{
    width: 90, 
    height: 25
  },
  personContainer: {
    width: 45,
    height: 45
  },
  personImage: {
    width: '100%',
    height: '100%'
  },
  badgeImage: {
    position: 'absolute',
    width: 15,
    height: 15,
    bottom: 0,
    right: 0
  },
  h1: {
    fontFamily: FONTS.regular, 
    fontSize: SIZES.small, 
    color: COLORS.white
  },
  h2: {
    fontFamily: FONTS.bold, 
    fontSize: SIZES.large, 
    color: COLORS.white, 
    margineTope: SIZES.base/2
  },
  search: {
    width: 20,
    height: 20,
    margineRight: SIZES.base
  },
  searchContainer: {
      width: '100%',
      borderRadius: SIZES.font,
      backgroundColor: COLORS.gray,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.small - 2
  }
})

export default HomeHeader