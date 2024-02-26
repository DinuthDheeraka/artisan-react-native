import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ProductView from "../components/product-view/ProductView";

const ProductViewScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{alignItems: "center"}} style={{width: '100%'}}>
                <ProductView/>
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