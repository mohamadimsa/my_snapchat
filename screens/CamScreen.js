import React, { useState, useRef, useEffect,createRef } from 'react';
import {Button,StyleSheet,Dimensions,View,Text,TouchableOpacity, Modal,Image,  Platform,Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import CameraRoll from "expo-cameraroll";
import * as MediaLibrary from 'expo-media-library';

const WINDOW_HEIGHT = Dimensions.get('window').height;

//pour la dimmension du capture bouton 
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);

const CamScreen = (props) => {
  const [IMG, setIMG] = useState(null);
  const [image, setImage] = useState(null);
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);

  //pour facecamera
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    onHandlePermission();
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, on abesoin de ta permission pour acceder au camera!');
        }
      }
    })();
  }, []);


//pour la galerie

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  

  if (!result.cancelled) {
    setImage(result.uri);
    const dataToSend = {
        duration: "1",
        // a changer pou           r 
        to: "a@gmail.com",
        image: result.uri
    };
    const formData = new FormData();
    formData.append('file',dataToSend.image)
    formData.append('to',dataToSend.to)
    formData.append('duration',dataToSend.duration)
  
    axios({ method: 'post', url: 'https://snapi-wac.herokuapp.com/snap', data: formData ,
     headers: {
        'token': props.data[1][1],
        'Content-Type': 'multipart/form-data'
      }
  
  }) .then(function (response) { console.log(response); }) .catch(function (error) { console.log(error.response); });
    
  }
}
  //pour annuler une photo

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  //pour filmer
  const capture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.7, base64: true };
      const filmer = await cameraRef.current.takePictureAsync(options).then(function (data) { 
        if (data) {
           cameraRef.current.pausePreview();
          setIsPreview(true)
              setIMG(data.uri);
          
        }
         });
    }
  };
  const save =async()=>{
    MediaLibrary.saveToLibraryAsync(IMG),
    console.log('photo', IMG);
  }
  const share =async()=>{
    props.navigation.navigate("User");
  }

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
    share:{
      top:600,
    },
      //css qui permet de faire facecamera
      galery:{
        top: -0,
        right: 190,
        height: 50,
        width: 50
      },
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
        top: 55,
        right: 20,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.7
      },
      save:{
      top:-30,
        height: 100,
        width: 100,
        right: 300,
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
                activeOpacity={0.7}>
                <AntDesign name='close' size={32} color='#fff' />
                <MaterialIcons name='save' size={28} color='white'style={styles.save}
      onPress={save}
      />
       <MaterialIcons name='share' size={28} color='white' style={styles.share}
      onPress={share}/>
                </TouchableOpacity>
                
                
            )}
          {!isPreview && (
            <View style={styles.bottom}>
              <TouchableOpacity   disabled={!isCameraReady} onPress={switchCamera}>
                <MaterialIcons name='flip-camera-android' size={28} color='white' style={styles.facecam}/>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                disabled={!isCameraReady}
                onPress={capture}
                style={styles.capture}/>
                 <TouchableOpacity   disabled={!isCameraReady} onPress={pickImage}>
                <MaterialIcons name='more-vert' size={28} color='white' style={styles.galery}/>
                {image && <Image source={{ uri: image }} style={{ width: 600, height: 200 }} />}
              </TouchableOpacity>
              </View>
            
        

          )}
        </View>
      </View>
      );
   
}

export default CamScreen ; 