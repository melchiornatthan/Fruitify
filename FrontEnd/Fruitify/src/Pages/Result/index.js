import react from "react";
import { Image, View, Text } from "react-native";

const Result = ({ route, navigation }) => {
    const [fruit, setFruit] = react.useState(null);
    const [quality, setQuality] = react.useState(null);
    const { uri, type, name } = route.params;
    const formdata = new FormData();
    formdata.append("file", {
        uri,
        type,
        name,
    });
    useEffect(() => {
        fruitapi();
        qualityapi();
      });

    const fruitapi = async () => {
        let res = await fetch(
            'http://localhost//webservice/user/uploadImage',
            {
              method: 'post',
              body: formdata,
              headers: {
                'Content-Type': 'multipart/form-data; ',
              },
            }
          );
          let responseJson = await res.json();
          if (responseJson.json != null) {
            if(responseJson.apple != 0){
              setFruit(1);
            }else if(responseJson.banana != 0){
                setFruit(2);
              }else{
                setFruit(3);
              }
          }
         else {
          //if no file selected the show alert
          alert('Upload Error');
        }
    }

    const qualityapi = async () => {
        let res = await fetch(
            'http://localhost//webservice/user/uploadImage',
            {
              method: 'post',
              body: formdata,
              headers: {
                'Content-Type': 'multipart/form-data; ',
              },
            }
          );
          let responseJson = await res.json();
          if (responseJson.json != null) {
            setQuality(responseJson.fresh);
          }
         else {
          //if no file selected the show alert
          alert('Upload Error');
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {
          uri != null && <Image source={{uri : uri}} style={{
            width: 200, 
            height: 200,
            alignSelf: 'center',
        }}/>
        }
        {fruit != null && quality != null && 
            <View>
            <Text>{fruit}</Text>
            <Text>{quality}</Text>
            </View>
        
        }
        
        </View>
    );
};


export default Result;