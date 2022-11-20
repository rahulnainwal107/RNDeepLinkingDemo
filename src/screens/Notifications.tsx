import React from 'react';
import {View, Text} from 'react-native';

const Notifications = () => {
  return (
    <View>
      <Text>Notifications</Text>
      <Text onPress={() => navigation.navigate('Profile')}>Go to Profile</Text>
    </View>
  );
};

export default Notifications;
