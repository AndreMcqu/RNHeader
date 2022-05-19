import { ListItem, Icon } from '@rneui/themed'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as React from "react";
import { Avatar } from "@rneui/base";

const Profile = () => {
    const List = [
        {
            Name: 'Alain Decayeux',
            Icon: 'AD',
            Subtitle: 'Appli Mobile',
        },
        {
            Name: 'Andre Mcquade',
            Icon: 'AM',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Aurore Sifflet',
            Icon: 'AS',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Buse Alaçam',
            Icon: 'BA',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Daniel Silva',
            Icon: 'DS',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Jean Girad-Reydet',
            Icon: 'JG',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Kelton Semedo Da Veiga',
            Icon: 'KS',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Louis Aliber',
            Icon: 'LA',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Lukas Mannonen',
            Icon: 'LM',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Michel Tcha',
            Icon: 'MT',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Romain Chilot',
            Icon: 'RC',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Théo Sokolowsky',
            Icon: 'TS',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Yannick',
            Icon: 'Y',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Abigaelle M',
            Icon: 'AM',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Alexandre Denurra',
            Icon: 'AD',
            Subtitle: 'Appli Mobile ',
        },
        {
            Name: 'Prem Balagourou',
            Icon: 'PB',
            Subtitle: 'Appli Mobile ',
        }, 
        {
            Name: 'Sandrine Oriol',
            Icon: 'SO',
            Subtitle: 'Appli Mobile ',
        },
    ];

    return (
        <View>
            <ScrollView>
                {List.map((item, P) => (
                    <ListItem key={P} bottomDivider>
                        <Avatar activeOpacity={0.2} containerStyle={{ backgroundColor: "#BDBDBD" }} rounded size="large" title={item.Icon} />
                        <ListItem.Content>
                            <ListItem.Title>{item.Name}</ListItem.Title>
                            <ListItem.Subtitle>{item.Subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))
                }
            </ScrollView>
        </View>
    );
};


export default Profile;