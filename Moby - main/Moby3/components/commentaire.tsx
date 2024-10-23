import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Composant pour afficher les commentaires
export default function CommentSection() {
  const comments = [
    { comment: "Commentaire 1", moodColor: '#F4A261' },  // Orange
    { comment: "Commentaire 2", moodColor: '#E76F51' },  // Rouge
    { comment: "Commentaire 3", moodColor: '#A8D5BA' },  // Vert clair
    { comment: "Commentaire 4", moodColor: '#A8D5BA' },  // Vert clair
    { comment: "Commentaire 5", moodColor: '#A8D5BA' },  // Vert clair
  ];

  return (
    <View style={styles.container}>
      {/* Section des commentaires */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Commentaires</Text>
        <Text style={styles.headerText}>Mood</Text>
      </View>

      {comments.map((item, index) => (
        <View key={index} style={styles.row}>
          <View style={styles.commentBox}>
            <View style={styles.commentIndicator} />
            <Text style={styles.commentText}>{item.comment}</Text>
          </View>

          <View style={[styles.moodBox, { backgroundColor: item.moodColor }]} />
        </View>
      ))}

      {/* Nouvelle section pour l'historique des moods */}
      <MoodHistorySection />
    </View>
  );
}

// Nouveau composant pour l'historique des moods (refaçonné)
function MoodHistorySection() {
  const moodHistory = [
    { week: 'Semaine 1', moods: ['#F4A261', '#A8D5BA', '#E76F51', '#A8D5BA', '#A8D5BA', '#F4A261', '#E76F51'] },
    { week: 'Semaine 2', moods: ['#A8D5BA', '#E76F51', '#A8D5BA', '#A8D5BA', '#F4A261', '#A8D5BA', '#A8D5BA'] },
    { week: 'Semaine 3', moods: ['#E76F51', '#F4A261', '#A8D5BA', '#A8D5BA', '#A8D5BA', '#E76F51', '#F4A261'] },
    { week: 'Semaine 4', moods: ['#A8D5BA', '#A8D5BA', '#E76F51', '#F4A261', '#A8D5BA', '#F4A261', '#E76F51'] },
  ];

  return (
    <View style={styles.historyContainer}>
      <Text style={styles.historyTitle}>Historique des Moods</Text>

      {moodHistory.map((weekData, index) => (
        <View key={index} style={styles.weekRow}>
          {/* Ligne représentant la semaine */}
          <View style={styles.timelineWrapper}>
            <View style={styles.timelineLine} />  {/* Ligne verticale */}
            <Text style={styles.weekText}>{weekData.week}</Text>  {/* Texte entouré par un <Text> */}
          </View>

          {/* Timeline horizontale avec des points de mood */}
          <View style={styles.timeline}>
            {weekData.moods.map((mood, idx) => (
              <View key={idx} style={[styles.moodCircle, { backgroundColor: mood }]} />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles pour la section des commentaires
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  commentBox: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    height: 30,
    borderRadius: 5,
  },
  commentIndicator: {
    width: 8,
    height: '100%',
    backgroundColor: '#4E32A8',
    marginRight: 10,
  },
  commentText: {
    fontSize: 14,
    color: '#000',
  },
  moodBox: {
    flex: 1,
    height: 30,
    borderRadius: 5,
    marginLeft: 10,
  },

  // Styles pour l'historique des moods
  historyContainer: {
    marginTop: 20,
    padding: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  weekRow: {
    marginBottom: 30,
  },
  timelineWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  timelineLine: {
    width: 3,
    height: '100%',
    backgroundColor: '#E0E0E0',
    position: 'absolute',
    left: 15,
    top: 0,
    bottom: 0,
  },
  weekText: {
    marginLeft: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
