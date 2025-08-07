import ButtonComp from '@/src/components/atoms/ButtonComp'
import imagePath from '@/src/constant/imagePath'
import { router } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Terms_agree = () => {
  const onAgree = ()=>{

    router.push('/(auth)/login')
  }
  return (
    <SafeAreaView style={style.container}>
      <View style={style.wlc_to_wp}>
        <Text style={style.wlcm_text}>Welcome To WhatsApp</Text>
      </View>
      <View style={style.term_img_section}>
        <Image source={imagePath.term_img} style={style.term_img} />
      </View>
      <View style={style.agree_continue_section}>
        <Text style={style.policy_text}>Read our<Text style={style.policyLink}> Privacy Policy</Text>. Tap “Agree and continue” to
          accept the <Text style={style.policyLink}>Teams of Service</Text>.</Text>
        <ButtonComp title="AGREE AND CONTINUE" onPress={onAgree} />
      </View>
      <View style={style.facbook_footer}>
        <Text style={style.text_from}>From</Text>
                      <Text style={style.text_facebook}>FACEBOOK</Text>
      </View>
    </SafeAreaView>
  )
}

export default Terms_agree
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  wlc_to_wp: {
    flex: 1,
    fontSize:moderateScale(30),
    justifyContent: "center",
  },
  wlcm_text: {
    fontSize: moderateScale(25),
    fontWeight: "bold"
  },
  term_img_section: {
    flex: 1,
    justifyContent: "center",
    // borderRadius:"100%",
    // overflow:"hidden",
  },
  term_img: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250),
    borderColor: "black",

  },
  agree_continue_section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: scale(50),
    gap:verticalScale(15)

  },
  policy_text: {
    textAlign:"center",
    fontSize: moderateScale(10)
  },
  facbook_footer: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
    // backgroundColor: "red"
  },

  text_from: {
    color: "#867373",
    fontSize:moderateScale(12)
  },
  text_facebook: {
    // fontWeight: "bold",
    fontFamily:"Robot",
    fontSize: moderateScale(15)
  },
  policyLink:{
    color:"#0C42CC"
  }
})