import { StyleSheet, Text, View, Picker, TouchableOpacity, Alert ,Image,ScrollView ,Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import countries from './Countries'
import test from'../images/test.jpg'
import countriesName from './CountriesName'
import { useNavigation } from '@react-navigation/native'

import {API_KEY} from "@env"
const Cat = () => {
    const [loading, setLoading] = useState(true)
    const [cont,setCont]=useState(<Text>Loading</Text>)
    const [code,setCode]=useState('us')
    var cName = [];
const navigation = useNavigation();
const [country, setCountry] = useState("")
useEffect(()=>{
    if (country != "") {
        var a = countriesName.find((doc) => {
            return doc.name == country
        })
        setCode(a.code)}
},[country])
  
    const getData = async () => {
        if (country != "") {
            let a = countriesName.find((doc) => {
                return doc.name == country
            })
            setCode(a.code)
        //    console.log(a)
            try{
            const res = await fetch(`https://newsdata2.p.rapidapi.com/news?language=en&country=${code}`,{
                method:"GET",
                headers:{
                    'X-RapidAPI-Key':"f3208d7d84msh118e009303f27ccp1a66eajsnf69e6bb0403e",
                    'X-RapidAPI-Host': 'newsdata2.p.rapidapi.com'
                }
                
            })
             const rep = await res.json();
              let rep1 = rep.results;
             setCont(
                <ScrollView>
             { rep1.map((doc,index)=>{
                return(
                    <View style={styles.list} key={index}>
                        <Image source={doc.image_url?{uri:doc.image_url}: test} style={styles.img}/>
                    <TouchableOpacity onPress={()=>{navigation.navigate('card',{value:doc})}}>
                    <Text style={styles.textList}> {doc.title}</Text>
                    </TouchableOpacity>
                    </View>
                )
             
              })}
              </ScrollView>)
            //  console.log(rep1)
            }catch(err){
                Alert.alert(err.result.code)
            }

        } else {
            Alert.alert("Please Select Country")
        }
    }
    // console.log(countries)
    if(!loading){
        return <Text>Loading</Text>
    }
    return (
        <View style={styles.container}>
       <View style={styles.parent}>

   
            <SelectDropdown data={countries}
                defaultButtonText='Select country'
                onSelect={(selectedItem, index) => { setCountry(selectedItem) }} />
            <TouchableOpacity onPress={getData} style={styles.btn}>
                <Text>Search</Text>
            </TouchableOpacity>

            </View>
        <View>{cont}</View>
        </View>
      

    )
}

export default Cat

const styles = StyleSheet.create({
    container: {
        flex: 1,
    
       

    },
    parent: {
      
        flexDirection: "row",
        justifyContent: "center",
    
    

    },
    btn: {
        backgroundColor: "orange",
        height: 50,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4

    },
    list:{
        width:Dimensions.get("window").width,
        height:220,
        backgroundColor:"white",
        padding:6,
        marginTop:6,
        marginBottom:20,
        justifyContent:"center",
       

    },
    textList:{
        fontSize:20,
        textAlign:"left",
        color:"blue",
        textDecorationLine:"underline"
    },
    img:{
        width:140,
        height:140
    }
})