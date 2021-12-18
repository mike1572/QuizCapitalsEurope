
let states = {
    0 : 'Albania',
    1 : 'Andorra', 
    2 : 'Austria',
    3 : 'Belarus', 
    4 : 'Belgium', 
    5 : 'Bosnia and Herzegovina', 
    6 : 'Bulgaria',
    7 : 'Croatia', 
    8 : 'Cyprus', 
    9 : 'Czech Republic', 
    10 : 'Denmark', 
    11 : 'Estonia', 
    12 : 'Finland', 
    13 : 'France', 
    14 : 'Germany', 
    15 : 'Greece', 
    16 : 'Hungary', 
    17 : 'Iceland', 
    18 : 'Ireland', 
    19 : 'Italy', 
    20 : 'Latvia', 
    21 : 'Liechtenstein', 
    22 : 'Lithuania', 
    23 : 'Luxembourg', 
    24 : 'Macedonia', 
    25 : 'Malta', 
    26 : 'Moldova', 
    27 : 'Monaco', 
    28 : 'Montenegro',
    29 : 'Netherlands', 
    30 : 'Norway', 
    31 : 'Poland', 
    32 : 'Portugal',
    33 : 'Romania', 
    34 : 'San Marino', 
    35 : 'Serbia', 
    36 : 'Slovakia', 
    37 : 'Slovenia', 
    38 : 'Spain', 
    39 : 'Sweden', 
    40 : 'Switzerland', 
    41 : 'Ukraine', 
    42 : 'United Kingdom', 
    43 : 'Vatican City', 
    
    44 : 'Armenia', 
    45 : 'Azerbaijan', 
    46 : 'Georgia', 
    47 : 'Kazakhstan', 
    48 : 'Russia', 
    49 : 'Turkey'
}

let capitals = {
    0 : 'Tirana', 
    1 : 'Andorra La Vella', 
    2 : 'Vienna', 
    3 : 'Minsk', 
    4 : 'Brussels', 
    5 : 'Sarajevo', 
    6 : 'Sofia', 
    7 : 'Zagreb', 
    8 : 'Nicosia', 
    9 : "Prague", 
    10 : 'Copenhagen', 
    11 : 'Tallinn', 
    12 : 'Helsinki', 
    13 : 'Paris', 
    14 : 'Berlin', 
    15 : 'Athens', 
    16 : 'Budapest', 
    17 : 'Reykjavik', 
    18 : 'Dublin', 
    19 : 'Rome', 
    20 : 'Riga', 
    21 : 'Vaduz', 
    22 : 'Vilnius', 
    23 : 'Luxembourg', 
    24 : 'Skopje', 
    25 : 'Valletta', 
    26 : 'Chisinau', 
    27 : 'Monaco', 
    28 : 'Podgorica', 
    29 : 'Amsterdam', 
    30 : 'Oslo', 
    31 : 'Warsaw', 
    32 : 'Lisbon', 
    33 : 'Bucharest', 
    34 : 'San Marino', 
    35 : 'Belgrade', 
    36 : 'Bratislava', 
    37 : 'Ljubljana', 
    38 : 'Madrid', 
    39 : 'Stockholm', 
    40 : 'Bern', 
    41 : 'Kiev', 
    42 : 'London', 
    43 : 'Vatican City', 

    44 : 'Yerevan', 
    45 : 'Baku', 
    46 : 'Tblisi', 
    47 : 'Astana', 
    48 : 'Moscow', 
    49 : 'Ankara'
}

import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, BackHandler} from 'react-native';

