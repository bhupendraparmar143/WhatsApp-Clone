import imagePath from '@/src/constant/imagePath'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import { moderateScale, verticalScale } from 'react-native-size-matters'

const AuthHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(true)
      setTimeout(()=>{
        router.push('/(auth)/terms_agree')
      },3000)
    }, 2000)    
    return ()=>{
      clearTimeout(timeout);
    }
  }, [])
  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}></View>
      <View style={style.body}>
        <Image source={imagePath.logo} resizeMode='contain' style={style.wp_logo} />
        <Text style={style.text_wp}>WhatsApp</Text>
      </View>
      <View style={style.footer}>
        {
          isLoading ?
            <>
              <ActivityIndicator size={40} color={"#54D161"} />
              <Text style={style.text_loading}>Loading...</Text>
            </>
            :
            <>
              <Text style={style.text_from}>From</Text>
              <Text style={style.text_facebook}>FACEBOOK</Text>
            </>
        }
      </View>
    </SafeAreaView>
  )
}

export default AuthHome
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  header: {
  },
  body: {
    alignItems: "center"
  },
  footer: {
    alignItems: "center",
    // backgroundColor: "blue",
    height: 110,
    padding: verticalScale(20)
  },
  wp_logo: {
    width: moderateScale(90),
    height: moderateScale(90)
  },
  text_wp: {
    fontSize: moderateScale(25),
    fontWeight: "bold",
    color: "#000000"
  },
  text_from: {
    color: "#867373",
  },
  text_facebook: {
    fontWeight: "bold"
  },
  text_loading: {
    color: "#54D161",
    fontSize: moderateScale(20),
    fontWeight: "bold"
  }
})