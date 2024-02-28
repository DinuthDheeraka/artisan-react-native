import {Image, Linking, StyleSheet, Text, View} from "react-native";
import CustomButton from "../custom-button/CustomButton";
import ArtworkViewArtist from "../artwork-view-artist/ArtworkViewArtist";
import {artists, artworks} from "../../db/db";

const ProductView = ({artworkId}) => {

    const artwork = artworks[artworkId - 1];
    const artist = artists[artwork.artistId - 1];

    return (
        <View style={styles.productViewContainer}>

            <View style={styles.productTitleCardContainer}>
                <View style={{flexDirection: "column", gap: 2}}>
                    <Text style={{fontSize: 18, fontWeight: "700"}}>{artwork.title}</Text>
                    <Text style={{fontSize: 15}}>{artwork.type} by {artist.name}</Text>
                </View>
                <Image
                    style={{width: "100%", borderRadius: 8, height: 500}}
                    src={artwork.image}/>
                <View style={{flexDirection: "column", gap: 5}}>
                    <Text style={{fontSize: 15}}>{artwork.medium}</Text>
                    <Text style={{fontSize: 15}}>{artwork.size}</Text>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>LKR {artwork.price.toFixed(2)}</Text>
                </View>

                <CustomButton
                    onPress={() => {
                        Linking.openURL(`mailto:${artist.email}?subject=Enquire about ${artwork.title}`)
                    }}
                    title={'Enquire'}
                    height={48}
                    width={'100%'}/>

                <View style={{flexDirection: "column", gap: 4}}>
                    <Text style={{fontSize: 18, fontWeight: "600"}}>Description</Text>
                    <Text style={{fontSize: 16}}>
                        {artwork.about}
                    </Text>
                </View>

            </View>

            <ArtworkViewArtist artist={artist} artwork={artwork}/>

            <View style={{width: '100%', height: 10}}>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    productViewContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
        gap: 10,
        // height: 60,
        width: '100%',
        // borderWidth: 1,
        // borderColor: undefined
    },
    productTitleCardContainer: {
        borderWidth: 1,
        flexDirection: "column",
        gap: 15,
        // borderColor: '#c2c2c2',
        width: '92%',
        padding: 15,
        // height: 20,
        borderRadius: 8,
        backgroundColor: "#ffffff",

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        // Custom shadow for the top
        borderTopWidth: 1, // Adjust the width of the top border to control the shadow effect
        borderColor: 'rgba(229,229,229,0.2)', // Adjust the color and opacity of the top border to control the shadow effect
    },

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

export default ProductView;