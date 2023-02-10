import { View, Text, Image, StyleSheet } from 'react-native'
import { ETHPrice } from './SubInfo'

import { COLORS, SIZES, FONTS } from '../constants'

const DetailsBid = ({ bid }) => {
  return (
    <View style={style.container}>
      <Image 
        source={bid.image}
        resizeMode="contain"
        style={style.image}
      />

      <View>
        <Text style={style.bidBy}>
          Bid placed by {bid.name}
        </Text>
        <Text style={style.bidDate}>
          {bid.date}
        </Text>
      </View>

      <ETHPrice price={bid.price}/>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },
  image: {
    width: 48,
    height: 48
  },
  bidBy: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.primary
  },
  bidDate: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
    marginTop: 3
  }
});

export default DetailsBid