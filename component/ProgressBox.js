import { View, Text, Dimensions, Image } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import data from '../Context';
import { useContext, useEffect, useState } from 'react';

const ProgressBox = () => {

  const { count } = useContext(data);

  const { width, height } = Dimensions.get('window');

  const [guideText, setGuideText] = useState(null);

  useEffect(() => {
    if (count === 0) {
      setGuideText('What kind of place do you have?');
    } else if (count === 1) {
      setGuideText('How much space do you want to provide?');
    } else if (count === 2) {
      setGuideText('Where is your house exactly located?');
    } else if (count === 3) {
      setGuideText('Customize these options to match your house!');
    } else if (count === 4) {
      setGuideText('Do you posses any of these amenities?');
    } else if (count === 5) {
      setGuideText('Select at least 3 nice photos of your house!');
    } else if (count === 6) {
      setGuideText("Provide a title with at least 4 letters, and don't describe. Because the next step is the description");
    } else if (count === 7) {
      setGuideText('Now, you can feel free to describe your house or add any other information you feel is necessary!');
    } else if (count === 8) {
      setGuideText("How much do want to rent your house? try to balance the price so that you don't lose competition with others (Not too cheap and not too expensinve)!");
    } else if (count === 9) {
      setGuideText('Here you can add a check-in date (when do you expect the guest to arrive?). And a check-out date (when should he leave?)');
    }
  });

  return (
    <View style={[{height: height / 2}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {overflow: 'hidden'}, {backgroundColor: 'rgb(197, 41, 155)'}, {elevation: 50}]}>
      <View style={[{flex: 1}, {overflow: 'hidden'}]}>
        <Video style={[{flex: 1}]} source={{uri: 'https://res.cloudinary.com/dmvjkyphz/video/upload/v1704475637/Untitled_design_eqrtyi.mp4'}} resizeMode={ResizeMode.STRETCH} shouldPlay isLooping />
      </View>

      <View style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {paddingHorizontal: 30}]}>
        {
          guideText !== null && (
            <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}, {fontSize: 20}]}>{guideText}</Text>
          )
        }
      </View>
    </View>
  )
};

export default ProgressBox;