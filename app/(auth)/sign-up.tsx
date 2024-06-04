import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants'
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from '../../lib/appwrite'

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    // fullname: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = async () => {

    if (!form.email || !form.password || !form.password) {
      Alert.alert('Error', "Please, fill all the fields.");
    }
    else {
      setIsSubmitting(true);

      try {
        alert("email: " + form.email +"  password: "+ form.password+"  username: " + form.username);
        // const result = await createUser(form.email, form.password, form.username);

        router.replace('/home')
      } catch (error) {
        Alert.alert("Error", error.message)
      }
      finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>

        <View className="w-full min-h-[85vh] px-4 my-6 justify-center">

          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]" />

          <Text className="text-white text-2xl font-psemibold mt-10">Sign Up to Aora</Text>

          {/* <FormField
            title="Fullname"
            value={form.fullname}
            handleTextChange={(e: string) => setForm({ ...form, fullname: e })}
            placeholder='Enter your Full Name'
            otherStyle="mt-10"
          /> */}

          <FormField
            title="Username"
            value={form.username}
            handleTextChange={(e: string) => setForm({ ...form, username: e })}
            placeholder='Enter an Username'
            otherStyle="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            handleTextChange={(e: string) => setForm({ ...form, email: e })}
            placeholder='Enter your email'
            otherStyle="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            placeholder='Enter your password'
            value={form.password}
            handleTextChange={(e: string) => setForm({ ...form, password: e })}
            otherStyle="mt-7"
          />


          <CustomButton
            title='Sign Up'
            containerStyle='mt-7'
            handlePress={submitForm}
            isLoading={isSubmitting}
          />

          <View className="flex-row justify-center pt-5 gap-2 " >
            <Text className="text-gray-300 text-center mt-7 text-lg font-psemibold">
              Already have an account?
            </Text>
            <Link href='/sign-in' className="text-lg text-secondary font-psemibold">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
