import React, {useEffect} from 'react';
import {Text, StyleSheet, View, Image, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ActionButton} from '../Atomic';

import {useState} from 'react';
import axios from 'axios';
const History = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
      .then(res => {
        console.log(res.data.provinsi);
        setInvoices(res.data.provinsi);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView>
      <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
            paddingVertical: 20,
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>
          Here Your Previous Scans
        </Text>
      <ScrollView>
      {invoices.map(invoice => {
        return <Detail date={invoice.nama}/>;
      })}
    </ScrollView>
    </SafeAreaView>
    
  );
};


const Detail = (props) => {
  return (
    <View style={{
      margin: 5,
      borderWidht: 5,
      borderWidth: 5,
      padding: 20,
          borderColor: '#FF731D',
          borderRadius: 15,
    }}>
      <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingVertical: 10,
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>{props.date}</Text>
      <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingVertical: 5,
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>zzzxczx</Text>
      <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingVertical: 5,
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>asdasda</Text>
    </View>
  );
};
export default History;
