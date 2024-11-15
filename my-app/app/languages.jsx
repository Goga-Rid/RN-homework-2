import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProgrammingLanguageCard from '../components/myLanguages';
import { programmingLangList } from '../src/data/programmingLang';

export default function Languages() {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = () => {
      setIsRefreshing(true);
      setTimeout(() => {
        setIsRefreshing(false);
      }, 1000);
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={programmingLangList}
          renderItem={({ item }) => (
            <ProgrammingLanguageCard
              style={styles.languageCard}
              imageURL={item.imageURL}
              languageName={item.name}
              experienceYears={item.experienceYears}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          onRefresh={handleRefresh}
          refreshing={isRefreshing}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#95d0c2',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: '#fff',
      },
      button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
      },
});
