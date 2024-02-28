import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ProductView from "../components/product-view/ProductView";
import {useRoute} from "@react-navigation/native";

const ProductViewScreen = () => {

    const route = useRoute();

    console.log(route.params.id)

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{alignItems: "center"}} style={{width: '100%'}}>
                <ProductView artworkId={route.params.id}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fffff0',
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProductViewScreen;