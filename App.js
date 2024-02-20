import {ScrollView, StyleSheet, View} from 'react-native';
import ProductCardContainer from "./components/product-card-container/ProductCardContainer";
import HomeFilterBar from "./components/home-filter-bar/HomeFilterBar";
import MainHeader from "./components/main-header/MainHeader";

export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{alignItems: "center"}} style={{width: '100%'}}>
                <MainHeader/>
                <HomeFilterBar/>
                <ProductCardContainer/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffff0',
        // backgroundColor: '#fff9f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
