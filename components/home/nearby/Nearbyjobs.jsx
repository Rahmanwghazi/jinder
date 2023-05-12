import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router'
import useFetch from '../../../hooks/useFetch'
import { SIZES } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View>
        {
          isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : error ? (
            <Text>{error}</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <PopularJobCard
                  item={item}
                  selectedJob={item.job_title}
                />
              )}
              keyExtractor={(item) => item.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )
        }
      </View>
    </View>
  )
}

export default Nearbyjobs