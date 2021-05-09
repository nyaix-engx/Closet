import React from 'react';
import {View,StyleSheet} from 'react-native'

const PageContainer=(props)=>{
return (
  <View style={styles.container}>
    {props.children}
  </View>
) 
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    display:"flex",
    flexDirection:'column',
    backgroundColor:'#f7f7f8'
  }
})

export default PageContainer