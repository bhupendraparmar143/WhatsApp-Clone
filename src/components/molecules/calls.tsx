import imagePath from '@/src/constant/imagePath'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserCard from './userCard'
const Calls = () => {
  const data = [
    { name: "Bhupendra0", msg: "10 minutes ago", img: imagePath.user_profile, call: "voice" },
    { name: "Bhupendra1", msg: "15 minutes ago", img: imagePath.user_profile, call: "video" },
    { name: "Bhupendra2", msg: "20 minutes ago", img: imagePath.user_profile, call: "voice" },
    { name: "Bhupendra3", msg: "Today, 6:10 pm", img: imagePath.user_profile, call: "video" },
    { name: "Bhupendra4", msg: "Today, 7:00 pm", img: imagePath.user_profile, call: "voice" },
    { name: "Bhupendra5", msg: "Today, 7:00 pm", img: imagePath.user_profile, call: "video" },
    { name: "Bhupendra6", msg: "Today, 7:00 pm", img: imagePath.user_profile, call: "voice" },
    { name: "Bhupendra7", msg: "Today, 7:00 pm", img: imagePath.user_profile, call: "video" },
    { name: "Bhupendra8", msg: "Today, 7:00 pm", img: imagePath.user_profile, call: "voice" },
    { name: "Bhupendra9", msg: "Today, 7:00 pm", img: imagePath.user_profile, call: "video" },
    { name: "Bhupendra10", msg: "Yesterday, 01:00 am", img: imagePath.user_profile, call: "voice" },
    { name: "Bhupendra11", msg: "Yesterday, 01:00 am", img: imagePath.user_profile, call: "voice" },
    { name: "Bhupendra12", msg: "Yesterday, 01:00 am", img: imagePath.user_profile, call: "voice" },
    { name: "Bhupendra13", msg: "Yesterday, 01:00 am", img: imagePath.user_profile, call: "voice" }
  ]
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <UserCard image={item.img} msg={item.msg} name={item.name} callIcon={
            (item.call == 'voice') ? <View><Text><MaterialIcons name="call" size={24} color="black" style={{ color: "#008069" }} /> </Text></View> : <View><Text><MaterialIcons name="videocam" size={24} color="black" style={{ color: "#008069" }} /> </Text></View>
          } />
        )}
      />
    </SafeAreaView>
  )
}

export default Calls