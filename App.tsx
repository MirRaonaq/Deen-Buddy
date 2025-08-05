/**
 * Deen Buddy - Islamic Companion App
 * A beautiful iOS-style app for Islamic practices
 */

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

interface PrayerTime {
  name: string;
  time: string;
  isNext: boolean;
}

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentTime] = useState(new Date());

  const prayerTimes: PrayerTime[] = [
    { name: 'Fajr', time: '5:30 AM', isNext: false },
    { name: 'Dhuhr', time: '1:15 PM', isNext: true },
    { name: 'Asr', time: '4:45 PM', isNext: false },
    { name: 'Maghrib', time: '7:30 PM', isNext: false },
    { name: 'Isha', time: '9:00 PM', isNext: false },
  ];

  const features: FeatureCard[] = [
    {
      title: 'Prayer Times',
      description: 'Get accurate prayer times for your location',
      icon: '🕌',
      color: '#4CAF50',
    },
    {
      title: 'Qibla Finder',
      description: 'Find the direction of the Kaaba',
      icon: '🧭',
      color: '#2196F3',
    },
    {
      title: 'Quran Reader',
      description: 'Read and listen to the Holy Quran',
      icon: '📖',
      color: '#9C27B0',
    },
    {
      title: 'Dhikr Counter',
      description: 'Count your daily dhikr and tasbih',
      icon: '📿',
      color: '#FF9800',
    },
    {
      title: 'Islamic Calendar',
      description: 'Hijri calendar and important dates',
      icon: '📅',
      color: '#E91E63',
    },
    {
      title: 'Dua Collection',
      description: 'Collection of authentic duas',
      icon: '🤲',
      color: '#607D8B',
    },
  ];

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, isDarkMode && styles.darkText]}>
          Deen Buddy
        </Text>
        <Text style={[styles.headerSubtitle, isDarkMode && styles.darkSubtext]}>
          Your Islamic Companion
        </Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Prayer Times Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
            Prayer Times
          </Text>
          <View style={styles.prayerContainer}>
            {prayerTimes.map((prayer, index) => (
              <View
                key={index}
                style={[
                  styles.prayerCard,
                  prayer.isNext && styles.nextPrayer,
                  isDarkMode && styles.darkPrayerCard,
                ]}
              >
                <Text style={[styles.prayerName, isDarkMode && styles.darkText]}>
                  {prayer.name}
                </Text>
                <Text style={[styles.prayerTime, isDarkMode && styles.darkText]}>
                  {prayer.time}
                </Text>
                {prayer.isNext && (
                  <Text style={styles.nextIndicator}>Next Prayer</Text>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Features Grid */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
            Features
          </Text>
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.featureCard,
                  { backgroundColor: feature.color },
                  isDarkMode && styles.darkFeatureCard,
                ]}
              >
                <Text style={styles.featureIcon}>{feature.icon}</Text>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>
                  {feature.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
            Quick Actions
          </Text>
          <View style={styles.quickActions}>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: '#4CAF50' }]}
            >
              <Text style={styles.actionButtonText}>Start Prayer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: '#2196F3' }]}
            >
              <Text style={styles.actionButtonText}>Find Qibla</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  header: {
    padding: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  darkText: {
    color: '#FFFFFF',
  },
  darkSubtext: {
    color: '#B0B0B0',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    padding: 20,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  prayerContainer: {
    gap: 10,
  },
  prayerCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  darkPrayerCard: {
    backgroundColor: '#1E1E1E',
  },
  nextPrayer: {
    backgroundColor: '#E8F5E8',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  prayerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  prayerTime: {
    fontSize: 16,
    color: '#666',
  },
  nextIndicator: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  featureCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  darkFeatureCard: {
    backgroundColor: '#1E1E1E',
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 15,
  },
  actionButton: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
