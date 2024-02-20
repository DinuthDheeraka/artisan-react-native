import {Image, TextInput, View} from "react-native";
import menuIcon from "../../assets/7777.png";

const HomeFilterBar = () => {
    return (
        <View style={{
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 10,
            flexDirection: "row",
            height: 44,
            width: '92%',
            gap: 6,
            // borderWidth: 1,
            // borderColor: 'red'
        }}>
            <TextInput style={{
                width: '86.3%',
                height: '100%',
                // borderColor: 'gray',
                // borderWidth: 1,
                borderRadius: 8,
                paddingLeft: 10,
                // marginTop: 10,
                // marginBottom: 10,
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
                       placeholder={'Search'}/>
            <View
                style={{
                    padding: 8,
                    backgroundColor: '#ffffff',
                    borderRadius: 8,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                    // elevation: 1,
                    // Custom shadow for the top
                    borderTopWidth: 1, // Adjust the width of the top border to control the shadow effect
                    borderColor: 'rgba(248,248,248,0.2)', // Adjust the color and opacity of the top border to control the shadow effect
                    height: '100%',
                    width: '12%',
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 1, // This is for Android, use elevation for shadow
                    // borderWidth: 1,
                    // borderColor: 'gray'
                }}>
                <Image
                    style={{
                        borderWidth: 1,
                        // borderColor: 'red',
                        padding: 0,
                        margin: 0,
                        objectFit: "cover",
                        width: 25,
                        height: 25,
                        resizeMode: 'cover',
                        borderRadius: 0
                    }}
                    source={menuIcon}/>
            </View>
        </View>
    );
}

export default HomeFilterBar;