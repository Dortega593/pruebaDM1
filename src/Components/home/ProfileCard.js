import React from "react";
import {Image, Linking, StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import avatarImage from '../../../assets/perfil-img.jpg';
import coverImage from '../../../assets/portada-img.jpg';

const twitter = <Icon name= "twitter" size={30} color="black"/>;
const facebook = <Icon name= "facebook" size={30} color="black"/>;
const instagram = <Icon name= "instagram" size={30} color="black"/>;
const linkedIn = <Icon name= "linkedin" size={30} color="black"/>;
const tiktok = <Icon name= "fa-tiktok" size={30} color="black"/>;

const ProfileCard = () => {
    const user = {
        avatar: avatarImage,
        coverPhoto: coverImage,
            name: "Diego Ortega"
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.twitter.com")}>
                    {twitter}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.facebook.com")}>
                    {facebook}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.instagram.com")}>
                    {instagram}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.linkedIn.com")}>
                    {linkedIn}
                </Text>
                <Text style={{ color: "blue" }} onPress={() =>  Linking.openURL("https://www.tiktok.com")}>
                    {tiktok}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            width: "100%",
            alignItems: "center",
            height: 200,
        },
        coverPhoto: {
            width: "100%",
            height: 200,
            resizeMode: "cover"
        },
        avatarContainer: {
            alignItems: "center",
            marginTop: -75
        },
        avatar: {
            width: 150,
            height: 150,
            borderRadius: 75,
            borderWidth: 5,
            borderColor: "white"
        },
        name: {
            marginTop: 15,
            fontSize: 20,
            fontWeight: "bold"
        },
        buttonContainer: {
            flexDirection: "row",
            marginTop: 20,
            width: "60%",
            justifyContent: "space-between"
        }
    }
)

export default ProfileCard;