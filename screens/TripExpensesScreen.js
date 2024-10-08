import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import randomImage from '../assets/images/randomImage'
import EmptyList from '../components/emptyList'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import BackButton from '../components/backButton'
import ExpenseCard from '../components/expenseCard'

const items = [
    {
        id: 1,
        title: 'ate sandwitch',
        amount: 4,
        category: 'food'
    },
    {
        id: 2,
        title: 'bought a jacket',
        amount: 50,
        category: 'shopping'
    },
    {
        id: 3,
        title: 'watched a movie',
        amount: 100,
        category: 'entertainment'
    },
]


export default function TripExpensesScreen(props) {
    const {id, place, state} = props.route.params;
  const navigation = useNavigation();
  return (
    <ScreenWrapper className='flex-1'>
        <View className="px-4 ">
        <View className="relative mt-5">
                <View className="absolute top-2 left-0 z-10">
                  <BackButton />
                </View>
                <View>
                    <Text className={`${colors.heading} text-xl font-bold text-center`}>{place}</Text>
                    <Text className={`${colors.heading} text-xl text-center`}>{state}</Text>
                </View>
                
        </View>
      <View className="flex-row justify-center items-center rounded-xl  mb-4">
        <Image source={require('../assets/images/7.png')} className="w-80 h-80"/>
      </View>
      <View className="space-y-3 ">
        <View className=" flex-row justify-between items-center ">
          <Text className={`${colors.heading} font-bold text-xl`}>Expenses</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('AddExpense')} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={colors.heading}>Add Expense</Text>
          </TouchableOpacity> 
        </View>
        <View style={{height: 430}}>
          <FlatList
              data={items}

              ListEmptyComponent={<EmptyList message={"You haven't recorded any expenses yet"}/>}
              keyExtractor={item=> item.id}
              showsVerticalScrollIndicator={false}
              className='mx-1'
              renderItem={({item})=> {
                return (
                  <ExpenseCard item={item}/>
                )
              }}
          />
        </View>
      </View>
        </View>

    </ScreenWrapper>
      
    
  )
}