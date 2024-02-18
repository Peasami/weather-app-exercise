import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const api = {
    url: 'https://api.openweathermap.org/data/2.5/weather?',
    key: '0e2a18442cbf313848fe55268e99227d',
    icons: 'https://openweathermap.org/img/wn/',
}

export default function Weather(props) {
    const [temp, setTemp] = useState(0)
    const [desc, setDesc] = useState('')
    const [icon, setIcon] = useState('')
}