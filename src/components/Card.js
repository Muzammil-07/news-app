import { StyleSheet, Text, View ,SafeAreaView ,StatusBar,Image ,Dimensions,Linking,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import test from '../images/test.jpg'
import bg2 from '../images/2.png'
import { useNavigation } from '@react-navigation/native'

const Card = (props) => {
    const navigation = useNavigation()
    const a =props.route.params.value;
  return (
    <SafeAreaView style={styles.parent}>
    <View style={styles.container}>
        <ScrollView>
     <Image source={a.image_url?{uri:a.image_url}:test} style={styles.img} />
     <Text style={styles.title}>{a.title}</Text>
     <Text style={styles.content}>{a.content}</Text>
     <View style={styles.date}>
        <Text style={styles.dateText}>Source : {a.source_id}</Text>
        <Text style={styles.dateText}>{a.pubDate}</Text>
     </View>
     <TouchableOpacity onPress={()=>{Linking.openURL(a.link)}}>
     <Text style={styles.link}>{a.link}</Text>
     </TouchableOpacity>
     </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default Card

const styles = StyleSheet.create({
   parent:{
    marginTop:StatusBar.currentHeight || 0,
    flex:1
   }, container:{
        flex:1,
        alignItems:"center"
    },
    img:{
        width:Dimensions.get("window").width,
        height:250,
        resizeMode:"contain"
    },
    title:{
        fontSize:25,
        fontWeight:"bold",
        color:"blue",
        textDecorationLine:"underline",
        margin:4
    },
    content:{
        width:Dimensions.get("window").width,
        padding:8
    },
    date:{
        width: Dimensions.get("window").width,
        flexDirection:"row",
        justifyContent:"space-around"
    },
    dateText:{
        fontSize:16,
        fontWeight:"bold"
    },
    link:{
        marginTop:20,
        color:"blue",
        textDecorationLine:"underline",
        fontSize:20,
        margin:8
    }
})