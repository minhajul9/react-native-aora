import { View, Text, FlatList, Image, RefreshControl, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants';
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";
import { getAllLatestPosts, getAllPosts } from "@/lib/appwrite";
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from "@/components/VideoCard";

const Home = () => {

  const { data: posts, reFetch } = useAppwrite(getAllPosts);
  const { data: latests } = useAppwrite(getAllLatestPosts);


  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);

    await reFetch();


    setRefreshing(false)
  }

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
                  Welcome Back
                </Text>

                <Text className="text-2xl text-white font-psemibold">
                  JSMastery
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

            <SearchInput />

            <View>

              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>

              <Trending
                posts={latests ?? []}
              />

            </View>

          </View>
        )}

        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}

        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}

      />
    </SafeAreaView>
  );
};

export default Home;
