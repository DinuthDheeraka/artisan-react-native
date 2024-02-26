import {Image, StyleSheet, Text, View} from "react-native";
import CustomButton from "../custom-button/CustomButton";
import ArtworkViewArtist from "../artwork-view-artist/ArtworkViewArtist";

const ProductView = () => {

    return (
        <View style={styles.productViewContainer}>

            <View style={styles.productTitleCardContainer}>
                <View style={{flexDirection: "column", gap: 2}}>
                    <Text style={{fontSize: 18, fontWeight: "700"}}>MONALISA (2023)</Text>
                    <Text style={{fontSize: 15}}>Drawing by Dinuth Dheeraka</Text>
                </View>
                <Image
                    style={{width: "100%", borderRadius: 8, height: 500}}
                    src={'https://cdn2.oceansbridge.com/2017/08/01093520/Windswept-John-William-Waterhouse-Oil-Painting-1.jpg'}/>
                <View style={{flexDirection: "column", gap: 5}}>
                    <Text style={{fontSize: 15}}>Drawing - Pastel</Text>
                    <Text style={{fontSize: 15}}>100 x 200 cm</Text>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>LKR 1200.00</Text>
                </View>

                <CustomButton title={'Enquire'} height={48} width={'100%'}/>

                <View style={{flexDirection: "column", gap: 4}}>
                    <Text style={{fontSize: 18, fontWeight: "600"}}>Description</Text>
                    <Text style={{fontSize: 16}}>
                        "Harmony in Chaos" is a mesmerizing abstract artwork that captivates
                        the viewer with its intricate dance of colors and shapes. The artist
                        skillfully blends vibrant hues of blues, purples, and gold, creating a
                        dynamic composition that exudes energy and movement.
                    </Text>
                </View>

            </View>

            <ArtworkViewArtist/>

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