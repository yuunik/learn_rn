import {Image} from "expo-image";

const AppBarLeading = () => {
    return (
        <Image source={require('../assets/back.svg')} contentFit="cover" style={{ width: 24, height: 24}} />
    )

}

export default AppBarLeading