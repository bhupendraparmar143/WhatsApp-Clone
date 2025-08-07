import ButtonComp from '@/src/components/atoms/ButtonComp';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CountryPicker } from "react-native-country-codes-picker";
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';




const Login = () => {
  const [isShowCountry, setIsShowCountry] = useState(false)
  const [countryName, setCountryName] = useState("India")
  const [countryCode, setCountryCode] = useState("+91")
  const [loadModal, setLoadModal] = useState(false);
  const OnNext = () => {
    setLoadModal(true)
    setTimeout(() => {
      router.push('/(auth)/verify_otp')
      setLoadModal(false);
    }, 2000)
  }
  
  return (
    <SafeAreaView style={style.container}>
      {loadModal ?
        <Modal isVisible={loadModal} style={{ alignItems: "center" }}>
          <ActivityIndicator size={100} style={style.modal} />
        </Modal>
        :
        <>
          <View style={style.upper_container}>
            <View style={{ alignItems: "center", paddingVertical: 50, gap: 15 }}>
              <Text style={style.heading_text}>Enter Your Phone Number</Text>
              <Text style={style.content}>WhatsApp will need to verify your phone number.<Text style={style.link_text}> What’s my number?</Text></Text>
            </View>
            <View style={style.input_container}>
              <View style={style.country_name}>
                <View />
                <View><Text style={style.country_text}>{countryName}</Text></View>
                <View><TouchableOpacity onPress={(e) => setIsShowCountry(true)}><AntDesign name="caretdown" color="#000" size={20} /></TouchableOpacity></View>
                <CountryPicker
                  show={isShowCountry}
                  searchMessage={'Search Country'}
                  pickerButtonOnPress={(item) => {
                    // console.log(item)
                    setCountryCode(item.dial_code)
                    setCountryName(item.name.en)
                    setIsShowCountry(false)
                  }}
                  onRequestClose={() => { setIsShowCountry(false) }}

                  lang='en' />
              </View>
              <View style={{ height: moderateScale(1), backgroundColor: "#00A884" }} />
              <View style={style.input_field}>
                <View style={{ width: scale(50) }}>
                  <Text style={{ textAlign: "center", fontSize: moderateScale(20), fontWeight: 400, paddingVertical: 9 }}>{countryCode}</Text>
                  <View style={{ height: moderateScale(2), backgroundColor: "#00A884" }} />
                </View>
                <View style={{ width: "100%" }}>
                  <TextInput placeholder='Enter Your Phone Number' style={{ fontSize: 18 }} />
                  <View style={{ height: moderateScale(2), backgroundColor: "#00A884" }} />
                </View>
              </View>
            </View>
          </View>
          <View style={style.lower_container}>
            <TouchableOpacity>
              <ButtonComp title="Next" onPress={OnNext} />
            </TouchableOpacity>
          </View>
        </>
      }

    </SafeAreaView>
  )
}

export default Login
const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    paddingHorizontal: moderateScale(40),
    paddingVertical: verticalScale(30),
    justifyContent: "space-between",
  },
  upper_container: {
    gap: 30,
  },
  heading_text: {
    fontSize: moderateScale(20),
    fontWeight: 500
  },
  content: {
    textAlign: "center",
    fontSize: moderateScale(13),
    fontWeight: 400
  },
  link_text: {
    color: "#0C42CC"
  },
  input_container: {

  },
  country_name: {

    justifyContent: "space-between",
    flexDirection: "row"
  },
  country_text: {
    fontSize: 20,
    fontWeight: 500
  },
  input_field: {
    overflow: "hidden",
    alignItems: "flex-end",
    flexDirection: "row",
    marginVertical: moderateScale(20),
    gap: 20,
  },
  lower_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"


  },
  modal: {
    width: moderateScale(100),
    borderRadius: moderateScale(20),
    backgroundColor: "white",
  },
})