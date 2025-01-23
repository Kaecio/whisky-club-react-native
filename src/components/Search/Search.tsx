import { View, Text } from "react-native";
import React, { useState } from "react";
import { SearchBar } from "react-native-elements";

export default function Search() {
    const [ search, setSearch] = useState<string>("");

    const updateSearch  = () =>{
        setSearch("")
    }
  return (
    <View >
      <SearchBar
        placeholder="busca"
        platform="default"
        value={search}
        onChangeText={updateSearch}
        showLoading={false}
        lightTheme
        round
      />
      
    </View>
  );
}
