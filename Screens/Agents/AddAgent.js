import React from 'react';
import {View, Text, Button} from 'react-native';

const AddAgent = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('props')} title="Add Agent" />
    </View>
  );
};
export default AddAgent;
