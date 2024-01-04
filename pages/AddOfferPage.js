import { View, Text, Pressable, Dimensions, Alert } from 'react-native';
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

function AddOfferPage() {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const [count, setCount] = useState(0);

    const {placeType, spaceGiven, location, locationName} = useContext(data);

    const decrement = () => {
        if (count <= 0) {
            return;
        } else {
            setCount(count - 1);
        }
    };

    const increment = () => {
        if (count >= 9) {
            navigation.navigate('Success');
            return;
        } else {
            if (count === 0 && placeType === null) {
                Alert.alert('Please choose one!');
            } else if (count === 1 && spaceGiven === null) {
                Alert.alert('Please choose one!');
            } else if (count === 2 && location === null) {
                Alert.alert("Enter your house's location!");
            } else {
                setCount(count + 1);
            }
        }
    }

    // useEffect(() => {
    //     if (count === 0) {
    //         if (placeType === null) {
    //             setCount(0);
    //             Alert.alert('Please choose one!');
    //         }
    //     }
    // });

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
                    <Entypo name="chevron-small-right" size={27} color="black" />
                </Pressable>
            </View>

            <BottomNav />
        </View>
    )
};

export default AddOfferPage;