import { createStackNavigator, setOptions } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/stack';
import { useLayoutEffect } from 'react';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontSize: 50,
      alignItems: 'center',
      paddingTop: 130,
      backgroundColor: '#ccffff',
    },
    container2: {
        flex: 1,
        fontSize: 50,
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#ccffff',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25, 
        color: '#000066', 
        padding: 5
    }, 
    text: {
        fontSize: 20,
        padding: 15, 
        color: '#0000cc'
    }, 
    text2: {
        fontSize: 20,
        padding: 10, 
        color: '#0000cc', 
        textAlign: 'center'
    }, 
    button: {
        fontSize: 30,
        padding: 10,
        backgroundColor: '#0066cc', 
        borderRadius: 30, 
        marginTop: 15,

    },  
    buttonCountry: {
        fontSize: 25,
        padding: 5,
        backgroundColor: '#0066cc', 
        borderRadius: 30, 
        marginTop: 15,
        borderWidth: 5,
        borderColor: '#0066cc', 
        //borderColor: '#33cc33',
        //borderColor: 'red'
        
    },
    buttonNext: {
        fontSize: 30,
        padding: 10,
        backgroundColor: '#006699',
        marginTop: 15, 
        width: 120,
        borderRadius: 10
       
    },
    scroll: {
        height: 300, 
        width: 270
    }, 
    red: {
        borderColor: 'red'
    }, 
    green: {
        borderColor: '#33cc33'
    }, 
    normal: {
        borderColor: '#0066cc'
    }
  });

// Add the new stack navigator above this line
const Stack = createStackNavigator();

const Welcome = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Quiz Capitals</Text>
            <Text style={styles.text}>Guess the Capitals of Europe</Text>
            <View style={styles.button}>
                <Button
                    title="BEGIN"
                    color= 'yellow'
                    onPress={()=> navigation.navigate("Play")}
                />
            </View> 
        </View>
    )
}



//let listNumber = [1, 2, 3, 4, 5]
let listNumber = [ 0, 1, 2, 3, 4, 5 , 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];

let listChoices = [];
let country = '';
let capital = '';
let option1 = {option: '', real: false, disabled: false, border: styles.normal};
let option2 = {option: '', real: false, disabled: false, border: styles.normal};
let option3 = {option: '', real: false, disabled: false, border: styles.normal};
let option4 = {option: '', real: false, disabled: false, border: styles.normal};


