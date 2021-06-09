import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import styles from './style'
import Stylebutton from '../Stylebutton/index'

function CarItem(props) {
    const {source,heading, subhead}=props.cars

    return (
      <View style={styles.carcontainer}>
      <ImageBackground source={source}
      style={styles.img}
      ></ImageBackground>
        <View style={styles.heading}>
          <Text style={styles.title}>
            {heading}
          </Text>
          <Text style={{fontSize:15, textAlign:'center'}}>
           {subhead}
          </Text>
        </View>
        <View style={styles.butt}>
        <Stylebutton 
        type="primary"
        content={"Order now"}
        onPress={()=>{
          console.warn("Order successful")
        }} />

        <Stylebutton 
        type="secondary"
        content="Book a test ride"
        onPress={()=>{
          console.warn("Booking successful")
        }} />
        </View>
        </View>
    )
}

export default CarItem
