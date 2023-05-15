import { StyleSheet, Text, View, FlatList, Image, ScrollView, Dimensions, ImageBackground ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import test from '../images/test.jpg'


import back from '../images/12.jpg'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'



const Crousal = () => {
  const navigation = useNavigation()
  var data = [{ desc: "hello", id: "121", banner: { uri: "https://s3.eu-west-1.amazonaws.com/prod-mh-ireland/9338acf4-9243-4139-b277-d1902d0827e0/54dbee3f-d23e-4c33-954e-94c696a5f61f/9338acf4-9243-4139-b277-d1902d0827e0.jpg" } },
  { desc: "never", id: "154", banner: require('../images/test.jpg') }]
  const myState = useSelector(state => state.changeData);

  var arr = [];
  const [isLoading,setLoading]=useState(false)
  const [imgActive, setImgActive] = useState(<Text>Hello World</Text>);
  useEffect(() => {

    let unSub = true;
    if (unSub) {
      if (myState[0] != "") {
        // console.log(myState, "notAvail")
        setImgActive(
          <ScrollView horizontal style={styles.parent}>
            {
              myState.map((doc,index)=>{
                let t= doc.title
                t
                return(
                  <View key={index} style={styles.crousal}>
                  <ImageBackground source={doc.image_url? {uri:doc.image_url}:back} style={styles.img}>
                    <View style={styles.tView}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('card',{value:doc})}}>
                    <Text style={styles.text}>{doc.title}</Text>
                    </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </View>
                )
              })
            }
          </ScrollView>
        )
     
        setLoading(true)
        // console.log("Now finifhed")
      } else {
        // console.log("notAvail")
      }
    }
    return () => {
      unSub = false
    }

  }, [myState])


  return (
    <View style={styles.container}>
{ !isLoading? <Text>Hello World</Text> : <View>{imgActive}</View>

   
}
    </View>

  )
}

export default Crousal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get('window').width,
    height: 250,
    marginTop: 65
  },
  parent: {
    width: Dimensions.get("window").width,
    height: 150,
    // backgroundColor: "red",
  },
  img: {
    width: Dimensions.get("window").width,
    height: 165,
    resizeMode: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  text: {
    // backgroundColor: "grey",
    fontSize: 30,
    fontWeight: "bold",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 4,
   color:"white",
   textShadowColor:"black",
   textShadowRadius:8
  },
  tView:{
    width:Dimensions.get("window").width,
    height:250,
    // backgroundColor:"white",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }

})