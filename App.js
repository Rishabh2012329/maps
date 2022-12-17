import React from 'react';
import {View} from 'react-native';
import Mapper from './component/Mapper';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Mapper
        data={[
          {latitude: 37.78825, longitude: -122.4324},
          {latitude: 35.78828, longitude: -115.4324},
        ]}
      />
    </View>
  );
};

export default App;
