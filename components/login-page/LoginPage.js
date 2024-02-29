import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const LoginPage = () => {

    const navigate = useNavigation();

    return (
        <View style={{
            width: '100%',
            flexDirection: "column",
            alignItems: "center",
            marginTop: 0,
            backgroundColor: '#424242',
            height: 822,
            position: 'relative'
        }}>

            <Image
                style={{width: '100%', height: 460, objectFit: 'cover'}}
                src={'https://hudsonriverschoolartists.files.wordpress.com/2011/05/img_0051.jpg'}
            />

            <View style={{position: 'absolute', width: 300, top: 50, left: 10}}>
                <Text style={{fontSize: 35, letterSpacing:0,fontWeight: '600', color: '#000000'}}>The Artisan</Text>
                <Text style={{fontSize: 16, fontWeight: '400', color: '#0c0c0c'}}>Where Every Stroke Tells a Story.</Text>
            </View>

            <View style={{
                backgroundColor: "#efefef",
                flexDirection: "column",
                alignItems: "center",
                height: 361,
                width: '100%',
                gap: 10,
            }}>

                <View style={{width: 380, paddingTop: 20, paddingBottom: 25, flexDirection: "row"}}>
                    <Text style={{fontSize: 24, letterSpacing: 0, color: "#000000", fontWeight: '500'}}>Login</Text>
                </View>

                <TextInput style={{
                    width: 380,
                    height: 50,
                    borderRadius: 8,
                    paddingLeft: 10,
                    fontSize: 16,
                    color: 'black',
                    backgroundColor: 'rgb(255,255,255)',
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                    elevation: 1,
                    // Custom shadow for the top
                    borderTopWidth: 1, // Adjust the width of the top border to control the shadow effect
                    borderColor: 'rgba(248,248,248,0.2)', // Adjust the color and opacity of the top border to control the shadow effect
                }}
                           placeholder={'Email'}/>


                <TextInput
                    secureTextEntry={true}
                    style={{
                        width: 380,
                        height: 50,
                        marginTop: 5,
                        borderRadius: 8,
                        paddingLeft: 10,
                        fontSize: 16,
                        color: 'black',
                        backgroundColor: 'rgb(255,255,255)',
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                        elevation: 1,
                        // Custom shadow for the top
                        borderTopWidth: 1, // Adjust the width of the top border to control the shadow effect
                        borderColor: 'rgba(248,248,248,0.2)', // Adjust the color and opacity of the top border to control the shadow effect
                    }}
                    placeholder={'Password'}/>

                <TouchableOpacity
                    onPress={() => {
                        navigate.navigate("HOME");
                    }}
                    style={{
                        marginTop: 48,
                        width: 380,
                        height: 50,
                        borderRadius: 8,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: '#0c0c0c'
                    }}>
                    <Text style={{color: '#ffffff', letterSpacing: 1, fontWeight: "400", fontSize: 17}}>Login</Text>
                </TouchableOpacity>
                {/*<CustomButton width={380} height={60} title={'Login'}/>*/}

                <View style={{width: 380, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Text style={{fontSize: 15, fontWeight: '400'}}>Don't have an account? </Text>
                    <Text style={{fontSize: 15, fontWeight: '400', color: '#ea8500'}}>Sign
                        up</Text>
                </View>

            </View>

        </View>);
}

export default LoginPage;