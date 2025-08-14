import UserChatComponet from '@/src/components/molecules/userChatComponent'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Demo = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1}}>
      <UserChatComponet />
    </View>
  )
}

export default Demo
const styles = StyleSheet.create({
  chatScreen: {
    backgroundColor: "green",
    flex: 1,
    height:300
  }
})