import imagePath from '@/src/constant/imagePath'
import AntDesign from '@expo/vector-icons/AntDesign'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import UserCard from './userCard'

const Status = () => {
  const data = [
    { name: "Bhupendra", msg: "10 minutes ago", img: imagePath.user_profile },
    { name: "Bhupendra1", msg: "15 minutes ago", img: imagePath.user_profile },
    { name: "Bhupendra2", msg: "20 minutes ago", img: imagePath.user_profile },
    { name: "Bhupendra3", msg: "Today, 6:10 pm", img: imagePath.user_profile },
    { name: "Bhupendra4", msg: "Today, 7:00 pm", img: imagePath.user_profile },
    { name: "Bhupendra5", msg: "Today, 7:00 pm", img: imagePath.user_profile },
    { name: "Bhupendra6", msg: "Today, 7:00 pm", img: imagePath.user_profile },
    { name: "Bhupendra7", msg: "Today, 7:00 pm", img: imagePath.user_profile },
    { name: "Bhupendra8", msg: "Today, 7:00 pm", img: imagePath.user_profile },
    { name: "Bhupendra9", msg: "Today, 7:00 pm", img: imagePath.user_profile },
    { name: "Bhupendra", msg: "Yesterday, 01:00 am", img: imagePath.user_profile },
    { name: "Bhupendra8", msg: "Yesterday, 01:00 am", img: imagePath.user_profile },
    { name: "Bhupendra9", msg: "Yesterday, 01:00 am", img: imagePath.user_profile },
    { name: "Bhupendra0", msg: "Yesterday, 01:00 am", img: imagePath.user_profile }
  ]
  return (
    <View style={{flex:1}} >
      <View style={styles.my_status}>
        <UserCard image={imagePath.user_profile} name={"My status"} msg={'Tap to status update'}
          plusIconComponent={<View style={styles.plus_icon_container}>
            <AntDesign name="plus" style={styles.plus_icon} />
          </View>}
        />
  
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <UserCard image={item.img} name={item.name} msg={item.msg} status={true} />
        )}
      />
    </View>
  )
}

export default Status
const styles = StyleSheet.create({
  
  my_status: {
    backgroundColor: "white",
    paddingBottom: moderateScale(15)
  },
  
  plus_icon_container: {
    width: moderateScale(19),
    height: verticalScale(19),
    borderRadius: moderateScale(19),
    backgroundColor: "#006B02",
    position: "absolute", 
    justifyContent: "center",
    alignItems: "center",
    bottom:0,
    right: 0,
    borderColor:"black",
    borderWidth:moderateScale(1)

  },
  plus_icon: {
    color: "black",
    fontSize: moderateScale(15),
  },
})
