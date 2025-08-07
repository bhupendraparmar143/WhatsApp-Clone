import { Stack } from 'expo-router'
import React from 'react'

const AuthRootLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index"/> 
      <Stack.Screen name="terms_agree"/> 
      <Stack.Screen name="login"/> 
      <Stack.Screen name="verify_otp"/> 
    </Stack>
  )
}

export default AuthRootLayout