import React from 'react'
import {View, Text, ImageBackground, Pressable} from 'react-native'
import styles from './style'

function Stylebutton(props) {
    const type=props.type
    const bg= type==="primary"?'black':'white' ;
    const color= type==="secondary"?'black':'white' ;
    const text=props.content
    const onPress=props.onPress

    return (
      <View style={styles.container}>
          <Pressable style={[styles.but, {backgroundColor:bg}]} 
          onPress={onPress}>
          <Text style={[styles.text, {color:color}]}>{text}</Text>
          </Pressable>
      </View>
    )
}

export default Stylebutton
