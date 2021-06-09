import React from 'react'
import {View, Text, FlatList, Pressable, Dimensions} from 'react-native'
import styles from './style'
import cars from './Cars'
import CarItem from '../Landing/index'

function Carlist(props) {

    return (
      <View style={styles.container}>
          <FlatList
          data={cars}
          renderItem={({item})=><CarItem cars={item}/>}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
          showsVerticalScrollIndicator={false}
          />
          {/* <Text>Hello</Text> */}
      </View>
    )
}

export default Carlist
