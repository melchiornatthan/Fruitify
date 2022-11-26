import React from "react";
import { View, Text } from "react-native";

const Info = (props) => {
    return (
        <View style={{
            margin: '5%',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>
            {props.fruit}</Text>
            <View 
            style={{
                margin: '5%',
            }}>
                <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
            marginBottom: '5%',
          }}>
            One Medium Sized {props.fruit} Contain</Text>
            {props.c != null && <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
            marginBottom: '5%',
          }}>
            {props.c}</Text>}

            {props.protein != null && <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
            marginBottom: '5%',
          }}>
            {props.protein}</Text>}

            {props.pottasium != null && <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
            marginBottom: '5%',
          }}>
            {props.pottasium}</Text>}
            
            {props.magnesium != null && <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
            marginBottom: '5%',
          }}>
            {props.magnesium}</Text>}
            </View>
            
        </View>
    );
    };

    

export default Info;