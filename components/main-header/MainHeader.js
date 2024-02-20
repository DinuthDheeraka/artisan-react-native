import {View} from "react-native";
import ProfileHeader from "../profile-header/ProfileHeader";
import HomeFilterBar from "../home-filter-bar/HomeFilterBar";

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