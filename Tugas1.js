import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const bgColor = darkMode ? '#121212' : '#eef2f5';
  const cardColor = darkMode ? '#1e1e1e' : '#ffffff';
  const textColor = darkMode ? '#ffffff' : '#222222';
  const subTextColor = darkMode ? '#bbbbbb' : '#555555';

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: bgColor }]}
      contentContainerStyle={styles.content}
    >
      <View style={[styles.card, { backgroundColor: cardColor }]}>

        <Image
          source={require('./assets/Profile.jpeg')}
          style={styles.image}
        />

        <Text style={[styles.nama, { color: textColor }]}>
          Andika Deny Maulana
        </Text>

        <Text style={[styles.info, { color: subTextColor }]}>
          NIM: 2410501015
        </Text>
        <Text style={[styles.info, { color: subTextColor }]}>
          D3 Sistem Informasi
        </Text>
        <Text style={[styles.info, { color: subTextColor }]}>
          Angkatan 2024
        </Text>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>
            Bio
          </Text>
          <Text style={[styles.bioText, { color: subTextColor }]}>
          Saya adalah mahasiswa D3 sistem informasi, saya suka membaca buku dan bermain game, saya juga suka belajar hal baru.  
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>
            Skill & Hobi
          </Text>
          <Text style={[styles.list, { color: subTextColor }]}>• Excel</Text>
          <Text style={[styles.list, { color: subTextColor }]}>• Java Scrtipt</Text>
          <Text style={[styles.list, { color: subTextColor }]}>• Membaca Buku</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: darkMode ? '#333' : '#1976D2' }
          ]}
          onPress={() => setDarkMode(!darkMode)}
        >
          <Text style={styles.buttonText}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    borderRadius: 18,
    padding: 28,
    elevation: 4,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignSelf: 'center',
    marginBottom: 18,
  },

  nama: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  info: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 3,
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },

  section: {
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  bioText: {
    fontSize: 15,
    lineHeight: 22,
  },

  list: {
    fontSize: 15,
    marginBottom: 4,
  },

  button: {
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});