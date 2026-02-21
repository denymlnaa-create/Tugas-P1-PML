import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Kalkulator() {
  const [angkaA, setAngkaA] = useState('');
  const [angkaB, setAngkaB] = useState('');
  const [hasil, setHasil] = useState(null);
  const [operasi, setOperasi] = useState('');

  const hitung = (op) => {
    const a = parseFloat(angkaA);
    const b = parseFloat(angkaB);

    if (isNaN(a) || isNaN(b)) {
      setHasil("Input tidak valid");
      setOperasi('');
      return;
    }

    let result;

    switch (op) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '×':
        result = a * b;
        break;
      case '÷':
        if (b === 0) {
          setHasil("Error: Tidak bisa dibagi 0");
          setOperasi('');
          return;
        }
        result = a / b;
        break;
    }

    setOperasi(op);
    setHasil(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.judul}>Kalkulator Sederhana</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan Angka A"
          keyboardType="numeric"
          value={angkaA}
          onChangeText={setAngkaA}
        />

        <TextInput
          style={styles.input}
          placeholder="Masukkan Angka B"
          keyboardType="numeric"
          value={angkaB}
          onChangeText={setAngkaB}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => hitung('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => hitung('-')}>
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => hitung('×')}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => hitung('÷')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>

        {hasil !== null && (
          <View style={styles.hasilBox}>
            <Text style={styles.hasilText}>
              {operasi !== ''
                ? `${angkaA} ${operasi} ${angkaB} = ${hasil}`
                : hasil}
            </Text>
          </View>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '90%',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 12,
    elevation: 3,
  },

  judul: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  button: {
    flex: 1,
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  hasilBox: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    alignItems: 'center',
  },

  hasilText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});