import React from 'react';
import {View, Text} from 'react-native';

const Profile = ({navigation, route}) => {
  const {params} = route;
  return (
    <View>
      <Text>Profile</Text>
      <Text>Params (Deep link id) - {params?.id}</Text>
      <Text onPress={() => navigation.navigate('User')}>Go to User</Text>
    </View>
  );
};

export default Profile;
