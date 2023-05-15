import { StyleSheet, Text, View ,SafeAreaView,StatusBar,Dimensions,ImageBackground,TouchableOpacity} from 'react-native'
import { useEffect } from 'react'
import React from 'react'
import Header from './components/Header'
import Crousal from './components/Crousal'
import { useDispatch,useSelector } from 'react-redux';
import addData from '../redux/actions'
import bg1 from './images/3.png'
import Main from './components/Main'
import Cat from './components/Cat'
import { ScrollView } from 'react-native-gesture-handler'

import {API_KEY } from "@env"


const Home = () => {
  const dispatch =useDispatch();
  const myState= useSelector(state=>state.changeData)
  useEffect(()=>{
      
    let unSub = true
    if (unSub){
        
      const getData= async()=>{
      try{
        const res = await fetch("https://newsdata2.p.rapidapi.com/news?language=en",{
          method:"GET",
          params:{language:"en"} ,
          headers:{
            'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'newsdata2.p.rapidapi.com'
          }
    
        })
        const data = await res.json()
        console.log (data,"data");
        dispatch(addData(data.results))
      }
      catch( err){
        console.log(err)

    
      }
      } 
      getData()
    }
    return ()=>{
    unSub=false
    }
    
      },[])
  return (
   <SafeAreaView style={styles.container}>
    <ImageBackground source={bg1} style={styles.bg}>
<ScrollView>
  <View style={styles.crousal}>
  <Header/>

  <Crousal/>
  </View>
  <View style={styles.cat}>
 <Cat/>
   
  </View>

  </ScrollView>
</ImageBackground>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
      alignItems:"center",
      marginTop:StatusBar.currentHeight || 0,
      marginBottom:15
    },
    bg:{
   flex:1
    },
    crousal:{
      flex:2,
      height:250,
      width:Dimensions.get("window").width,
      // backgroundColor:"red"
    },
    cat:{
      flex:4,

    flexDirection:'row',
      width:Dimensions.get("window").width,

    },
    main:{
      flex:4,
    
      width:Dimensions.get("window").width,
      // backgroundColor:"yellow"
    },
    btn:{
      backgroundColor:"orange",
      height:40,
      width:120,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:4
    }
})