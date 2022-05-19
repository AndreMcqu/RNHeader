import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Header = () => {
  return (
      <HeaderRNE
        leftComponent={
          <TouchableOpacity>{
          <Icon name='menu' color='#fff'/>
        }</TouchableOpacity>}
        centerComponent={{ text: 'Apprenants de la Manu', style: styles.heading }}
      />
  );
};

const styles = StyleSheet.create({
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#397af8',
      marginBottom: 20,
      width: '100%',
      paddingVertical: 15,
    },
    heading: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
  export default Header;
