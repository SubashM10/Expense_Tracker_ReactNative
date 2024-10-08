import { View, Text, TextInput,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import BackButton from '../components/backButton'
import { useNavigation } from '@react-navigation/native'



export default function SignInScreen() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () =>{
    if(email && password){
      //firebase(performs adding)
      // navigation.goBack();
      navigation.navigate('Home');
    }else{
      //firebase(show error)
    }

  }

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
            <View className="relative mt-5">
                <View className="absolute top-2 left-0 z-10">
                  <BackButton />
                </View>

                <Text className={`${colors.heading} text-xl font-bold text-center`}>Sign In</Text>
            </View>

            <View className="flex-row justify-center my-3 mt-5">
                <Image className="w-80 h-80" source={require("../assets/images/login.png")}/>
            <View/>  
        </View>
        <View className="space-y-2 mx-2"> 
            <Text className={`${colors.heading} text-lg font-bold`}>Email</Text>
            <TextInput value={email} onChangeText={value=> setEmail(value)} className="p-4 bg-white rounded-full mb-3"/>
            <Text className={`${colors.heading} text-lg font-bold`}>Password</Text>
            <TextInput value={password} secureTextEntry onChangeText={value=> setPassword(value)} className="p-4 bg-white rounded-full mb-3"/>
            <TouchableOpacity className="flex-row justify-center">
              <Text>Forget Password?</Text>
            </TouchableOpacity>
        </View>
        </View>
        <View>
          <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: colors.button}} className="my-6 rounded-full p-3 shadow-sm mx-2">
            <Text className="text-center text-white text-lg font-bold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  )
}