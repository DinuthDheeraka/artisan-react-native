import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const ProductCard = ({image, artist, title, price, description}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.imageTouchable} onPress={() => {
                navigation.navigate("ABOUT THE ARTWORK");
            }}>
                <Image src={image} style={styles.image}/>
            </TouchableOpacity>
            <View style={styles.descriptionArea}>
                <Text style={styles.artist}>{artist}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>${price.toFixed(2)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '92%',
        flexDirection: 'column',
        borderRadius: 8,
        backgroundColor: '#fff',
        gap: 6,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // Custom shadow for the top
        borderTopWidth: 1, // Adjust the width of the top border to control the shadow effect
        borderColor: 'rgba(229,229,229,0.2)', // Adjust the color and opacity of the top border to control the shadow effect
    },
    descriptionArea: {
        display: 'flex',
        gap: 3,
        width: '100%',
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 2
    },
    image: {
        borderRadius: 6,
        width: '100%',
        height: 500,
        objectFit: 'cover'
    },
    imageTouchable: {
        borderRadius: 6,
        width: '100%',
        height: 500,
    },
    artist: {
        color: 'black',
        fontWeight: '500',
        fontSize: 17
    },
    price: {
        color: 'black',
        fontWeight: '700',
        fontSize: 18,
        marginTop: 3
    },
    description: {
        fontSize: 14
    },
    title: {
        marginTop: 4,
        color: 'black',
    }
});

export default ProductCard;
