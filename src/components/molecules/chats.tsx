import imagePath from '@/src/constant/imagePath'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserCard from './userCard'

const Chats = () => {
  const data = [
    { "name": "Bhupendra", msg: "How are you?", time: "5.21 am", count: 0 },
    { "name": "Bhupendra1", msg: "How are you?", time: "5.21 am", count: 0 },
    { "name": "Bhupendra2", msg: "How are you?", time: "5.21 am", count: 6 },
    { "name": "Bhupendra3", msg: "How are you?", time: "5.21 am", count: 6 },
    { "name": "Bhupendra4", msg: "How are you?", time: "5.21 am", count: 6 },
    { "name": "Bhupendra5", msg: "How are you?", time: "5.21 am", count: 6 },
    { "name": "Bhupendra6", msg: "How are you?", time: "5.21 am", count: 0 },
    { "name": "Bhupendra7", msg: "How are you?", time: "5.21 am", count: 0 },
    { "name": "Bhupendra8", msg: "How are you?", time: "5.21 am", count: 0 },
    { "name": "Bhupendra9", msg: "How are you?", time: "5.21 am", count: 6 },
    { "name": "Bhupendra10", msg: "How are you?", time: "5.21 am", count: 6 },
    { "name": "Bhupendra11", msg: "How are you?", time: "5.21 am", count: 6 },
    { "name": "Bhupendra12", msg: "How are you?", time: "5.21 am", count: 6 },
    { "name": "Bhupendra13", msg: "How are you?", time: "5.21 am", count: 0 }
  ]
  const openChat = () => { 
    router.push('/(main)/chatScreen')
          // return <UserChatComponet/>
      }
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.7} onPress={openChat}>
            <UserCard image={imagePath.user_profile} name={item.name} msg={item.msg} time={item.time} count={item.count} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>

  )
}

export default Chats