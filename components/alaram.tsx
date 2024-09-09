import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Alarm: React.FC = (probs) => {
    const [isEnabled, setIsEnabled] = useState(probs.isEnabled);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [time, setTime] = useState(probs.time)
    const [ampm, setAmPm] = useState(probs.ampm)
    const [repeat, setRepeat] = useState(probs.repeat)

    return (
        <View style={styles.container}>
            <View style={styles.timeSection}>
                <View style={styles.time}>
                    <Text style={styles.hour}>{time}</Text>
                    <Text style={styles.amPm}>{ampm}</Text>
                </View>
                <Text style={styles.repeatInfo}> {repeat}</Text>
            </View>
            <Switch
                trackColor={{ false: '#767577', true: '#23b230' }}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 350, // Set width for the overall component
        height: 80,
        padding: 10,
        backgroundColor: '#333', // Matches the dark background
        borderRadius: 15,
    },
    timeSection: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    time: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    hour: {
        fontSize: 40,
        color: '#f5f5f5', // White text for the time
    },
    amPm: {
        fontSize: 20,
        color: '#999', // Gray text for AM/PM
        marginLeft: 5,
    },
    repeatInfo: {
        fontSize: 14,
        color: '#999', // Gray text for the repeat info
    },
});

export default Alarm;
