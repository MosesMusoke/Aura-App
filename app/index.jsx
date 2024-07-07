
//  The index.jsx is our Home page or you can say its the "/"

import { StatusBar } from 'expo-status-bar'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from "../constants/images"
import CustomButtom from '../components/CustomButtom'

const App = () => {
  return (
    <SafeAreaView style={style.safeArea} className="flex-1 items-center justify-center bg-white ">
      <ScrollView style={style.scrollView}>
        <View style={style.view1} className='h-[85vh] px-4'>
          <Image resizeMode='contain' style={style.image1} source={images.logo} />

          <Image resizeMode='contain' style={style.image2} source={images.cards} />

          <View style={style.view2}>
            <Text style={style.text1}>
              Discover Endless Possibilities with <Text style={style.text2}> Aora</Text>
            </Text>
            <Image 
              source={images.path}
              resizeMode='contain'
              style={style.image3}
            />
          </View>

          <Text style={style.text3} >
            Where creativity meets innovation: 
            emabrk on a journey of limitless exploration with Aora
          </Text>

          <CustomButtom 
            title= "Continue with Email"
            handlePress={() => { router.push("/sign-in")}}
            containerStyles="w-full mt-7"
          />

        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}

export default App

const style = StyleSheet.create({
  safeArea: {
    backgroundColor: "#161622",
    height: "100%"
  },
  scrollView: {
    height: "100%"
  },
  view1: {
    width: "100%",
    height: "100%",
    minHeight: '85vh',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4
  },
  view2: {
    position: 'relative',
    marginTop: 5
  },
  image1: {
    width: 130,
    height: 84,
  },
  image2: {
    width: "100%",
    height: 300,
    maxWidth: 380,
  },
  image3: {
    width: 136,
    height: 15,
    position: 'absolute',
    bottom: -3,
    right: 3,
  },
  text1: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text2: {
    color: "#FF8E01"
  },
  text3: {
    fontSize: 14,
    color: "#CDCDE0",
    marginTop: 20,
    textAlign: 'center'
  }

})


