import { View, StyleSheet } from "react-native";
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
        padding: 30
    }
});

export default MainPage;