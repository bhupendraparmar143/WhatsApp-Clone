import Calls from '@/src/components/molecules/calls';
import Chats from '@/src/components/molecules/chats';
import Status from '@/src/components/molecules/status';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const Home = () => {
  const [currentPage, setCurrentPage] = useState('status');
  const activePage = () => {
    switch (currentPage) {
      case "chat":
        return <Chats />;
      case "call":
        return <Calls />;
      case "status":
        return <Status />;
      default:
        return <Chats />;

    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#008069" />
      <View style={{ backgroundColor: "#008069",paddingHorizontal:moderateScale(20) }}>
        <View style={styles.wp_container}>
          <Text style={styles.text_wp}>WhatsApp</Text>
          <View style={styles.iconContainer}>
            <Feather name="search" style={styles.header_icon} />
            <FontAwesome6 name="ellipsis-vertical" style={styles.header_icon} />
          </View>
        </View>
        <View style={styles.topBarContainer}>
          {["chat", "status", "call"].map((item, index) => {
            return <TouchableOpacity key={index} style={[styles.topBarButton, item == currentPage && { borderColor: "white" }]} onPress={() => { setCurrentPage(item) }}>
              <Text style={styles.topBarText}>{item}</Text>
            </TouchableOpacity>
          })}
        </View>
      </View>

      {activePage()}
    </SafeAreaView>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#008069",
    // paddingHorizontal: moderateScale(20),
    gap: scale(10),

  },
  topBarButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    borderColor: "#008069",
    paddingVertical:verticalScale(10)
  },
  topBarText: {
    // flex: 1,
    textTransform: "uppercase",
    fontSize: moderateScale(12),
    color: "white",
    fontWeight: "bold"
  },
  wp_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  paddingTop:verticalScale(20),
  paddingBottom:verticalScale(10)
  },
  iconContainer: {
    flexDirection: "row",
    gap: scale(15),
    alignItems: "center",
    justifyContent: "center",
  },
  text_wp: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "white"
  },
  header_icon: {
    fontSize: moderateScale(24),
    color: "white",
  }
})
