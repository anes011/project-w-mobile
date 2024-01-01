import { View, Text, Dimensions, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const Favourite = () => {

    const { width, height } = Dimensions.get('window');

  return (
    <View>
        <View style={[{height: height / 8}, {backgroundColor: 'rgb(197, 41, 155)'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexDirection: 'row'}, {gap: 30}]}>
            <Text style={[{fontFamily: 'Poppins-Bold'}, {color: '#fff'}]}>Favourites</Text>
            <MaterialCommunityIcons name="cards-heart-outline" size={24} color="#fff" />
        </View>

        <View style={[{height: height / 1.3}, {padding: 10}]}>
            <ScrollView>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {borderRadius: 30}, {overflow: 'hidden'}, {paddingRight: 20}, {backgroundColor: '#000'}, {marginBottom: 20}]}>
                    <Image style={[{width: width / 3}, {height: height / 6}]} source={{uri: 'https://www.chandrabalivillas.com/wp-content/uploads/2014/11/5.-Pool-Villa-Living.jpg'}} />
                    <View style={{gap: 10}}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Name</Text>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Location</Text>
                    </View>
                    <View style={[{alignItems: 'center'}, {gap: 50}]}>
                        <Foundation name="heart" size={30} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>7000 / DA</Text>
                    </View>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {borderRadius: 30}, {overflow: 'hidden'}, {paddingRight: 20}, {backgroundColor: '#000'}, {marginBottom: 20}]}>
                    <Image style={[{width: width / 3}, {height: height / 6}]} source={{uri: 'https://www.chandrabalivillas.com/wp-content/uploads/2014/11/5.-Pool-Villa-Living.jpg'}} />
                    <View style={{gap: 10}}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Name</Text>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Location</Text>
                    </View>
                    <View style={[{alignItems: 'center'}, {gap: 50}]}>
                        <Foundation name="heart" size={30} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>7000 / DA</Text>
                    </View>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {borderRadius: 30}, {overflow: 'hidden'}, {paddingRight: 20}, {backgroundColor: '#000'}, {marginBottom: 20}]}>
                    <Image style={[{width: width / 3}, {height: height / 6}]} source={{uri: 'https://www.chandrabalivillas.com/wp-content/uploads/2014/11/5.-Pool-Villa-Living.jpg'}} />
                    <View style={{gap: 10}}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Name</Text>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Location</Text>
                    </View>
                    <View style={[{alignItems: 'center'}, {gap: 50}]}>
                        <Foundation name="heart" size={30} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>7000 / DA</Text>
                    </View>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {borderRadius: 30}, {overflow: 'hidden'}, {paddingRight: 20}, {backgroundColor: '#000'}, {marginBottom: 20}]}>
                    <Image style={[{width: width / 3}, {height: height / 6}]} source={{uri: 'https://www.chandrabalivillas.com/wp-content/uploads/2014/11/5.-Pool-Villa-Living.jpg'}} />
                    <View style={{gap: 10}}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Name</Text>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Location</Text>
                    </View>
                    <View style={[{alignItems: 'center'}, {gap: 50}]}>
                        <Foundation name="heart" size={30} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>7000 / DA</Text>
                    </View>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {borderRadius: 30}, {overflow: 'hidden'}, {paddingRight: 20}, {backgroundColor: '#000'}, {marginBottom: 20}]}>
                    <Image style={[{width: width / 3}, {height: height / 6}]} source={{uri: 'https://www.chandrabalivillas.com/wp-content/uploads/2014/11/5.-Pool-Villa-Living.jpg'}} />
                    <View style={{gap: 10}}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Name</Text>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>Location</Text>
                    </View>
                    <View style={[{alignItems: 'center'}, {gap: 50}]}>
                        <Foundation name="heart" size={30} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Medium'}]}>7000 / DA</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
  )
}

export default Favourite