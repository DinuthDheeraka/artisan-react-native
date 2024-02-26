import {Image, StyleSheet, Text, View} from "react-native";
import ProductCardContainer from "../product-card-container/ProductCardContainer";

const ArtistProfile = () => {

    return (
        <View style={{backgroundColor: undefined, marginTop: 20, alignItems: 'center', width: '100%'}}>
            <View style={styles.card}>
                <Image style={{width: '100%', borderRadius: 8, height: 200}}
                       src={'https://images.unsplash.com/photo-1584432743501-7d5c27a39189?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmljZSUyMHZpZXd8ZW58MHx8MHx8fDA%3D'}/>

                <Image style={{
                    position: "absolute",
                    margin: "auto",
                    top: 160,
                    left: 135,
                    width: 100,
                    objectFit: "cover",
                    borderRadius: 100,
                    height: 100
                }}
                       src={'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg'}/>

                <View style={{width: '100%', paddingTop: 50, gap: 2, alignItems: 'center'}}>
                    <Text style={{paddingTop: 0, fontSize: 18, fontWeight: "600"}}>Dinuth Dheeraka</Text>
                    <Text style={{fontWeight: '500'}}>• Artist (Drawing, Painting) • Born 1964 •</Text>
                </View>

                <View style={{paddingTop: 10, flexDirection: "column", gap: 5}}>
                    <Text style={{fontWeight: '500', fontSize: 16}}>Biography</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, assumenda explicabo
                        fugit minus nostrum nulla quaerat recusandae ut vero.
                        Assumenda atque culpa dicta dolorem enim odio quia ratione sed voluptate.</Text>
                </View>
            </View>

            <ProductCardContainer/>
        </View>
    );
}

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
        height: 460,
        position: "relative",
        justifyContent: 'flex-start',
        alignItems: 'center',
        // Custom shadow for the top
        borderTopWidth: 1, // Adjust the width of the top border to control the shadow effect
        borderColor: 'rgba(229,229,229,0.2)', // Adjust the color and opacity of the top border to control the shadow effect
    }
});
export default ArtistProfile;