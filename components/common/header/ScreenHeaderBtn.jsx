import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, hanldePress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnContainer} onPress={hanldePress}>
        <Image
          source={iconUrl}
          resizeMode='cover'
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ScreenHeaderBtn