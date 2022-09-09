import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry, url}) => {
  return (
    <View style={styles.container}>
      <TextInput
        // left={<Image source={url} />}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: ' #e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});
export default CustomInput;