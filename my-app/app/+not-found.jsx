import { View, StyleSheet, Text, Image } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFound() {
  return (
    <>
    <Stack.Screen options={{ title: 'NoT FoUnD 404' }} />
      <View style={styles.container}>
      <Image
          style={styles.image}
          source={{ uri: "https://avatars.mds.yandex.net/i?id=e472cd0da3e7fd8b34cf2f3181841f8f_l-4591219-images-thumbs&n=13" }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textTop}>Упс! Страница не найдена</Text>
          <Text style={styles.textBottom}>Ну или заблокирована🤡</Text>
        </View>
        <Link href="/" style={styles.button}>
          Вернуться на главную
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  textTop: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },

  textBottom: {
    fontSize: 18,
    color: '#fff',
  },

  image : {
    width: 444,
    height: 220,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});