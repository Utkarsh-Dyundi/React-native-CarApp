import { StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    carcontainer:{
      width:'100%',
      // height:'100%',
      height:Dimensions.get('window').height
    },
    heading:{
      marginTop:"30%",
    },
  
    title:{
      fontSize:40,
      fontWeight:"700",
      textAlign:'center'
    },
    img:{
      width:'100%',
      height:'100%',
      resizeMode:'cover',
      position:'absolute',
    },
    butt:{
      marginTop:"110%"
    }
  });

  export default styles