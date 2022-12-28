import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  // Declare state variables for the email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Define a function to handle the login form submission
  const handleLogin = () => {
    // Validate the form and perform the login action
    navigation.navigate('Root');
    
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Log in" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
