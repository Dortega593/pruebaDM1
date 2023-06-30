import React from "react";
import {Alert, Button, StyleSheet, TextInput, View} from "react-native";

const NameComponent = () => {
    const [names, setNames] = React.useState('');
    const [lastnames, setLastnames] = React.useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setNames}
                value={names}
                placeholder="Nombre"
            />
            <TextInput
                style={styles.input}
                onChangeText={setLastnames}
                value={lastnames}
                placeholder="Apellido"
            />
            <View style={styles.containerButton}>
                <Button
                    title="SUBMIT"
                    disabled={!names || !lastnames}
                    onPress={() =>
                        Alert.alert(`El Nombre ${names} ${lastnames} se ha agregado`)
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
    containerButton: {
        width: '100%',
        marginTop: 10,
    },
});
export default NameComponent