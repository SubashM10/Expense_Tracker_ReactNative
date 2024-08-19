import { View, StatusBar, Platform } from 'react-native'
import React from 'react'

export default function ScreenWrapper({ children }) {
  // Adjust the padding for Android and iOS separately
  let statusBarHeight = StatusBar.currentHeight 
    ? Platform.OS === 'android' 
      ? StatusBar.currentHeight * 0.8 // Reduce Android padding by 20%
      : StatusBar.currentHeight 
    : Platform.OS === 'ios' 
      ? 30 
      : 0;

  return (
    <View style={{ paddingTop: statusBarHeight }}>
      {children}
    </View>
  )
}
