import { View, Text, Image, StyleSheet } from 'react-native'
import { Tabs } from 'expo-router'
import icons from "../../constants/icons"

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View style={styles.container}>
      <Image 
        source={icon}
        resizeMethod='contain'
        tintColor={color}
        style={styles.Image}
        className="w-6 h-6" />

      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{color: color}}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84
          }
        }}
      >
        <Tabs.Screen 
          name='home'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name="Home"
                focused= {focused} 
              />
            )
          }} 
        />
        <Tabs.Screen 
          name='bookmark'
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused= {focused} 
              />
            )
          }} 
        />
        <Tabs.Screen 
          name='create'
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
                icon={icons.plus}
                color={color}
                name="Create"
                focused= {focused} 
              />
            )
          }} 
        />
        <Tabs.Screen 
          name='profile'
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon 
                icon={icons.profile}
                color={color}
                name="Profile"
                focused= {focused} 
              />
            )
          }} 
        />
      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  Image: {
    width: 20,
    height: 20
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2
  }
})


/*
The bottom bar which is normally found on the bottom of our phone applications is implemented within the tabs folder
and it allows us to switch between the pages/screens found within the tabs folder. eg bookmark.jsx, create.jsx(which is used to create and add videos to our platform),
Home.jsx and profile.jsx (Since the profile will be under our tabs category, therefore we should drag the profile file that we created in our main app folder to the tabs folder. )
*/