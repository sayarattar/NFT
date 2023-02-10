import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'

import { ETHPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setreadMore] = useState(false)
  return (
    <>
      <View style={style.container}>
        <NFTTitle 
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <ETHPrice price={data.price}/>
      </View>

      <View style={style.description}>
        <Text style={style.descriptionHeader}>Description</Text>
        <View style={style.descriptionContainer}>
          <Text style={style.descriptionText}>
            {text}
            {!readMore && '...'}
            <Text 
            style={style.readMore}
            onPress={() => {
              if(!readMore){
                setText(data.description);
                setreadMore(true);
              }else{
                setText(data.description.slice(0, 100));
                setreadMore(false);
              }
            }}>
              {readMore ? ' Show Less' : " Read More"}
            </Text>
            </Text>
        </View>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  description:{
    marginVertical: SIZES.extraLarge * 1.5,
  },
  descriptionHeader: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary
  },
  descriptionContainer: {
    marginTop: SIZES.base
  },
  descriptionText: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    lineHeight: SIZES.large
  },
  readMore: {
    fontSize: SIZES.small,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  }
})

export default DetailsDesc