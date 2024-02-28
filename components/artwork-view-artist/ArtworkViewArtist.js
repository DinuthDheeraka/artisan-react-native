import {Image, Linking, StyleSheet, Text, View} from "react-native";
import CustomButton from "../custom-button/CustomButton";
import {useNavigation} from "@react-navigation/native";

const ArtworkViewArtist = ({artist, artwork}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.artworkViewArtistContainer}>

            <View style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 20
            }}>
                <View style={{width: "30%"}}>
                    <Image
                        style={{
                            borderRadius: 100,
                            borderWidth: 1,
                            borderColor: '#d2d2d2',
                            height: 100,
                            objectFit: 'cover',
                            width: 100
                        }}
                        src={artist.image}></Image>
                </View>

            </View>

            <View style={{flexDirection: "column", gap: 4, width: "100%"}}>
                <Text style={{paddingTop: 0, fontSize: 18, fontWeight: '500'}}>{artist.name}</Text>
                <Text style={{fontSize: 16}}>{artist.about}</Text>
            </View>

            <View style={{display: "flex", gap: 6, flexDirection: "row", width: '100%'}}>

                <CustomButton
                    onPress={() => {
                        Linking.openURL(`mailto:${artist.email}?subject=Hi ${artist.name}! just met you from the artisan`)
                    }}
                    title={'Send email'}
                    height={48}
                    bgColor={'transparent'}
                    borderColor={'black'}
                    color={'black'}
                    width={'100%'}/>

                <CustomButton onPress={() => {
                    navigation.navigate("ARTIST PROFILE", artist);
                }} title={'View profile'} height={48} width={'100%'}/>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    artworkViewArtistContainer: {
        width: '92%',
        flexDirection: "column",
        gap: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffff',
        padding: 15,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        borderRadius: 8
    }
});

export default ArtworkViewArtist;