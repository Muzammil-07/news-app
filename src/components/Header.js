import { StyleSheet, Text, View,TextInput,TouchableOpacity, ImageBackground } from 'react-native'
import  Icon  from 'react-native-vector-icons'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import bg1 from '../images/1.png'

const Header = () => {
 
  return (
    <View style={styles.container}>
     
 <Ionicons name="menu" size={40} color="black" />
    <TextInput style={styles.input} placeholder='Search News'/>
    <TouchableOpacity>
    <Ionicons style={styles.searchBtn} name="search" size={40} color="black" />
    </TouchableOpacity>
    <Ionicons style={styles.searchBtn} name="notifications" size={30} color="black" />
 
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:'center',
    position:"absolute",
    top:10,
    width:"100%",
    },
    bg:{

    },
    input:{
        backgroundColor:"white",
        width:"50%",
        borderRadius:8,
        height:40,
        paddingLeft:8
        
    },
    searchBtn:{
       
    }
})