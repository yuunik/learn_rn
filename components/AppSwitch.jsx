import {Switch, StyleSheet} from "react-native";
import {useState} from "react";

const AppSwitch = () => {
    const [isEnabled, setIsEnabled] = useState();

    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    return (
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
    )
}

export default AppSwitch