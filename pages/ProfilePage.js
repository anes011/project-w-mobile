import { View, Text, StyleSheet } from 'react-native';
import ProfileTopSection from '../component/ProfileTopSection';
import ProfileOptions from '../component/ProfileOptions';
import BottomNav from '../component/BottomNav';

function ProfilePage() {
    return(
        <View style={styles.profilePage}>
            <ProfileTopSection />
            <ProfileOptions />
            <BottomNav />
        </View>
    )
};

const styles = StyleSheet.create({
    profilePage: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40
    }
});

export default ProfilePage;