import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants';
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";

const Home = () => {

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    //TODO: recall videos


    setRefreshing(false)
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text key={item.id} className="text-3xl text-white">{item.id}</Text>
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
                posts={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] ?? []}
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
