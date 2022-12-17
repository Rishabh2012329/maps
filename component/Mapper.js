import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import ViewShot, {captureRef} from 'react-native-view-shot';
import axios from 'axios';

const Mapper = ({data}) => {
  const ref = useRef();
  
  const onCapture = uri => {
    var body = new FormData();
    body.append('file', uri);
    axios
      .post('http://3.7.20.173:8503/api/upload/', body)
      .then(res => console.log(res))
      .catch(err => console.log(JSON.stringify(err.message)));
  };

  return (
    <ViewShot
      onCapture={onCapture}
      ref={ref}
      style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 15.0922,
          longitudeDelta: 25.0421,
        }}>
        {data.map((obj, index) => (
          <Marker key={index} coordinate={{...obj}} />
        ))}
      </MapView>

      <View style={styles.screenshot}>
        <Button title="Screenshot" onPress={() => ref.current.capture()} />
      </View>
    </ViewShot>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    position:"relative"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  screenshot:{
    position: 'absolute', 
    bottom: 50, 
    right: 10
  }
});

export default Mapper;
