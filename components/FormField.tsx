import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
// import {  } from 'react-native-gesture-handler'

const FormField = ({ title, value, handleTextChange, placeholder, otherStyle, keyboardType, ...props }) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyle}`}>
            <Text className='text-gray-200 text-base font-pmedium'>{title}</Text>

            <View className='w-full h-16 p-4 bg-black-200 border border-gray-500 rounded-lg focus:border-secondary-100 flex-row items-center'>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    className='flex-1 text-white font-psemibold '
                    placeholderTextColor='#7b7b8b'
                    onChangeText={handleTextChange}
                    secureTextEntry={title === 'Password' && !showPassword}
                />

                {
                    title === "Password" &&
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={showPassword ? icons.eyeHide : icons.eye}
                            className='w-6 h-6'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default FormField