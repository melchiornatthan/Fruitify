import React, {useEffect} from "react";
import { Image, View, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import axios from "axios";

const Result = ({ route, navigation }) => {
    const [fruit, setFruit] = React.useState(null);
    const [quality, setQuality] = React.useState(null);
    const { uri, type, name } = route.params;
   
    


      let uploadImage = async () => {
        console.log("Requesting");
        const formdata = new FormData();
        formdata.append("file", {
          uri : uri,
          type : type,
          name : name
      });
      axios
        .post('http://10.10.55.41:5000/prediction', formdata,{
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
        .then(res => {
          console.log(res.data.buah);
          console.log(res.data.kualitas);
          if(res.data.buah == "apple"){
            setFruit(1);
          }else if(res.data.buah == "banana"){
            setFruit(2);
          }else{
            setFruit(3);
          }

          if(res.data.kualitas.fresh > 50){
            setQuality(1);
          }else {
            setQuality(0);
          }
        }
        )
        .catch(err => {
          console.log(err);
        });
        }
    
  
    return (
        <View style={{ 
          flex: 1, justifyContent: "center", alignItems: "center" ,backgroundColor:"#F3EFE0", margin:15, borderRadius:15, borderWidth: 5,
          borderColor: '#FF731D',}}>
          <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>
          Here is your result!
        </Text>
            {
          uri != null && <Image source={{uri : uri}} style={{
            width: 200, 
            height: 200,
            margin:50,
            alignSelf: 'center',
        }}/>
        }{fruit == 1 && 
            <View>
           <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            margin : 10,
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>
          Apple
        </Text>
            </View>
        }
        {fruit == 2 && 
            <View>
           <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            margin : 10,
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>
          Banana
        </Text>
            </View>
        }
        {fruit == 3 && 
            <View>
            <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            margin : 10,
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>
         Orange
        </Text>
            </View>
        }
        {quality == 1 && 
            <View>
            <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            margin : 10,
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>
         Your Fruit is Fresh!
        </Text>
            </View>
        }
        {quality == 0 && 
            <View>
            <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            margin : 10,
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>
         We Dont Recommend Eating This Fruit
        </Text>
            </View>
        }
<Pressable 
         onPress={uploadImage}
         style={{
          padding: 15,
          backgroundColor: '#FF731D',
          alignSelf: 'center',
          borderRadius: 10,
          marginBottom: 10,
         }}
        >
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}>Check Now</Text>
        </Pressable>

        
        
        </View>
    );
};


export default Result;