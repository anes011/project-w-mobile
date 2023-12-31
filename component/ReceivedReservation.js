import { View, Text, Dimensions, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const ReceivedReservation = () => {

    const {width, height} = Dimensions.get('window');

  return (
    <View>
        <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {height: height / 8}, {backgroundColor: 'rgb(197, 41, 155)'}]}>
            <Text style={[{fontFamily: 'Poppins-Bold'}, {color: '#fff'}]}>ReceivedReservations</Text>
            <Ionicons name="receipt-outline" size={24} color="#fff" />
        </View>
        
        <View style={[{padding: 20}, {height: height / 1.3}]}>
            <ScrollView>
                <View style={[{borderWidth: 2}, {height: height / 3}, {borderRadius: 30}, {backgroundColor: '#000'}, {marginBottom: 30}, {padding: 20}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="time" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>19 February 2020</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Image style={[{width: 40}, {height: 40}, {borderRadius: 100 / 2}]} source={{uri: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'}} />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Person name</Text>
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Bold'}, {fontSize: 40}]}>7000 / DA</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="house-siding" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Reservation Name</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {backgroundColor: '#fff'}, {padding: 7}, {borderRadius: 20}, {paddingHorizontal: 30}]}>
                            <AntDesign name="close" size={24} color="#000" />
                            <Text style={[{color: '#000'}, {fontFamily: 'Poppins-Medium'}]}>Reject</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {backgroundColor: '#fff'}, {padding: 7}, {borderRadius: 20}, {paddingHorizontal: 30}]}>
                            <Feather name="check" size={24} color="#000" />
                            <Text style={[{color: '#000'}, {fontFamily: 'Poppins-Medium'}]}>Accept</Text>
                        </View>
                    </View>
                </View>

                <View style={[{borderWidth: 2}, {height: height / 3}, {borderRadius: 30}, {backgroundColor: '#000'}, {marginBottom: 30}, {padding: 20}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="time" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>19 February 2020</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Image style={[{width: 40}, {height: 40}, {borderRadius: 100 / 2}]} source={{uri: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'}} />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Person name</Text>
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Bold'}, {fontSize: 40}]}>7000 / DA</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="house-siding" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Reservation Name</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {backgroundColor: '#fff'}, {padding: 7}, {borderRadius: 20}, {paddingHorizontal: 30}]}>
                            <AntDesign name="close" size={24} color="#000" />
                            <Text style={[{color: '#000'}, {fontFamily: 'Poppins-Medium'}]}>Reject</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {backgroundColor: '#fff'}, {padding: 7}, {borderRadius: 20}, {paddingHorizontal: 30}]}>
                            <Feather name="check" size={24} color="#000" />
                            <Text style={[{color: '#000'}, {fontFamily: 'Poppins-Medium'}]}>Accept</Text>
                        </View>
                    </View>
                </View>

                <View style={[{borderWidth: 2}, {height: height / 3}, {borderRadius: 30}, {backgroundColor: '#000'}, {marginBottom: 30}, {padding: 20}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="time" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>19 February 2020</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Image style={[{width: 40}, {height: 40}, {borderRadius: 100 / 2}]} source={{uri: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'}} />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Person name</Text>
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Bold'}, {fontSize: 40}]}>7000 / DA</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="house-siding" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Reservation Name</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {backgroundColor: '#fff'}, {padding: 7}, {borderRadius: 20}, {paddingHorizontal: 30}]}>
                            <AntDesign name="close" size={24} color="#000" />
                            <Text style={[{color: '#000'}, {fontFamily: 'Poppins-Medium'}]}>Reject</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {backgroundColor: '#fff'}, {padding: 7}, {borderRadius: 20}, {paddingHorizontal: 30}]}>
                            <Feather name="check" size={24} color="#000" />
                            <Text style={[{color: '#000'}, {fontFamily: 'Poppins-Medium'}]}>Accept</Text>
                        </View>
                    </View>
                </View>

                <View style={[{borderWidth: 2}, {height: height / 3}, {borderRadius: 30}, {backgroundColor: '#000'}, {marginBottom: 30}, {padding: 20}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="time" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>19 February 2020</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Image style={[{width: 40}, {height: 40}, {borderRadius: 100 / 2}]} source={{uri: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'}} />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Person name</Text>
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Bold'}, {fontSize: 40}]}>7000 / DA</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="house-siding" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Reservation Name</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {backgroundColor: '#fff'}, {padding: 7}, {borderRadius: 20}, {paddingHorizontal: 30}]}>
                            <AntDesign name="close" size={24} color="#000" />
                            <Text style={[{color: '#000'}, {fontFamily: 'Poppins-Medium'}]}>Reject</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {backgroundColor: '#fff'}, {padding: 7}, {borderRadius: 20}, {paddingHorizontal: 30}]}>
                            <Feather name="check" size={24} color="#000" />
                            <Text style={[{color: '#000'}, {fontFamily: 'Poppins-Medium'}]}>Accept</Text>
                        </View>
                    </View>
                </View>

                <View style={[{borderWidth: 2}, {height: height / 3}, {borderRadius: 30}, {backgroundColor: '#000'}, {marginBottom: 30}, {padding: 20}, {justifyContent: 'space-between'}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="time" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>19 February 2020</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Image style={[{width: 40}, {height: 40}, {borderRadius: 100 / 2}]} source={{uri: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'}} />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Person name</Text>
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Bold'}, {fontSize: 40}]}>7000 / DA</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <MaterialIcons name="house-siding" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Poppins-Regular'}]}>Reservation Name</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                        <Pressable style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {backgroundColor: '#fff'}, {padding: 7}, {borderRadius: 20}, {paddingHorizontal: 30}]}>
                            <AntDesign name="close" size={24} color="#000" />
                            <Text style={[{color: '#000'}, {fontFamily: 'Poppins-Medium'}]}>Reject</Text>
                        </Pressable>

                        <Pressable style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {backgroundColor: '#fff'}, {padding: 7}, {borderRadius: 20}, {paddingHorizontal: 30}]}>
                            <Feather name="check" size={24} color="#000" />
                            <Text style={[{color: '#000'}, {fontFamily: 'Poppins-Medium'}]}>Accept</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
  )
};

export default ReceivedReservation;