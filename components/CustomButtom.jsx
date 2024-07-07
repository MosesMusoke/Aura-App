import { StyleSheet, Text, Pressable, } from 'react-native'
import React from 'react'

const CustomButtom = ({title, handlePress, isLoading, containerStyles, textStyles}) => {
  return (
    <Pressable
        style={styles.pressable}
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
    >
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
            {title}
        </Text>
    </Pressable>
  )
}

export default CustomButtom

const styles = StyleSheet.create({
    pressable: {
        marginTop: 40,
        backgroundColor: "#FF9C01",
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        minHeight: 62
    }
})