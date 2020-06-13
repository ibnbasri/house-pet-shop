import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons'; 
import Constants from "expo-constants";
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "aqua",
              borderRadius: 10,
            }}
          />
        </View>
        <SimpleLineIcons name="bag" size={24} color="black" />
      </View>

      <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>

        <View style={{ margin: 15 }}>
          <View
            style={{
              height: 180,
              backgroundColor: "#7BA2D2",
              width: 330,
              borderRadius: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/pet-house.png")}
                  resizeMode="contain"
                  style={{
                    width: screenWidth / 3,
                    height: screenWidth / 3,
                    resizeMode: "contain",
                  }}
                />
              </View>

              <View
                style={{ flex: 1, flexWrap: "wrap", justifyContent: "center" }}
              >
                <Text style={{ flexShrink: 1, alignSelf: "flex-end" }}>
                  Berikan Rumah Untuk Peliharaan Kesayangan mu
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginVertical:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={{height:screenHeight/4.8, marginRight:10  ,width: screenWidth/1.5, backgroundColor:'#699AAF'}}>

              </View>
              <View style={{height:screenHeight/4.8, marginRight:10  ,width: screenWidth/1.5, backgroundColor:'#A4A5A5'}}>

              </View>
              <View style={{height:screenHeight/4.8, marginRight:10  ,width: screenWidth/1.5, backgroundColor:'#6D7BE2'}}>

              </View>

            </ScrollView>
          </View>


          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", marginVertical: 18 }}
            >
              Category
            </Text>
          </View>
          <View
            style={{
              justifyContent:'center',
              alignItems:"center",
              padding: 10,
              backgroundColor: "#AEB0C5",
              height: 100,
              borderRadius: 10,
              marginVertical: 10,
            }}
          >
            <Text>Lipat</Text>
          </View>
          <View
            style={{
              justifyContent:'center',
              alignItems:"center",
              padding: 10,
              backgroundColor: "#AEB0C5",
              height: 100,
              borderRadius: 10,
              marginVertical: 10,
            }}
          >
            <Text>Tingkat</Text>
          </View>
          <View
            style={{
              justifyContent:'center',
              alignItems:"center",
              padding: 10,
              backgroundColor: "#AEB0C5",
              height: 100,
              borderRadius: 10,
              marginVertical: 10,
            }}
          >
            <Text>Normal</Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FBFA",
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    height: 65,
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
