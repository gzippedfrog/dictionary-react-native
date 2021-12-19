import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import WordCard from "../components/WordCard";

const SavedScreen = () => {
  const saved = useSelector((state) => state.saved);
  const ids = Object.keys(saved);

  return (
    <>
      <ScrollView>
        <View style={{ paddingTop: 10 }}>
          {saved && ids.map((id) => <WordCard word={saved[id]} key={id} />)}
        </View>
      </ScrollView>
    </>
  );
};

export default SavedScreen;
