import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./component/Header";
import Profile from "./component/profile";
import Find from "./component/SearchBar";

const Apprenants = () => {
  return (
    <>
      <SafeAreaProvider>
        <Header />
        <Find />
        <Profile />
      </SafeAreaProvider>
    </>
  )
};

const styles = StyleSheet.create({

  head: {
    flex: 0.8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mid: {
    flex: 0.8,
  },
  body: {
    flex: 7,
    backgroundColor: 'red',
  },

});

export default Apprenants;