import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

// import { default as data } from "../../api/data.json";
import { useStarships } from "../hooks/useStarships";

export const StarshipFeedScreen = () => {
  const { isLoading, isError, data } = useStarships();

  if (isLoading) {
    return <Text>loadingw</Text>;
  }
  if (isError) {
    return <Text>Error</Text>;
  }

  const Item = ({ item }: any) => (
    <Card>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>
          Model : {item.model} {"\n"}
          Crew : {item.crew} {"\n"}
          Hyperdriving rating : {item.hyperdrive_rating} {"\n"}
          Price : {item.cost_in_credits} ¤
        </Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: item.url }} />
    </Card>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        style={styles.container}
        data={data.results}
        renderItem={Item}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
