import React from "react";
import { View, Image } from "react-native";

export default function UrlImage() {
  return (
    <View>
      <Image
        style={[{ width: 200, height: 200 }]}
        source={{
          uri: "https://cdn3d.iconscout.com/3d/premium/thumb/thinking-3d-icon-download-in-png-blend-fbx-gltf-file-formats--setting-management-innovation-design-pack-development-icons-6041579.png?f=webp",
        }}
      />
    </View>
  );
}
