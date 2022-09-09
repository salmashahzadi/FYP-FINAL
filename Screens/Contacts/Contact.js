import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../CustomComponents/CustomButton';

const ContactScreen = () => {
  const persons = [
    {
      id: '1',
      contactname: 'Earnest Green',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '2',
      contactname: 'Winston Orn',
      contactnum: '349232374',
      email: 'kjsakh@email.com',
      orgname: 'maya & max',
    },
    {
      id: '3',
      dealname: 'Carlton Collins',
      contactnum: '3493493474',
      email: 'ah232@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '4',
      dealname: 'Malcolm Labadie',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '5',
      dealname: 'Michelle Dare',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '6',
      dealname: 'Carlton Zieme',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '7',
      dealname: 'Jessie Dickinson',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '8',
      dealname: 'Julian Gulgowski',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '9',
      contactname: 'Ellen Veum',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '10',
      contactname: 'Lorena Rice',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },

    {
      id: '11',
      contactname: 'Carlton Zieme',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '12',
      contactname: 'Jessie Dickinson',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '13',
      contactname: 'Julian Gulgowski',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '14',
      contactname: 'Ellen Veum',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
    {
      id: '15',
      contactname: 'Lorena Rice',
      contactnum: '3493493474',
      email: 'ahsg@email.com',
      orgname: 'Ika motors',
    },
  ];
  const nav = useNavigation();
  const onContactPressed = () => {
    console.warn('Add Contact');
    //add deals
    nav.navigate('CreateContact');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <CustomButton text="Add New Contact" onPress={onContactPressed} />
        {persons.map(person => {
          return (
            <View>
              <Text style={styles.item}>
                {person.contactname} {person.contactnum} {person.email}{' '}
                {person.orgname}{' '}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

//styles to see the data more clearly

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});
export default ContactScreen;