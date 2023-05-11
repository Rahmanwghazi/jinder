import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { SIZES } from '../../../constants'

const Popularjobs = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)
  const error = false;

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
              data={[1, 2, 3, 4, 5, 6]}
              renderItem={({ item }) => (
                <PopularJobCard
                  item={item}
                />
              )}
              keyExtractor={item => `${item}`}
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