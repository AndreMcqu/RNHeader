import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon, SearchBar } from "@rneui/themed";




const Find = () => {
    const [search , onChange] = React.useState('')
    const update = (search) => {
        onChange(search);
    };
    return (
            <View style={styles.Finder}>
                <SearchBar 
                    placeholder='Who are you looking for ?' 
                    onChangeText={update} 
                    value={search} /> 
            </View>
    )
};

const styles = StyleSheet.create({
  Finder: {
      width: '100%'
  },
});
export default Find;