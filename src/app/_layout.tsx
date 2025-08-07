import { Redirect, Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react";
import "../../global.css";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    SplashScreen.hideAsync();
  }, [])
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {
        isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />
      }
    </>
  )
}
