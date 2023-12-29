import { View, Text, Dimensions, Image } from 'react-native';

const ProgressBox = () => {

  const { width, height } = Dimensions.get('window');

  return (
    <View>
      <View style={[{height: height / 2}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {backgroundColor: 'rgb(197, 41, 155)'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 50}, {elevation: 50}]}>
        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 40}]}>
          <View style={[{height: 100}, {width: 100}, {borderRadius: 100 / 2}, {overflow: 'hidden'}]}>
            <Image style={{flex: 1}} source={{uri: 'https://cdn.dribbble.com/users/127211/screenshots/1635050/media/1ccc4638dc30b966cb5d8d26abf861a3.gif'}} />
          </View>
          <Text style={[{fontFamily: 'Poppins-Bold'}, {color: '#fff'}, {fontSize: 20}]}>10%</Text>
        </View>
        <Text style={[{fontFamily: 'Poppins-Medium'}, {color: '#fff'}, {fontSize: 15}]}>Take your time and enjoy!</Text>
      </View>
    </View>
  )
};

export default ProgressBox;