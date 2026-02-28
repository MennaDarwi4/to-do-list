import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // ─── State 1: text typed in the TextInput ────────────────────────────────
  const [enteredGoalText, setEnteredGoalText] = useState('');

  // ─── State 2: list of goal objects shown in FlatList ─────────────────────
  const [goals, setGoals] = useState([]);

  // ─── Load custom fonts ────────────────────────────────────────────────────
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  // ─── Handler function: adds goal to list ─────────────────────────────────
  function addGoalHandler() {
    const trimmed = enteredGoalText.trim();
    if (!trimmed) return; // guard: don't add empty goals

    setGoals((prevGoals) => [
      { id: Math.random().toString(), text: trimmed },
      ...prevGoals,
    ]);
    setEnteredGoalText(''); // clear input after adding
  }

  // ─── Delete handler ───────────────────────────────────────────────────────
  function deleteGoalHandler(id) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}
      >
        {/* ── Header ── */}
        <View style={styles.header}>
          <Text style={styles.appTitle}>My To-do List</Text>
          <Text style={styles.appSubtitle}>
            {goals.length === 0
              ? 'Add your first goal below'
              : `${goals.length} goal${goals.length > 1 ? 's' : ''} to achieve`}
          </Text>
          <View style={styles.titleUnderline} />
        </View>

        {/* ── Input Row ── */}
        <GoalInput
          value={enteredGoalText}
          onChangeText={setEnteredGoalText}
          onAdd={addGoalHandler}
        />

        {/* ── Goals FlatList ── */}
        {goals.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🎯</Text>
            <Text style={styles.emptyText}>No Tasks yet!</Text>
            <Text style={styles.emptyHint}>
              Type something above and tap Add
            </Text>
          </View>
        ) : (
          <FlatList
            data={goals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GoalItem
                text={item.text}
                onDelete={() => deleteGoalHandler(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F0E17',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 50 : 20,
  },
  header: {
    marginBottom: 28,
  },
  appTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 36,
    color: '#FFFFFE',
    letterSpacing: 0.5,
  },
  appSubtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#A7A9BE',
    marginTop: 2,
    marginBottom: 16,
  },
  titleUnderline: {
    width: 60,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#6C63FF',
  },
  listContent: {
    paddingBottom: 30,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  emptyEmoji: {
    fontSize: 60,
    marginBottom: 16,
  },
  emptyText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    color: '#FFFFFE',
    marginBottom: 8,
  },
  emptyHint: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#A7A9BE',
  },
});
