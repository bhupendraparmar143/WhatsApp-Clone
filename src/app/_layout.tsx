import * as NavigationBar from 'expo-navigation-bar';
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react";
import "../../global.css";

// Set navigation bar background color
// NavigationBar.setBackgroundColorAsync('#000000');

// Set button style (light or dark icons)
NavigationBar.setButtonStyleAsync('dark'); 

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [isLogin, setIsLogin] = useState(true)
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
