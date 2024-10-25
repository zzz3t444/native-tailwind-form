import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput, GestureHandlerRootView } from "react-native-gesture-handler";
import { t } from "react-native-tailwindcss";
import UrlImage from "@/assets/images/UrlImage";
// import GoogleIcons from "@/assets/icons/Google";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={t.p4}>
      <View>
        <Text style={{ marginHorizontal: 10, color: "gray" }}>Email Address</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Enter your email"
          style={[t.bgGray200, t.p3, { borderRadius: 15, marginTop: 5 }]}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginHorizontal: 10, color: "gray" }}>Password</Text>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry placeholder="Enter your password" style={[t.bgGray200, t.p3, { borderRadius: 15, marginTop: 5 }]} />
        <Text style={[t.textBlue500, t.mT2, { fontSize: 12 }, t.textRight]}>Forget Password?</Text>
      </View>
      <TouchableOpacity onPress={handleLogin} style={[{ borderRadius: 15, height: 55, backgroundColor: "#ffc93d" }, t.mT10]}>
        <Text style={[t.textBlack, t.fontMedium, { fontSize: 17 }, t.mT4, t.textCenter]}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const Index = () => {
  return (
    <GestureHandlerRootView style={[t.flex]}>
      <View style={[{ backgroundColor: "#6f60f9", height: 350 }]}>
        <View style={[{ justifyContent: "center", alignItems: "center", flex: 1 }]}>
          <UrlImage />
        </View>
      </View>
      <View style={[{ backgroundColor: "white", padding: 15, borderTopLeftRadius: 30, borderTopRightRadius: 30, height: 600, marginTop: -30 }]}>
        <LoginForm />
        <Text style={[t.textCenter, t.fontMedium, { fontSize: 18, marginTop: 10 }]}>Or</Text>
        <View>{/* <GoogleIcons /> */}</View>
        <Text style={[t.textCenter]}>
          Don't have an accoint? <Text style={[{ color: "orange" }]}>Sign In</Text>
        </Text>
      </View>
    </GestureHandlerRootView>
  );
};

export default Index;
