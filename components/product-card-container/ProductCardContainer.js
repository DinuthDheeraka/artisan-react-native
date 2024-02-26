import {ScrollView, StyleSheet, Text, View} from "react-native";
import ProductCard from "../product-card/ProductCard";

const ProductCardContainer = () => {

    return (
        <ScrollView style={styles.productCardContainer}>
            <View style={{width: '100%', alignItems: 'center', gap: 15}}>
                {/*<View style={{*/}
                {/*    flexDirection: 'row',*/}
                {/*    width: '92%',*/}
                {/*    // borderWidth: 1,*/}
                {/*    // borderColor: '#d2d2d2',*/}
                {/*    // backgroundColor: '#ffffff',*/}
                {/*    padding: 10,*/}
                {/*    alignItems: 'flex-start',*/}
                {/*    justifyContent: 'flex-start'*/}
                {/*}}>*/}
                {/*    <Text style={{fontWeight: '500', fontSize: 16}}>New Artworks</Text>*/}
                {/*</View>*/}
                <ProductCard
                    image={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'}
                    title={'Monalisa'} artist={'Dinuth Dheeraka'} price={12000}
                    description={'Sculpture - Wire | 36x20 cm'}/>
                <ProductCard
                    image={'https://cdn2.oceansbridge.com/2017/08/01093520/Windswept-John-William-Waterhouse-Oil-Painting-1.jpg'}
                    title={'Monalisa'} artist={'Dinuth Dheeraka'} price={12000}
                    description={'Sculpture - Wire | 36x20 cm'}/>
                <ProductCard
                    image={'https://posh-spaces.co.za/cdn/shop/files/rBVaEmLOie-AEhAQAAGNeMi1lEA383_bc22de8f-5a80-46ba-a40e-bbbc1f7a599e.webp?v=1694326695'}
                    title={'Monalisa'} artist={'Dinuth Dheeraka'} price={12000}
                    description={'Sculpture - Wire | 36x20 cm'}/>
                <ProductCard
                    image={'https://www.designboom.com/wp-content/uploads/2023/12/schiaparelli-chanel-celebrated-new-bronze-work-exhibition-cromwell-place-designboom-01.jpg'}
                    title={'Monalisa'} artist={'Dinuth Dheeraka'} price={12000}
                    description={'Sculpture - Wire | 36x20 cm'}/>
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