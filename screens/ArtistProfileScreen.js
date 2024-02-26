import {ScrollView, StyleSheet, View} from "react-native";
import ArtistProfile from "../components/artist-profile/ArtistProfile";

const ArtistProfileScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{alignItems: "center"}} style={{width: '100%'}}>
                <ArtistProfile/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fffff0',
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ArtistProfileScreen;