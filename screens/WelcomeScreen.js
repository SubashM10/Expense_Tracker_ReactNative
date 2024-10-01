import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <ScreenWrapper>
        <View className="h-full flex justify-around"> 
            <View className="flex-row justify-center mt-10">
                <Image source={require('../assets/images/welcome.gif')} className="h-96 w-96 ml-3 mr-3 shadow"/>
            </View>
            <View className="mx-5 mb-20">
                <Text className={`text-center font-bold text-4xl ${colors.heading} mb-10`}>Expenza</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('SignIn')} style={{backgroundColor: colors.button}} className="rounded-full p-3 mb-5 shadow">
                    <Text className="text-center text-white text-lg font-bold">SignIn</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('SignUp')} style={{backgroundColor: colors.button}} className="rounded-full p-3 shadow">
                    <Text className="text-center text-white text-lg font-bold">SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScreenWrapper>
  )
}