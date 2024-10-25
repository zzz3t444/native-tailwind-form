import React from "react";
import { View, Text, Dimensions } from "react-native";
import UrlImage from "@/assets/images/UrlImage";
import { t } from "react-native-tailwindcss";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const isDesktop = width >= 1024;

function _cover() {
  return (
    <View style={[{ backgroundColor: "#6f60f9", height: isDesktop ? "85%" : "100%", borderRadius: 20, width: isDesktop ? "25%" : "100%", margin: "auto" }]}>
      <Text style={[t.textWhite, { fontSize: 40 }, t.mT10, t.textCenter]}>let's get started!</Text>
      <View style={[{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 20 }]}>
        <UrlImage />
      </View>
      <View style={[{ paddingHorizontal: 40, marginTop: 20 }]}>
        <TouchableOpacity style={[{ height: 55, backgroundColor: "#ffc93d", borderRadius: 15, marginBottom: 30 }]}>
          <Text style={[t.textBlack, t.fontMedium, { fontSize: 17 }, t.mT4, t.textCenter]}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default _cover;
