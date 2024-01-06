import { View, Text, Pressable, Dimensions, Alert, ActivityIndicator } from 'react-native';
import ProgressBox from '../component/ProgressBox';
import { Entypo } from '@expo/vector-icons';
import BottomNav from '../component/BottomNav';
import { useEffect, useState } from 'react';
import Step1 from '../component/Step1';
import Step2 from '../component/Step2';
import Step3 from '../component/Step3';
import Step4 from '../component/Step4';
import Step5 from '../component/Step5';
import Step6 from '../component/Step6';
import Step7 from '../component/Step7';
import Step8 from '../component/Step8';
import Step9 from '../component/Step9';
import Step10 from '../component/Step10';
import { useNavigation } from '@react-navigation/native';
import data from '../Context';
import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AddOfferPage() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const { count, setCount, placeType, spaceGiven, location, 
    locationName, guests, bedrooms, beds, bathrooms,
    wifi, tv, washer, parking, airConditioning,
    pool, firstAid, fireExtinguisher, offerPhotos, title, description,
    price, checkIn, checkOut } = useContext(data);

    const [showFinishLoading, setShowFinishLoading] = useState(false);

    const decrement = () => {
        if (count <= 0) {
            return;
        } else {
            setCount(count - 1);
        }
    };

    const increment = () => {
        if (count === 0 && placeType === null) {
            Alert.alert('Please choose one!');
        } else if (count === 1 && spaceGiven === null) {
            Alert.alert('Please choose one!');
        } else if (count === 2 && location === null) {
            Alert.alert('Select a location!');
        } else if (count === 5 && offerPhotos === null) {
            Alert.alert('Select at least 3 photos of your house!');
        } else if (count === 6 && title === null) {
            Alert.alert('Title must be at least 4 characters long!');
        } else if (count === 7 && description === null) {
            Alert.alert('Description must be at least 10 characters long!');
        } else if (count === 8 && price === null) {
            Alert.alert('Please set a price!');
        } else if (count === 9) {
            if (checkIn === null || checkOut === null) {
                Alert.alert('Please Enter correct dates!');
            } else {

                setShowFinishLoading(true);

                const asyncStorage = async () => {
                    try {
                        const response = await AsyncStorage.getItem('userInfo');
                        const hostID = JSON.parse(response)._id;

                        const formData = new FormData();

                        formData.append('hostID', hostID);
                        formData.append('placeType', placeType);
                        formData.append('spaceGiven', spaceGiven);
                        formData.append('location', JSON.stringify(location));
                        formData.append('locationName', locationName);
                        formData.append('guests', guests);
                        formData.append('bedrooms', bedrooms);
                        formData.append('beds', beds);
                        formData.append('bathrooms', bathrooms);
                        formData.append('wifi', wifi);
                        formData.append('tv', tv);
                        formData.append('washer', washer);
                        formData.append('parking', parking);
                        formData.append('airConditioning', airConditioning);
                        formData.append('pool', pool);
                        formData.append('firstAid', firstAid);
                        formData.append('fireExtinguisher', fireExtinguisher);
                        offerPhotos.assets.map((x) => {
                            const file = {
                                uri: x.uri,
                                type: x.mimeType,
                                name: x.name
                            };

                            formData.append('offerPhotos', file);
                        });
                        formData.append('title', title);
                        formData.append('description', description);
                        formData.append('price', price);
                        formData.append('checkIn', checkIn);
                        formData.append('checkOut', checkOut);

                        const offerApi = async () => {
                            try {
                                const response = await fetch('http://192.168.1.2:4000/offer', {
                                    method: 'POST',
                                    body: formData
                                });

                                const data = await response.json();
                                setShowFinishLoading(false);
                                
                                navigation.reset({
                                    index: 0,
                                    routes: [{name: 'Success'}]
                                });
                            } catch (err) {
                                console.error(err);
                            }
                        };

                        offerApi();
                    } catch (err) {
                        console.error(err);
                    }
                };

                asyncStorage();
            }
        } else {
            setCount (count + 1);
        }
    }

    return(
        <View style={{flex: 1}}>
            <ProgressBox />

            <View style={{height: height / 3.8}}>
                {count === 0 && (<Step1 />)}
                {count === 1 && (<Step2 />)}
                {count === 2 && (<Step3 />)}
                {count === 3 && (<Step4 />)}
                {count === 4 && (<Step5 />)}
                {count === 5 && (<Step6 />)}
                {count === 6 && (<Step7 />)}
                {count === 7 && (<Step8 />)}
                {count === 8 && (<Step9 />)}
                {count === 9 && (<Step10 />)}
            </View>

            <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {gap: 200}]}>
                {
                    count > 0 && (
                        <Pressable onPress={decrement} style={[{height: 70}, {width: 70}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 50}]}>
                            <Entypo name="chevron-small-left" size={27} color="black" />
                        </Pressable>
                    )
                }

                <Pressable onPress={increment} style={[{height: 70}, {width: 70}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 50}]}>
                    {
                        showFinishLoading ? (
                            <ActivityIndicator color='rgb(197, 41, 155)' />
                        ) : (
                            <Entypo name="chevron-small-right" size={27} color="black" />
                        )
                    }
                </Pressable>
            </View>

            <BottomNav />
        </View>
    )
};

export default AddOfferPage;