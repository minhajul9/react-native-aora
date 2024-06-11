import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
import { router, usePathname } from 'expo-router'
// import {  } from 'react-native-gesture-handler'

const SearchInput = ({ title, value, placeholder, otherStyle, keyboardType, ...props }) => {

    const pathname = usePathname();
    const [query, setQuery] = useState('')


    return (
        <View className={`space-y-2 ${otherStyle}`}>
            <Text className='text-gray-200 text-base font-pmedium'>{title}</Text>

            <View className='w-full h-16 p-4 bg-black-200 border border-gray-500 rounded-lg focus:border-secondary-100 flex-row items-center'>
                <TextInput
                    placeholder='Search for a video topic'
                    value={value}
                    className='flex-1 text-white font-psemibold '
                    placeholderTextColor='#CDCDE0'
                    onChangeText={(e) => setQuery(e)}
                />


                <TouchableOpacity
                    onPress={() => {
                        if (!query) {
                            Alert.alert("Missing query", "Please input something for search.")
                        }

                        if (pathname.startsWith('/search')) router.setParams({ query })
                        else {
                    router.push(`/search/${query}`)
                        }
                    }}
                >
                    <Image
                        source={icons.search}
                        className='w-6 h-6'
                        resizeMode='contain'
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default SearchInput