import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import Nav from "../component/Nav";
import Slider from "../component/Slider";
import Discover from "../component/Discover";
import BottomNav from "../component/BottomNav";

function MainPage() {
    return(
        <ScrollView style={styles.mainPage}>
            <StatusBar style='auto' />
            <Nav />
            <Slider />
            <Discover />
            <BottomNav />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    mainPage: {
        paddingHorizontal: 10,
        flex: 1
    }
});

export default MainPage;