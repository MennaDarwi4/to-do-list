import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function GoalItem({ text, onDelete }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
      onPress={onDelete}
      android_ripple={{ color: '#FF658450' }}
    >
      <View style={styles.bullet} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.deleteHint}>✕</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A2E',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#6C63FF30',
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  itemPressed: {
    opacity: 0.7,
    borderColor: '#FF658480',
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6C63FF',
    marginRight: 14,
  },
  text: {
    flex: 1,
    color: '#FFFFFE',
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    lineHeight: 22,
  },
  deleteHint: {
    color: '#FF658470',
    fontSize: 14,
    marginLeft: 8,
    fontFamily: 'Poppins_400Regular',
  },
});
