import React from "react";
import { View, Image } from "react-native";

export default function UrlImage() {
  return (
    <View>
      <Image
        style={[{ width: 250, height: 450 }]}
        source={{
          uri: "https://cdn3d.iconscout.com/3d/premium/thumb/male-character-thinking-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--man-boy-creative-brainstorming-pack-people-illustrations-5120082.png",
        }}
      />
    </View>
  );
}
