import { View, Text, Pressable, Dimensions } from 'react-native';
import ProgressBox from '../component/ProgressBox';
import { Entypo } from '@expo/vector-icons';
import BottomNav from '../component/BottomNav';
import { useState } from 'react';
import Step1 from '../component/Step1';
import Step2 from '../component/Step2';
import Step3 from '../component/Step3';
import Step4 from '../component/Step4';
import Step5 from '../component/Step5';
import Step6 from '../component/Step6';
import Step7 from '../component/Step7';
import Step8 from '../component/Step8';
import Step9 from '../component/Step9';

function AddOfferPage() {

    const { width, height } = Dimensions.get('window');

    const [count, setCount] = useState(0);

    const decrement = () => {
        if (count <= 0) {
            return;
        } else {
            setCount(count - 1);
        }
    };

    const increment = () => {
        setCount(count + 1);
    }

    return(
        <View style={{flex: 1}}>
            <ProgressBox />

            <View style={{height: height / 3.8}}>
                {/* <Step1 /> */}
                {/* <Step2 /> */}
                {/* <Step3 /> */}
                {/* <Step4 /> */}
                {/* <Step5 /> */}
                {/* <Step6 /> */}
                {/* <Step7 /> */}
                {/* <Step8 /> */}
                <Step9 />
            </View>

            <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {gap: 200}]}>
                <Pressable onPress={decrement} style={[{height: 70}, {width: 70}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 50}]}>
                    <Entypo name="chevron-small-left" size={27} color="black" />
                </Pressable>

                <Pressable onPress={increment} style={[{height: 70}, {width: 70}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 50}]}>
                    <Entypo name="chevron-small-right" size={27} color="black" />
                </Pressable>
            </View>

            <BottomNav />
        </View>
    )
};

export default AddOfferPage;