import {Image, Text, View} from "react-native";

const ProfileHeader = () => {

    return (
        <View style={{
            flexDirection: "row",
            height: 74,
            width: "100%",
            // borderWidth:1,
            // borderColor:'black'
        }}>

            {/*< View style={{*/}
            {/*    // borderWidth: 1,*/}
            {/*    flexDirection: "row",*/}
            {/*    justifyContent: "flex-start",*/}
            {/*    alignItems:"center",*/}
            {/*    width: "50%",*/}
            {/*    height: "100%",*/}
            {/*    // borderColor: 'black'*/}
            {/*}}>*/}
            {/*    <Image style={{*/}
            {/*        height: 50,*/}
            {/*        width: 185,*/}
            {/*        borderRadius: 100,*/}
            {/*        // borderBottomRightRadius:100,*/}
            {/*        // borderTopLeftRadius:100,*/}
            {/*        backgroundColor:'#ffffff',*/}
            {/*        objectFit: 'cover',*/}
            {/*        borderWidth: 1,*/}
            {/*        borderColor: '#eeeeee'*/}
            {/*    }} source={logo}/>*/}
            {/*</View>*/}

            < View style={{
                // borderWidth: 1,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "start",
                width: "80%",
                height: "100%",
                // borderColor: 'black',
                paddingTop: 8,
                paddingLeft: 0,
                gap: 1
            }}>
                <Text style={{letterSpacing:0.5,fontSize: 18, fontWeight: "300", color: '#626262'}}>Good Morning</Text>
                <Text style={{letterSpacing: 0.5, fontSize: 22, color: '#252525', fontWeight: "700"}}>Dinuth
                    Dheeraka</Text>
            </View>


            < View style={{
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "20%",
                height: "100%",
                // borderColor: 'black'
            }}>
                <View style={{
                    backgroundColor: '#ffffff', borderRadius: 8, borderColor: '#e7e7e7', borderWidth: 1,
                    width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', padding: 8
                }}>
                    <Image style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: 8,
                        objectFit: 'cover',
                    }}
                           src={'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708041600&semt=ais'}/>
                </View>
            </View>

        </View>);

}

export default ProfileHeader;


//
