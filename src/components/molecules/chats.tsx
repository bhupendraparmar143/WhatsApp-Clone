import imagePath from '@/src/constant/imagePath'
import React from 'react'
import { FlatList, View } from 'react-native'
import UserCard from './userCard'

const Chats = () => {
  const data = [
    { "name": "Bhupendra", msg: "How are you?", time: "5.21 am", count: 0 },
    { "name": "Bhupendra1", msg: "How are you?", time: "5.21 am", count: 0 },
    { "name": "Bhupendra2", msg: "How are you?", time: "5.21 am", count: "6" },
    { "name": "Bhupendra3", msg: "How are you?", time: "5.21 am", count: "6" },
    { "name": "Bhupendra4", msg: "How are you?", time: "5.21 am", count: "6" },
    { "name": "Bhupendra5", msg: "How are you?", time: "5.21 am", count: "6" },
    { "name": "Bhupendra6", msg: "How are you?", time: "5.21 am", count: "6" },
    { "name": "Bhupendra7", msg: "How are you?", time: "5.21 am", count: "6" },
    { "name": "Bhupendra8", msg: "How are you?", time: "5.21 am", count: "6" },
    { "name": "Bhupendra9", msg: "How are you?", time: "5.21 am", count: "6" },
    { "name": "Bhupendra", msg: "How are you?", time: "5.21 am", count: "6" },
    { "name": "Bhupendra", msg: "How are you?", time: "5.21 am", count: "6" },
    { "name": "Bhupendra", msg: "How are you?", time: "5.21 am", count: "6" },
    { "name": "Bhupendra", msg: "How are you?", time: "5.21 am", count: "0" }
  ]
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (<UserCard image={imagePath.user_profile} name={item.name} msg={item.msg} time={item.time} count={item.count} />)}
      />
    </View>

  )
}

export default Chats