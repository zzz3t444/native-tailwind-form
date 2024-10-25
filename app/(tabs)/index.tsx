import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { TextInput, GestureHandlerRootView } from "react-native-gesture-handler";
import { t } from "react-native-tailwindcss";
import UrlImage from "@/assets/images/UrlImage";

const { width, height } = Dimensions.get("window");
const isDesktop = width >= 1024;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={[t.p4, { flex: 1 }]}>
      <View style={t.mB5}>
        <Text style={{ marginHorizontal: 10, color: "gray" }}>Email Address</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Enter your email"
          style={[t.bgGray200, t.p3, { borderRadius: 15, marginTop: 5, height: 55 }]}
        />
      </View>
      <View style={[t.mB5, { marginTop: 5 }]}>
        <Text style={{ marginHorizontal: 10, color: "gray" }}>Password</Text>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry placeholder="Enter your password" style={[t.bgGray200, t.p3, { borderRadius: 15, marginTop: 5, height: 55 }]} />
        <Text style={[t.textBlue500, t.mT2, { fontSize: 12 }, t.textRight]}>Forget Password?</Text>
      </View>
      <TouchableOpacity onPress={handleLogin} style={[{ borderRadius: 15, height: 55, backgroundColor: "#ffc93d" }, t.mT5]}>
        <Text style={[t.textBlack, t.fontMedium, { fontSize: 17 }, t.mT4, t.textCenter]}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const Index = () => {
  return (
    <GestureHandlerRootView style={[t.flex, { width: isDesktop ? "25%" : "100%", margin: "auto" }]}>
      <View style={[{ backgroundColor: "#6f60f9", height: isDesktop ? height * 0.5 : height * 0.6, borderRadius: 30 }]}>
        <View style={[{ justifyContent: "center", alignItems: "center", marginTop: isDesktop ? 20 : 50 }]}>
          <UrlImage />
        </View>
      </View>
      <View style={[{ backgroundColor: "white", padding: isDesktop ? 30 : 15, borderRadius: 30, height: "auto", marginTop: isDesktop ? -150 : -150 }]}>
        <LoginForm />
        {/* <Text style={[t.textCenter, t.fontMedium, { fontSize: isDesktop ? 22 : 18 }]}>Or</Text> */}
        <Text style={[t.textCenter, t.textGray600, t.mT5]}>
          Don't have an account? <Text style={[{ color: "orange" }]}>Sign In</Text>
        </Text>
      </View>
    </GestureHandlerRootView>
  );
};

export default Index;
