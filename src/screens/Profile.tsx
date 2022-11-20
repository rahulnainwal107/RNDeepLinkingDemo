import React from 'react';
import {View, Text} from 'react-native';

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Text onPress={() => navigation.navigate('User')}>Go to User</Text>
    </View>
  );
};

export default Profile;
