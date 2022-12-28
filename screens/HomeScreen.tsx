import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const handleLogout = () => {
        navigation.navigate('Login');
    }
  return (
    <View>
      <Text>Welcome to the home screen!</Text>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
