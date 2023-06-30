import React, {useRef, useState} from "react";
import {View, Text, TextInput, ScrollView, StyleSheet, Alert, Button, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Configuration, OpenAIApi } from 'openai'

const apiKey = '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'
const configuration = new Configuration({
    apiKey
});
const openai = new OpenAIApi(configuration);

const sendMessage = async (body) => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${body.message}`,
            temperature: 0.6,
            max_tokens: 150,
            n: 1,
        })
        return { reply: response.data.choices[0].text?.trim() }

    } catch (e) {
        Alert.alert(JSON.stringify(e))
    }
}
const ApiComponent = () => {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const scrollViewRef = useRef(null);
    const handleSubmit = async () => {
        setLoading(true)
        const meMessage = {
            from: 'userA',
            body: message,
        }
        setMessages((prevMessages) => [...prevMessages, meMessage])
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
        const response = await sendMessage({ message })
        setMessage('')
        const responseMessage = {
            from: 'bot',
            body: response?.reply || 'Ocurrio un Error',
        }
        setMessages((prevMessages) => [...prevMessages, responseMessage])
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
        setLoading(false)
    }
    return (
        <View style={styles.container}>
            <ScrollView ref={scrollViewRef} style={styles.messageContainer}>
                {messages.map((message, index) => (
                    <View  key={index} style={{ justifyContent: message.from !== "userA" ? 'flex-start' : 'flex-end', flexDirection: "row" }}>
                        <View
                            style={[
                                styles.messageItem,
                                {
                                    backgroundColor: message.from === "userA" ? '#dcdfe6' : '#f6f6f6',
                                },
                            ]}
                        >
                            <Text style={styles.messageText}>{message.body}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View style={{ display: "flex", flexDirection: 'row', width: '100%'}}>
                <TextInput
                    name="message"
                    placeholder="Send a message"
                    onChangeText={(text) => setMessage(text)}
                    style={styles.input}
                    value={message}
                />
                {
                    !loading && <button className='btn btn-primary mt-3 mb-3' type="button" onClick={handleSubmit}>
                        Enviar
                    </button>
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#34495e',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
    },
    messageContainer: {
        height: 80,
        margin: 15,
        flexDirection: 'column',
        backgroundColor:'#1b2631',
    },
    messageItem: {
        flexDirection: 'row',
        width: '50%',
        minHeight: 50,
        marginVertical: 2,
        padding: 2,
        borderRadius: 4,
        backgroundColor:'#566573'
    },
    messageText: {
        fontSize: 14,
        color: '#000000',
    },
    input: {
        borderWidth: 2,
        backgroundColor:'#808B96',
        borderColor: "#000000",
        padding: 5,
        marginRight: 7,
        width: '89%',
        color: '#fdfefe',
    },

});

export default ApiComponent;