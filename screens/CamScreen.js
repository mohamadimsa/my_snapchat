import React, { useState, useRef, useEffect,createRef } from 'react';
import {StyleSheet,Dimensions,View,Text,TouchableOpacity, Modal } from 'react-native';
import { Camera } from 'expo-camera';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
const WINDOW_HEIGHT = Dimensions.get('window').height;

//pour la dimmension du capture bouton 
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);

const CamScreen = (props) => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);

  //pour facecamera
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    onHandlePermission();
  }, []);

  //pour annuler une photo

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  //pour filmer
  const capture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.7, base64: true };
      const filmer = await cameraRef.current.takePictureAsync(options);
      const source = filmer.base64;
  
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
      }
    }
  };

  //pour la permission

  const onHandlePermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

//pour savoir si le camera est ready pour filmer


  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType(prevCameraType =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>DENIED ACCESS FOR THE CAM</Text>;
  }
  
  // css qui permet au container de faire un full screen camera 
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject
    },
    text: {
      color: '#fff'
    },
      //css qui permet de faire facecamera
      facecam:{
        top: -680,
        right: 90,
        height: 50,
        width: 50
       
      },
      bottom: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 28,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      capture: {
        borderColor:'#fff',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        height: CAPTURE_SIZE,
        width: CAPTURE_SIZE,
        borderRadius: 50,
        marginBottom: 28,
        marginHorizontal: 30,
        right: 20,
      },
      closeButton: {
        position: 'absolute',
        top: 35,
        right: 20,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.7
      }
  });


 
    return (
        <View style={styles.container}>
        <Camera
          ref={cameraRef}
          style={styles.container}
          type={cameraType}
          onCameraReady={onCameraReady}
        />
        <View style={styles.container}>
        {isPreview && (
                <TouchableOpacity
                onPress={cancelPreview}
                style={styles.closeButton}
                activeOpacity={0.7}
                >
                <AntDesign name='close' size={32} color='#fff' />
                </TouchableOpacity>
            )}
          {!isPreview && (
            <View style={styles.bottom}>
              <TouchableOpacity   disabled={!isCameraReady} onPress={switchCamera}>
                <MaterialIcons name='flip-camera-ios' size={28} color='white' style={styles.facecam}/>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                disabled={!isCameraReady}
                onPress={capture}
                style={styles.capture}/>
                
            </View>
            
        

          )}
        </View>
      </View>
      );
   
}

export default CamScreen ; 