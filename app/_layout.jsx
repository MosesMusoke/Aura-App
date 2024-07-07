// Now to render the index.js on our home screen, We can modify the layout to render different screens and specify the default one or we can just use the slot property from expo-router.
// The use of the slot is to just render its current child route which is normally the index.js within the current directory.
// If you wrap the slot with a footer and a header components, they will show on all the screens and the child routes will only display in the place of the slot.
// the above is one way to implement navigation and layouts within react native.
// An alternative route is to use a stack of differnt screens using the Stck component from Expo router.


import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync();
// This method is used to prevent the automatic hiding of the splash screen.
// When you call SplashScreen.preventAutoHideAsync(), you are telling the application not to automatically hide the splash screen up until the assets loading of the app are fully loaded

const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
      "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
      "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
      "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
      "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
      "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
      "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
      "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
      "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  // Splash Screen: The splash screen is the initial screen that appears when you open a mobile application. It often displays a logo or some introductory information while the app is loading.
  // SplashScreen Module: In React Native, the SplashScreen module provides methods to control the visibility of this splash screen.
  // hideAsync() Method: This method is used to hide the splash screen after some specific event or condition in your app's startup process. It's an asynchronous method, which means it returns a promise.
  // When you call SplashScreen.hideAsync(), the splash screen will start its hiding animation or process.
  // This method is typically called once your app is ready to display its main content, after any necessary data loading, initialization, or other setup tasks are completed.

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;
  
  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerShown: false}} />
    </Stack>
  )
}

export default RootLayout
