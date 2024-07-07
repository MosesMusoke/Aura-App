import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView style={styles.view1} className='bg-primary h-full'>

      <ScrollView>
        <View style={styles.view2}>

        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({

  view1: {
    height: "100%",
    backgroundColor: '#161622',
  },
  view2: {
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 12,
    // minHeight: "85%",
  }

})