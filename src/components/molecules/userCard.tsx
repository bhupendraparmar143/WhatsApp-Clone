import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
const UserCard = ({ image, name, msg, time, count, status, call, plusIconComponent,callIcon }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerMainContainer}>
                <View style={styles.leftContainer}>
                    <View style={[styles.imageContainer]}>
                        <Image source={image} style={[styles.user_image, status && { borderColor: "#006B02" }]} resizeMode='contain' />
                        {plusIconComponent}
                    </View>
                    <View style={styles.bodyContainer}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.msg}>{msg}</Text>
                    </View>
                </View>
                <View style={styles.countContainer}>
                    {/* {!!call && (call == true) ? <MaterialIcons name="call" size={24} color="black" style={{color:"#008069"}} /> : <MaterialIcons name="videocam" style={{color:"#008069", fontSize:moderateScale(25)}}/>} */}
                    {callIcon}
                    {time && <Text style={styles.textTime}>{time}</Text>}
                    {
                        !!count && <View style={styles.textCountContainer}>
                            <Text style={styles.textCount}>{count}</Text>
                        </View>
                    }


                </View>
            </View>
        </SafeAreaView>
    )
}

export default UserCard
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    innerMainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: moderateScale(13),
        paddingVertical: verticalScale(5)
    },
    leftContainer: {
        flexDirection: "row",
        gap: moderateScale(10),
        justifyContent: "center",
        alignItems: "center"
    },
    bodyContainer: {},
    countContainer: {
        alignItems: "flex-end",
        justifyContent: "center"
    },
    user_image: {
        width: moderateScale(53),
        height: moderateScale(53),
        borderRadius: moderateScale(53),
        borderWidth: 2,
        borderColor: "white",
    },
    name: {
        fontSize: scale(14),
        fontWeight: "700",
    },
    msg: {
        fontSize: moderateScale(13),
        fontWeight: "400",
        color: "#889095"
    },
    textTime: {
        color: "#026500",
        fontSize: moderateScale(12),
        fontWeight: "700",
    },
    textCountContainer: {
        width: moderateScale(20),
        height: moderateScale(20),
        backgroundColor: "#036A01",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: moderateScale(22),


    },
    textCount: {
        color: "white"
    },
})
