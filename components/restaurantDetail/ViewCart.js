import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ViewCart() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', position: 'absolute', bottom: 10, zIndex: 999, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: "100%" }}>
                <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', alignItems: 'center', padding: 12, borderRadius: 30, width: 300, position: 'relative' }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>
                        View Cart
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}