import {View} from "react-native";
import ProfileHeader from "../profile-header/ProfileHeader";

const MainHeader = () => {
    return (
        <View style={{
            padding: 0,
            marginTop: 40,
            width: '92%',
        }}>
            <ProfileHeader/>
        </View>
    );
}

export default MainHeader;