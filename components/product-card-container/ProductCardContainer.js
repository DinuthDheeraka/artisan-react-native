import {ScrollView, StyleSheet, View} from "react-native";
import ProductCard from "../product-card/ProductCard";
import {artworks} from "../../db/db"

const ProductCardContainer = ({artistId}) => {

    console.log(`artistId : ${artistId}`);
    console.log('---------------------------------------');

    let artworkList = artworks;

    if (artistId !== undefined) {
        artworkList = [];
        for (let i = 0; i < artworks.length; i++) {
            if (artworks[i].artistId === artistId) {
                artworkList.push(artworks[i]);
            }
        }
    }

    return (
        <ScrollView style={styles.productCardContainer}>
            <View style={{width: '100%', alignItems: 'center', gap: 15}}>
                {
                    artworkList.map(artwork => {
                        return (
                            <ProductCard
                                key={artwork.id}
                                id={artwork.id}
                                image={artwork.image}
                                title={artwork.title} artist={artwork.artist} price={artwork.price}
                                description={'Sculpture - Wire | 36x20 cm'}/>
                        );
                    })
                }
            </View>
        </ScrollView>);
}

const styles = StyleSheet.create({
    productCardContainer: {
        width: '100%',
        marginTop: 10,
        paddingTop: 5,
    }
});

export default ProductCardContainer;