import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const productos = [
    { name: 'Doritos', category: 'snacks', buyPrice: 0.50, sellPrice: 0.65, id: '101' },
    { name: 'Papas', category: 'snacks', buyPrice: 0.40, sellPrice: 0.55, id: '102' },
    { name: 'Coca Cola', category: 'bebidas', buyPrice: 0.50, sellPrice: 0.65, id: '103' },
    { name: 'Cueros', category: 'snacks', buyPrice: 0.50, sellPrice: 0.75, id: '104' },
    { name: 'Pepsi', category: 'bebidas', buyPrice: 0.50, sellPrice: 0.75, id: '105' },
    { name: 'Plantanos', category: 'snacks', buyPrice: 0.50, sellPrice: 0.65, id: '106' },
    { name: 'Nachos', category: 'snacks', buyPrice: 1, sellPrice: 1.25, id: '107' },
    { name: 'Galletas', category: 'snacks', buyPrice: 0.60, sellPrice: 0.75, id: '108' },
    { name: 'Agua Mineral', category: 'bebidas', buyPrice: 0.30, sellPrice: 0.45, id: '109' },
    { name: 'Chocolate', category: 'snacks', buyPrice: 0.75, sellPrice: 1.25, id: '110' },
  ];

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
