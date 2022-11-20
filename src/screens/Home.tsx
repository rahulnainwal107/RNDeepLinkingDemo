import React from 'react';
import {View, Text} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Text onPress={() => navigation.navigate('Notifications')}>
        Go to Notification
      </Text>
    </View>
  );
};

export default Home;
