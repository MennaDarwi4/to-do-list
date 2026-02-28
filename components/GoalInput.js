import React from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

export default function GoalInput({ value, onChangeText, onAdd }) {
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your goal..."
                    placeholderTextColor="#A7A9BE80"
                    value={value}
                    onChangeText={onChangeText}
                    maxLength={100}
                    returnKeyType="done"
                    onSubmitEditing={onAdd}
                />
                <Text style={styles.charCount}>{value.length}/100</Text>
            </View>
            <TouchableOpacity
                style={[styles.button, !value.trim() && styles.buttonDisabled]}
                onPress={onAdd}
                activeOpacity={0.75}
                disabled={!value.trim()}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 10,
        marginBottom: 28,
    },
    inputWrapper: {
        flex: 1,
        backgroundColor: '#1A1A2E',
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: '#6C63FF60',
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 8,
    },
    input: {
        color: '#FFFFFE',
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
        minHeight: 36,
    },
    charCount: {
        color: '#A7A9BE60',
        fontFamily: 'Poppins_400Regular',
        fontSize: 11,
        textAlign: 'right',
        marginTop: 4,
    },
    button: {
        backgroundColor: '#6C63FF',
        borderRadius: 14,
        paddingVertical: 16,
        paddingHorizontal: 22,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#6C63FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 6,
    },
    buttonDisabled: {
        backgroundColor: '#6C63FF50',
        shadowOpacity: 0,
        elevation: 0,
    },
    buttonText: {
        color: '#FFFFFE',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 15,
    },
});
