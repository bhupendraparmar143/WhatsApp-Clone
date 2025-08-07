import ButtonComp from "@/src/components/atoms/ButtonComp";
import OTPInput from "@codsod/react-native-otp-input";
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal";
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from "react-native-size-matters";
import AntDesign from 'react-native-vector-icons/AntDesign';


const Verify_Otp = () => {
  const [otp, setOTP] = useState("");
  const [loadModal, setLoadModal] = useState(false);
  const back = () => {
    router.back();
  }
  const onVerify = () => {
    console.log(otp);
    setLoadModal(true)
    setTimeout(() => {
      alert("OTP Verified")
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
        <View style={style.header}>
          <TouchableOpacity activeOpacity={0.7} onPress={back}>
            <AntDesign name="arrowleft" color="#000" size={24} />
          </TouchableOpacity>
          <Text style={style.OTP_text}>Enter OTP Code</Text>
        </View>
        <View style={style.body}>
          <Text>OTP has been sent to +91********41</Text>
          <OTPInput length={4} onOtpComplete={(txt: string) => setOTP(txt)} style={style.otp_container} inputStyle={style.otp_box} />
          <Text>Resend code in <Text style={style.timer_text}>56</Text> s</Text>
        </View>
        <View style={style.footer}>
          <ButtonComp title="Verify" onPress={onVerify} />
        </View>
      </>}
    </SafeAreaView>
  )
}

export default Verify_Otp

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    gap: 15,
  },
  OTP_text: {
    fontSize: 20,
    fontWeight: 500
  },
  body: {
    alignItems: "center",
    gap: 30
  },
  otp_container: {
    gap: moderateScale(10)
  },
  otp_box: {
    borderColor: "black",
    borderRadius: 15,
  },
  timer_text: {
    color: "#00A884"
  },
  footer: {
    alignItems: "center"
  },
  modal: {
    width: moderateScale(100),
    borderRadius: moderateScale(20),
    backgroundColor: "white",
  },
})