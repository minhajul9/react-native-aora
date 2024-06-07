import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
// import {  } from 'react-native-gesture-handler'

const SearchInput = ({ title, value, handleTextChange, placeholder, otherStyle, keyboardType, ...props }) => {


    return (
        <View className={`space-y-2 ${otherStyle}`}>
            <Text className='text-gray-200 text-base font-pmedium'>{title}</Text>

            <View className='w-full h-16 p-4 bg-black-200 border border-gray-500 rounded-lg focus:border-secondary-100 flex-row items-center'>
                <TextInput
                    placeholder='Search for a video topic'
                    value={value}
                    className='flex-1 text-white font-psemibold '
                    placeholderTextColor='#7b7b8b'
                    onChangeText={handleTextChange}
                />


                <TouchableOpacity
                    // onPress={() => setShowPassword(!showPassword)}
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