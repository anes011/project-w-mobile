import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

function Slider() {

    const { width, height } = Dimensions.get('window');

    return(
        <ScrollView style={[styles.slider, {height: height / 4}]} horizontal>
            <Image style={[styles.sliderImage, {width: width / 1.2}]} source={{uri: 'https://www.luxxu.net/blog/wp-content/uploads/2022/06/LIVING_1-1-scaled.jpg'}} />
            <Image style={[styles.sliderImage, {width: width / 1.2}]} source={{uri: 'https://www.ministryofvillas.com/wp-content/uploads/2019/04/koh-samui-limesamuivillas-villazest-01.jpg'}} />
            <Image style={[styles.sliderImage, {width: width / 1.2}]} source={{uri: 'https://i.pinimg.com/originals/a8/e7/06/a8e7064ac87b25c9197dca73dc345610.jpg'}} />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    slider: {
        marginTop: 20,
        borderRadius: 20
    },
    sliderImage: {
        borderRadius: 20,
        marginRight: 10
    }
});

export default Slider;