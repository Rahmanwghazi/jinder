import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { SIZES } from '../../../constants'
import useFetch from '../../../hooks/useFetch'

const Popularjobs = () => {
  const router = useRouter()

  const { data, isLoading, error } = useFetch('search', {
    query: 'React',
    num_pages: 1,
  })

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
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

export default Popularjobs