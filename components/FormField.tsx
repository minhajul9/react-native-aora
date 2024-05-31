import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({ title, value, handleTextChange, placeholder, otherStyle, keyboardType, ...props }) => {
    return (
        <View className={`space-y-2 ${otherStyle}`}>
            <Text className='text-gray-200 text-base font-pmedium'>{title}</Text>

            <View className='w-full h-16 bg-black-200 border border-gray-500 rounded-lg focus:border-secondary-100'>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    className='flex-1 text-white font-psemibold'
                />
            </View>
        </View>
    )
}

export default FormField