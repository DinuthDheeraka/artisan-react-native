import {ScrollView, StyleSheet, View} from "react-native";
import ArtistProfile from "../components/artist-profile/ArtistProfile";
import {useRoute} from "@react-navigation/native";

const ArtistProfileScreen = () => {

    const route = useRoute();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{alignItems: "center"}} style={{width: '100%'}}>
                <ArtistProfile artist={route.params}/>
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