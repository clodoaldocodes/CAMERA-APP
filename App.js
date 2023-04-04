import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';

export default function App() {
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [hasPermisson, setHasPermission] = useState(null)

  useEffect (() => {
    (async () => {const {status} = await Camera.requestCameraPermissionsAsync()
    setHasPermission(status == 'granted');})
  }, [])

  if(hasPermisson == null){
    return<View></View>
  }
  
  if(hasPermisson == false){
    return<View>Acesso negado!</View>
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Camera type={type} style={sytles.camera}> 
  
        </Camera>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  }
});
