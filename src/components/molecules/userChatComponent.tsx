import imagePath from '@/src/constant/imagePath'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
// import Icon from "react-native-vector-icons/MaterialIcons"


const UserChatComponet = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: verticalScale(15), backgroundColor: "#008069" }}>
        <View style={styles.userDetailContainer}>
          <View style={styles.backwardArrowContainer}><AntDesign name="arrowleft" style={styles.backwardArrow} /></View>
          <View style={styles.profilPicContainer}>
            <Image source={imagePath.user_profile} style={styles.profilPic} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Bhupendra</Text>
            <Text style={styles.status}>Online</Text>
          </View>
        </View>
        <View style={styles.featureContainer}>
          <View style={styles.iconContainer}><MaterialIcons name="videocam" style={styles.Icon} /></View>
          <View style={styles.iconContainer}><MaterialIcons name="call" style={styles.Icon} /></View>
          <View style={styles.iconContainer}><Entypo name="dots-three-vertical" style={styles.Icon} /></View>
        </View>
      </View>
      <View style={styles.chat_section}>
        <Text>HelloS</Text>
        <View style={styles.inputContainer}>
          {/* Emoji Icon */}
          <TouchableOpacity>
            <FontAwesome name="smile-o" size={24} color="#7a7a7a" />
          </TouchableOpacity>

          {/* Text Input */}
          <TextInput
            style={styles.input}
            placeholder="Message"
            placeholderTextColor="#b0b0b0"
          />

          {/* Attachment Icon */}
          <TouchableOpacity>
            <Ionicons name="attach" size={24} color="black" />
          </TouchableOpacity>

          {/* Rupee Icon */}
          <TouchableOpacity>
            <FontAwesome name="rupee" size={20} color="#7a7a7a" />
          </TouchableOpacity>

          {/* Camera Icon */}
          <TouchableOpacity>
            <FontAwesome name="camera" size={22} color="#7a7a7a" />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default UserChatComponet
const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    backgroundColor: "red"
  },
  userDetailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: scale(10)
  },
  featureContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: scale(10),
  },
  backwardArrowContainer: {
    paddingLeft: moderateScale(10),
    justifyContent: "center"
  },
  backwardArrow: {
    fontSize: moderateScale(24),
    color: "white",
    fontWeight: "bold"
  },
  profilPicContainer: {
    justifyContent: "center"
  },
  profilPic: {
    width: moderateScale(54),
    height: moderateScale(54),
    borderRadius: moderateScale(54),
  },
  nameContainer: {
    justifyContent: "center"
  },
  name: {
    fontSize: moderateScale(18),
    color: "white",
    fontWeight: "700"
  },
  status: {
    fontSize: moderateScale(12),
    color: "white",
    fontWeight: "600"
  },
  iconContainer: {
    justifyContent: "center"

  },
  Icon: {
    fontSize: moderateScale(24),
    color: "white"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#fff",
    backgroundColor: "blue",
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(25),
    margin: moderateScale(10),
    height: verticalScale(45),
    gap: moderateScale(10),
    justifyContent: "center",

  },
  input: {
    // flex: 1,
    paddingHorizontal: moderateScale(10),
    fontSize: moderateScale(18),
    color: "#000",
  },
  chat_section:{
    // flex: 1,
    backgroundColor:"green",
    justifyContent:"flex-end",
    alignContent:"center"
  }
})
