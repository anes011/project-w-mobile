import { View, Text, ImageBackground } from 'react-native';
import Signing from '../component/Signing';

const SigningPage = () => {
  return (
    <View style={[{flex: 1}]}>
      <ImageBackground style={{flex: 1}} source={require('../assets/Images&logos/2150799703.jpg')}>
        <Signing />
      </ImageBackground>
    </View>
  )
};

export default SigningPage;