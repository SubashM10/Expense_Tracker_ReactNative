import { View, Text, TextInput,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import BackButton from '../components/backButton'
import { useNavigation } from '@react-navigation/native'



export default function AddTripScreen() {
  const [place,setPlace] = useState('');
  const [country,setCountry] = useState('');

  const navigation = useNavigation();

  const handleAddTrip = () =>{
    if(place && country){
      //firebase(performs adding)
      navigation.navigate('Home')
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

                <Text className={`${colors.heading} text-xl font-bold text-center`}>Add Trip</Text>
            </View>

            <View className="flex-row justify-center my-3 mt-5">
                <Image className="w-72 h-72" source={require("../assets/images/4.png")}/>
            <View/>  
        </View>
        <View className="space-y-2 mx-2"> 
            <Text className={`${colors.heading} text-lg font-bold`}>Where On Earth</Text>
            <TextInput value={place} onChangeText={value=> setPlace(value)} className="p-4 bg-white rounded-full mb-3"/>
            <Text className={`${colors.heading} text-lg font-bold`}>Which Country</Text>
            <TextInput value={country} onChangeText={value=> setCountry(value)} className="p-4 bg-white rounded-full mb-3"/>
        </View>
        </View>
        <View>
          <TouchableOpacity onPress={handleAddTrip} style={{backgroundColor: colors.button}} className="my-6 rounded-full p-3 shadow-sm mx-2">
            <Text className="text-center text-white text-lg font-bold">Add Trip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  )
}