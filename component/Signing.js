import { View, Text, Image, Dimensions, TextInput, Pressable, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { useEffect, useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';

const Signing = () => {

  const { width, height } = Dimensions.get('screen');

  const [checked, setChecked] = useState(false);
  const [signType, setSignType] = useState('sign-in');

  const [emailSignIn, setEmailSignIn] = useState(null);
  const [passwordSignIn, setPasswordSignIn] = useState(null);

  const [fullName, setFullName] = useState(null);
  const [emailSignUp, setEmailSignUp] = useState(null);
  const [passwordSignUp, setPasswordSignUp] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const pickPhoto = () => {
    const pick = async () => {
      try {
        const result = await DocumentPicker.getDocumentAsync({
          type: '*/*'
        });

        if (result.canceled) {
          Alert.alert('No image selected!');
        } else {
          setProfilePhoto(result.assets[0]);
        }
      } catch (err) {
        console.error(err);
      }
    }

    pick();
  };

  const signIn = () => {
    if (email !== null && password !== null) {
      const loginApi = async () => {
        try {
          const response = await fetch('http://192.168.1.2:6000/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: emailSignIn,
              password: passwordSignIn
            })
          });
          const data = await response.json();
          console.log(data);
          if (data.userInfo) {
            Alert.alert('Granted!');
          } else {
            Alert.alert('Oops, somthing went wrong. Please re-check your credentials');
          }
        } catch (err) {
          console.error(err);
        }
      };

      loginApi();
    } else {
      Alert.alert('Please type your account credentials!');
    }
  };

  const signUp = () => {
    if (fullName !== null && emailSignUp !== null &&
      passwordSignUp !== null && phoneNumber !== null && checked &&
      profilePhoto !== null) {
        const file = {
          uri: profilePhoto.uri,
          type: profilePhoto.mimeType,
          name: profilePhoto.name
        };
      
        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('email', emailSignUp);
        formData.append('password', passwordSignUp);
        formData.append('phoneNumber', phoneNumber);
        formData.append('profilePhoto', file);
      
        const createAccountApi = async () => {
          try {
            const response = await fetch('http://192.168.1.2:4000/users', {
              method: 'POST',
              body: formData
            });
            const data = await response.json();
            console.log(data);
          } catch (err) {
            console.error(err);
          }
        };
      
        createAccountApi();
      } else {
        Alert.alert('Please fill-in the sign up correctly!');
      }
  };

  return (
    <View style={[signType === 'sign-up' ? {height: height / 1.3} : {height: height / 1.7}, {position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {borderTopLeftRadius: 70}, {borderTopRightRadius: 70}, {backgroundColor: '#fff'}, {elevation: 50}, {padding: 50}]}>
      {
        signType === 'sign-up' && (
          <>
            <Text style={[{fontFamily: 'Poppins-Bold'}, {fontSize: 20}]}>Sign up</Text>
            <View style={[{gap: 10}, {marginTop: 30}]}>
              <TextInput onChangeText={(text) => setFullName(text)} style={[{height: height / 14}, {padding: 15}, {fontFamily: 'Poppins-Medium'}, {borderBottomWidth: 3}, {borderColor: 'rgb(197, 41, 155)'}]} placeholder='Full Name...' />
              <TextInput onChangeText={(text) => setEmailSignUp(text)} style={[{height: height / 14}, {padding: 15}, {fontFamily: 'Poppins-Medium'}, {borderBottomWidth: 3}, {borderColor: 'rgb(197, 41, 155)'}]} placeholder='Email...' />
              <TextInput onChangeText={(text) => setPasswordSignUp(text)} style={[{height: height / 14}, {padding: 15}, {fontFamily: 'Poppins-Medium'}, {borderBottomWidth: 3}, {borderColor: 'rgb(197, 41, 155)'}]} placeholder='Password...' />
              <TextInput onChangeText={(text) => setPhoneNumber(text)} style={[{height: height / 14}, {padding: 15}, {fontFamily: 'Poppins-Medium'}, {borderBottomWidth: 3}, {borderColor: 'rgb(197, 41, 155)'}]} placeholder='Phone Number...' keyboardType='numeric' />
              
              <Pressable onPress={pickPhoto} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 20}, {padding: 10}, {borderRadius: 10}, {backgroundColor: '#fff'}, {elevation: 50}]}>
                <MaterialIcons name="photo" size={24} color="rgb(197, 41, 155)" />
                <Text style={[{fontFamily: 'Poppins-Medium'}]}>Profile photo</Text>
              </Pressable>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {marginTop: 10}]}>
              <CheckBox onPress={() => setChecked(!checked)} checked={checked} checkedColor='rgb(197, 41, 155)' />
              <Text style={[{fontFamily: 'Poppins-Medium'}]}>I Agree with Terms of Services</Text>
            </View>

            <Pressable onPress={signUp} style={[{padding: 15}, {borderRadius: 50}, {backgroundColor: 'rgb(197, 41, 155)'}, {alignItems: 'center'}]}>
              <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Sign up</Text>
            </Pressable>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 20}, {marginTop: 20}]}>
              <Text style={[{fontFamily: 'Poppins-Medium'}]}>Already have an account?</Text>
              <Pressable onPress={() => setSignType('sign-in')}>
                <Text style={[{fontFamily: 'Poppins-Medium'}, {color: 'rgb(197, 41, 155)'}]}>Sign in</Text>
              </Pressable>
            </View>
          </>
        )
      }

      {
        signType === 'sign-in' && (
          <>
            <Text style={[{fontFamily: 'Poppins-Bold'}, {fontSize: 20}]}>Sign in</Text>
            <View style={[{gap: 10}, {marginTop: 30}]}>
              <TextInput onChangeText={(text) => setEmailSignIn(text)} style={[{height: height / 14}, {padding: 15}, {fontFamily: 'Poppins-Medium'}, {borderBottomWidth: 3}, {borderColor: 'rgb(197, 41, 155)'}]} placeholder='Email...' />
              <TextInput onChangeText={(text) => setPasswordSignIn(text)} style={[{height: height / 14}, {padding: 15}, {fontFamily: 'Poppins-Medium'}, {borderBottomWidth: 3}, {borderColor: 'rgb(197, 41, 155)'}]} placeholder='Password...' />
            </View>

            <Pressable onPress={signIn} style={[{padding: 15}, {borderRadius: 50}, {backgroundColor: 'rgb(197, 41, 155)'}, {alignItems: 'center'}, {marginTop: 30}]}>
              <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Sign in</Text>
            </Pressable>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 20}, {marginTop: 20}]}>
              <Text style={[{fontFamily: 'Poppins-Medium'}]}>Don't have an account?</Text>
              <Pressable onPress={() => setSignType('sign-up')}>
                <Text style={[{fontFamily: 'Poppins-Medium'}, {color: 'rgb(197, 41, 155)'}]}>Sign up</Text>
              </Pressable>
            </View>

            <View style={[{alignItems: 'center'}, {gap: 10}, {marginTop: 30}]}>
              <Text style={[{fontFamily: 'Poppins-Regular'}, {color: 'gray'}, {fontSize: 12}]}>By continuing, you agree to our</Text>
              <View style={[{flexDirection: 'row'}, {gap: 20}]}>
                <Pressable style={[{borderBottomWidth: 1}, {borderColor: 'lightgray'}]}>
                  <Text style={[{fontFamily: 'Poppins-Regular'}, {color: 'gray'}, {fontSize: 12}]}>Terms of Services</Text>
                </Pressable>

                <Pressable style={[{borderBottomWidth: 1}, {borderColor: 'lightgray'}]}>
                  <Text style={[{fontFamily: 'Poppins-Regular'}, {color: 'gray'}, {fontSize: 12}]}>Privacy Policy</Text>
                </Pressable>

                <Pressable style={[{borderBottomWidth: 1}, {borderColor: 'lightgray'}]}>
                  <Text style={[{fontFamily: 'Poppins-Regular'}, {color: 'gray'}, {fontSize: 12}]}>Content Policy</Text>
                </Pressable>
              </View>
            </View>
          </>
        )
      }
    </View>
  )
};

export default Signing;