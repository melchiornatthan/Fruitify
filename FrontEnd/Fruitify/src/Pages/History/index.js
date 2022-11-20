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
    <ScrollView>
      {invoices.map(invoice => {
        return <Text>{invoice.nama}</Text>;
      })}
    </ScrollView>
  );
};

export default History;
