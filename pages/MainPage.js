import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Nav from "../component/Nav";
import Slider from "../component/Slider";
import Discover from "../component/Discover";
import BottomNav from "../component/BottomNav";

function MainPage() {
    return(
        <View style={styles.mainPage}>
            <Nav />
            <Slider />
            <Discover />
            <BottomNav />
        </View>
    )
};

const styles = StyleSheet.create({
    mainPage: {
        paddingHorizontal: 10,
        flex: 1,
        borderWidth: 2
    }
});

export default MainPage;