const Play = ({navigation}) => {

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft: ()=>(
                <Button title="< Back" onPress={()=> {navigation.navigate('Home'), setToZero()}}/>
            )
        })
    })

    const [rightAnswers, setRightAnswers] = useState(0);
    let [all, setAll] = useState(0);
 
    const [nextButtonDisabled,setNextButtonDisabled] = useState(true)
    const [showAnswer, setShowAnswer] = useState(false);
    
    
    const clicked = (option) => {
        setShowAnswer(true); 
        setNextButtonDisabled(false)
        
        if (option.option == capital){
            setRightAnswers(rightAnswers + 1)
            option.border = styles.green;
        } else {
            if (option1.option == capital){
                option1.border = styles.green;
            } else if (option2.option == capital){
                option2.border = styles.green
            } else if (option3.option == capital){
                option3.border = styles.green
            } else if (option4.option == capital){
                option4.border = styles.green
            }
            option.border = styles.red;
        }
    }

    const continued = () => {
        setNextButtonDisabled(true);
        setShowAnswer(false);
        setAll(all+1)

        option1.border = styles.normal;
        option2.border = styles.normal;
        option3.border = styles.normal;
        option4.border = styles.normal;

    }

    const getRandomFakeCapital = (array) => {
        let random = Math.floor(Math.random() *  Object.keys(capitals).length)
        if (!array.includes(capitals[random])) {
            array = array.push(capitals[random])
            return array
        } else {
            getRandomFakeCapital(array)
        }        
    }

    const getRandomCapital = () => {
       

        let random = listNumber[Math.floor(Math.random() * listNumber.length)];
        console.log("random " + random)
        console.log(listNumber)
        country = states[random]
        capital = capitals[random]
        listChoices.push(capital)
        for (let i = 0; i < 3; i++){
            getRandomFakeCapital(listChoices)
        }

        displayCapitals()
        listNumber.splice(listNumber.indexOf(random), 1);
    }

    const displayCapitals = () => {
        
        let optionNums = [0, 1, 2, 3]
        console.log(listChoices, rightAnswers, capital)
        for (let i = 0; i < 4; i++){
           let random = optionNums[Math.floor(Math.random() * optionNums.length)]

           if (random == 0){
                option1.option = listChoices[0]; 
                if (listChoices[0] == capital){
                    option1.real = true;
                }
                listChoices.splice(listChoices.indexOf(listChoices[0]), 1);
           } else if (random == 1){
                option2.option = listChoices[0]; 
                if (listChoices[0] == capital){
                    option2.real = true;
                }
                listChoices.splice(listChoices.indexOf(listChoices[0]), 1);
           } else if (random == 2){
                option3.option = listChoices[0]; 
                if (listChoices[0] == capital){
                    option3.real = true;
                }
                listChoices.splice(listChoices.indexOf(listChoices[0]), 1);
           } else if (random == 3){
                option4.option = listChoices[0]; 
                if (listChoices[0] == capital){
                    option4.real = true;
                }
                listChoices.splice(listChoices.indexOf(listChoices[0]), 1);
           }

           optionNums.splice(optionNums.indexOf(random), 1);
        }

    }

    if (nextButtonDisabled == true && listNumber.length > 0){
        getRandomCapital() 

    }

   
    const setToZero = () => {
        setAll(0);
        setRightAnswers(0);
        setShowAnswer(false)
        setNextButtonDisabled(true)
        listNumber = [ 0, 1, 2, 3, 4, 5 , 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
        //listNumber = [1, 2, 3, 4, 5]
        country = ''
    }

    const test = () => {
        setRightAnswers(rightAnswers+ 1)
        setNextButtonDisabled(false)
    }

    if (50 - all == 0){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Good Job!</Text>
                <Text style={styles.text}>You got {rightAnswers} right answer{rightAnswers ==1 ? '': 's'} on 50</Text>
                <View style={styles.buttonCountry}>
                        <Button
                            title="Try Again"
                            color= 'yellow'
                            onPress={()=> {setToZero()}}
                        />
                    </View> 
            </View>
        )
    } else {

    return (
        
        <View style={styles.container2}>
            
                <Text style={styles.text2}>Countries Left: {50 - all}/50</Text>
                <Text style={styles.text2}>What is the Capital of {country} ?</Text>
                <View>
                <View style={styles.scroll}>
                <ScrollView>
                    <View style={[styles.buttonCountry, option1.border]}>
                        <Button
                            title={option1.option}
                            color= 'yellow'
                            onPress={()=> clicked(option1)}
                            disabled={showAnswer}
                        />
                    </View> 
                    <View style={[styles.buttonCountry, option2.border]}>
                        <Button
                            title={option2.option}
                            color= 'yellow'
                            onPress={()=> clicked(option2)}
                            disabled={showAnswer}
                            
                        />
                    </View> 
                    <View style={[styles.buttonCountry, option3.border]}>
                        <Button
                            title={option3.option}
                            color= 'yellow'
                            disabled={showAnswer}
                            onPress={()=> clicked(option3)}
                        />
                    </View> 
                    <View style={[styles.buttonCountry, option4.border]}>
                        <Button
                            title={option4.option}
                            color= 'yellow'
                            disabled={showAnswer}
                            onPress={()=> clicked(option4)}
                        
                        />
                    </View> 
                </ScrollView>
            </View>
            </View>
                <View style={styles.buttonNext}>
                        <Button
                            title="Next"
                            color= 'yellow'
                            disabled={nextButtonDisabled}
                            onPress={()=> {
                                continued()
                            }}
                        />
                </View> 
            
        </View>
    
    )}
}

export const WelcomeScreen = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Welcome}/>
            <Stack.Screen name="Play" component={Play}/>
        </Stack.Navigator>
    )
}


