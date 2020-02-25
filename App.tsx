import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

const App = () => {
  return (
    <View style={{paddingTop: 100}}>
      <TouchableOpacity
        onPress={() =>
          Navigation.showModal({
            component: {
              name: 'HOME',
            },
          })
        }>
        <Text>Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
