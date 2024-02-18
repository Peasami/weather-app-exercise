import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL,
}

export default function Weather(props) {
    const [temp, setTemp] = useState(0)
    const [desc, setDesc] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
        const url = api.url +
            'lat=' + props.latitude +
            '&lon=' + props.longitude +
            '&units=metric' +
            '&appid=' + api.key
        
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setTemp(json.main.temp)
                setDesc(json.weather[0].description)
                setIcon(api.icons + json.weather[0].icon + '@2x.png')
            }) .catch((error) => {
                setDesc('Error retrieving weather info')
                console.log('Error: ', error)
            })
    }, [])

    return (
        <View>
            <Text style={styles.temp}>{temp}</Text>
            {icon &&
                <Image style={styles.icon} source={{uri: icon}} />
            }
            <Text style={styles.desc}>{desc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    temp: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    icon: {
        width: 100,
        height: 100,
    },
    desc: {
        fontSize: 18,
        fontStyle: 'italic',
    },
})