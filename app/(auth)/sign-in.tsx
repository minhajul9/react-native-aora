import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants'
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { signIn } from "@/lib/appwrite";

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = async () => {

    if (!form.email || !form.password) {
      Alert.alert('Error', "Please, fill all the fields.");
    }
    else {
      setIsSubmitting(true);

      try {

        await signIn(form.email, form.password);

        router.replace('/home');

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

          <Text className="text-white text-2xl font-psemibold mt-10">Sign In</Text>

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
            title='Sign In'
            containerStyle='mt-7'
            handlePress={submitForm}
            isLoading={isSubmitting}
          />

          <View className="flex-row justify-center pt-5 gap-2 " >
            <Text className="text-gray-300 text-center mt-7 text-lg font-psemibold">
              Don't have an account?
            </Text>
            <Link href='/sign-up' className="text-lg text-secondary font-psemibold">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
