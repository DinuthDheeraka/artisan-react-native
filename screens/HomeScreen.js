import {ScrollView, StyleSheet, View} from "react-native";
import MainHeader from "../components/main-header/MainHeader";
import HomeFilterBar from "../components/home-filter-bar/HomeFilterBar";
import ProductCardContainer from "../components/product-card-container/ProductCardContainer";

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{alignItems: "center"}} style={{width: '100%'}}>
                <MainHeader/>
                <HomeFilterBar/>
                <ProductCardContainer artistId={undefined}/>
                <View style={{height: 20, width: '100%'}}></View>
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

export default HomeScreen;