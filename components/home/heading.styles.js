import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    // marginBottom: -SIZES.xSmall,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "medium",
    fontSize: SIZES.xLarge - 2,
  },
});

export default styles;
