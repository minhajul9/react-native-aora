import { View, Text, FlatList, Image, RefreshControl, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants';
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";
import { getAllLatestPosts, getAllPosts, searchPosts } from "@/lib/appwrite";
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from "@/components/VideoCard";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useLocalSearchParams } from "expo-router";

const Search = () => {

  const { query } = useLocalSearchParams();

  const { data: posts, reFetch } = useAppwrite(searchPosts(query));
  const { data: latests } = useAppwrite(getAllLatestPosts);
  const { user } = useGlobalContext();


  useEffect(() => {
    reFetch();
   },
    [query])

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts ?? []}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">

            <View className="items-start justify-between flex-row">
              <View>

                <Text className='font-pmedium text-sm text-gray-100'>
                  Search Result
                </Text>

                <Text className="text-2xl text-white font-psemibold">
                  {query}
                </Text>

              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="h-10 w-9"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput initialQuery = {query} />


          </View>
        )}

        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this query"
          />
        )}


      />
    </SafeAreaView>
  );
};

export default Search;
