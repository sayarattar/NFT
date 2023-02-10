import{ useNavigation } from '@react-navigation/native'
import { Image, View, StyleSheet, Text } from 'react-native'

import { COLORS, SIZE, SHADOWS, assets, SIZES } from '../constants'
import { CircleButton, RectButton } from './Button'
import { ETHPrice, NFTTitle, SubInfo } from './SubInfo'

 const NFTCard = ({ data }) => {
    const navigation = useNavigation();

  return (
    <View style={style.container}>
        <View style={style.card}>
            <Image 
                source={data.image}
                style={style.image}
            />

            <CircleButton imgUrl={assets.heart} right={10} top={10} />
        </View>
        <SubInfo />
        <View style={style.nftTitle}>
            <NFTTitle 
                title={data.name}
                subTitle={data.creator}
                titleSize={SIZES.large}
                subTitleSize={SIZES.small}
            />
            <View style={style.ethStyle}>
                <ETHPrice price={data.price}/>
                <RectButton 
                    minWidth={120}
                    fontSize={SIZES.font}
                    handlePress={() => navigation.navigate("Details", { data })}
                />
            </View>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    },
    card:{
        width: "100%",
        height: 250,
        resizeMode: "cover",
    },
    image: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font
    },
    nftTitle: {
        width: "100%",
        padding: SIZES.font
    },
    ethStyle:{
        marginTopL: SIZES.font, 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    }
});

export default NFTCard
