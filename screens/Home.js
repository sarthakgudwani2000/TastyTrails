import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
  return (
    <SafeAreaView>
      <View style={{paddingTop:30}}>
        <HeaderTabs />
      </View>
   </SafeAreaView>
  );
}
