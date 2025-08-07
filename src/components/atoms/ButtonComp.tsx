import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const ButtonComp = ({ title, onPress }: any) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={style.container}>
            <View style={style.btn_main_box}>
                <Text style={style.btn_text} onPress={onPress}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonComp
const style = StyleSheet.create({
    container: {
    },
    btn_main_box: {
        borderRadius:10,
        backgroundColor: "#54D161",
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(30)

    },
    btn_text: {
        color: "white"

    }

})