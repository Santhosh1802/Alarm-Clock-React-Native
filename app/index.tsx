import { Text, View } from "react-native";
import Alaram from "../components/alaram"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Alaram time="7:00" ampm="AM" repeat="Ring once" isEnabled={false} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
