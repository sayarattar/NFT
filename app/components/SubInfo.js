import { View, Text, StyleSheet, Image } from 'react-native'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

 export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text style={{
      fontFamily: FONTS.semiBold,
      fontSize: titleSize,
      color: COLORS.primary
    }}>{title}</Text>
      <Text style={{
      fontFamily: FONTS.regular,
      fontSize: subTitleSize,
      color: COLORS.primary
    }}>{subTitle}</Text>
    </View>
  )
}
 export const ETHPrice = ({ price }) => {
  return (
    <View style={style.priceStyle}>
      <Image 
        source={assets.eth}
        resizeMode="contain"
        style={style.ethStyle}
      />
      <Text style={style.priceTextStyle}>{price}</Text>
    </View>
  )
}
 export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image 
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font
      }}
    />
  )
}
 export const People = () => {
  return (
    <View style={style.peopleStyle}>
      {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
        <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
      ))}
    </View>
  )
}
 export const EndDate = () => {
  return (
    <View style={style.endDateStyle}>
      <Text style={style.primaryEndDateTextStyle}>Ending in</Text>
      <Text style={style.secondaryEndDateTextStyle}>12h 30m</Text>
    </View>
  )
}
 export const SubInfo = () => {
  return (
    <View style={style.subInfoStyle}>
      <People />
      <EndDate />
    </View>
  )
}

const style = StyleSheet.create({
  subInfoStyle : {
    width: '100%',
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  peopleStyle: {
    flexDirection: 'row'
  },
  endDateStyle:{
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: '50%'
  },
  primaryEndDateTextStyle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary 
  },
  secondaryEndDateTextStyle: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary
  },
  priceStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ethStyle:{
    wideth: 20,
    height: 20,
    marginRight: 2
  },
  priceTextStyle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
    color: COLORS.primary
  }

});