import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import randomImage from '../assets/images/randomImage'
import EmptyList from '../components/emptyList'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const items = [
  {
    id: 1,
    place: "Ooty",
    state: "TamilNadu"
  },
  {
    id: 2,
    place: "Kodaikanal",
    state: "TamilNadu"
  },
  {
    id: 3,
    place: "Chikmagalur",
    state: "Karnataka"
  },
  {
    id: 4,
    place: "Munnar",
    state: "Kerela"
  },
  {
    id: 5,
    place: "Snehatheeram Beach",
    state: "Kerela"
  },
  {
    id: 6,
    place: "Kolli Hills",
    state: "TamilNadu"
  },
  {
    id: 7,
    place: "Taj Mahal",
    state: "Agra"
  },
  {
    id: 8,
    place: "Red Fort",
    state: "Old Delhi"
  }
]


export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper className='flex-1'>
      <View className='flex-row justify-between items-center p-4'>
        <Text className = {`${colors.heading} font-bold text-3xl shadow-sm`}>Expenza</Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image source={require('../assets/images/banner.png')} className="w-60 h-60"/>
      </View>
      <View className="px-4 space-y-3 ">
        <View className=" flex-row justify-between items-center ">
          <Text className={`${colors.heading} font-bold text-xl`}>Recent Trips</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('AddTrip')} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity> 
        </View>
        <View style={{height: 430}}>
          <FlatList
              data={items}
              numColumns={2}
              ListEmptyComponent={<EmptyList message={"You haven't recorded any trip's yet"}/>}
              keyExtractor={item=> item.id}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{
                justifyContent: 'space-between'
              }}
              className='mx-1'
              renderItem={({item})=> {
                return (
                  <TouchableOpacity className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                    <View>
                      <Image source={randomImage()} className="w-36 h-36 mb-2"/>
                      <Text className={`${colors.heading} font-bold`}>{item.place}</Text>
                      <Text className={`${colors.heading} text-xs`}>{item.state}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
          />
        </View>
      </View>

    </ScreenWrapper>
      
    
  )
}