import imagePath from '@/src/constant/imagePath'
import React from 'react'
import { FlatList, View } from 'react-native'
import UserCard from './userCard'

const Calls = () => {
  const data = [
      { name: "Bhupendra", msg: "10 minutes ago", img: imagePath.user_profile , call:"video"},
      { name: "Bhupendra1", msg: "15 minutes ago", img: imagePath.user_profile , call:'1'},
      { name: "Bhupendra2", msg: "20 minutes ago", img: imagePath.user_profile },
      { name: "Bhupendra3", msg: "Today, 6:10 pm", img: imagePath.user_profile },
      { name: "Bhupendra4", msg: "Today, 7:00 pm", img: imagePath.user_profile },
      { name: "Bhupendra5", msg: "Today, 7:00 pm", img: imagePath.user_profile },
      { name: "Bhupendra6", msg: "Today, 7:00 pm", img: imagePath.user_profile },
      { name: "Bhupendra7", msg: "Today, 7:00 pm", img: imagePath.user_profile },
      { name: "Bhupendra8", msg: "Today, 7:00 pm", img: imagePath.user_profile },
      { name: "Bhupendra9", msg: "Today, 7:00 pm", img: imagePath.user_profile },
      { name: "Bhupendra", msg: "Yesterday, 01:00 am", img: imagePath.user_profile },
      { name: "Bhupendra", msg: "Yesterday, 01:00 am", img: imagePath.user_profile },
      { name: "Bhupendra", msg: "Yesterday, 01:00 am", img: imagePath.user_profile },
      { name: "Bhupendra", msg: "Yesterday, 01:00 am", img: imagePath.user_profile }
    ]
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item})=>(
          <UserCard image={item.img} msg={item.msg} name={item.name} call={item.call}/>
        )}
      />
    </View>
  )
}

export default Calls