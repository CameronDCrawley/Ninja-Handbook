const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const ninjas = {
    'naruto': {
        'name': 'Naruto Uzumaki',
        'age': 17,
        'signatureAbility': 'Rasengan',
        'village': 'Konohagakure ,Village Hidden in the Leaves'
    },
    'sasuke':{
        'name': 'Sasuke Uchiha',
        'age': 17,
        'signatureAbility': 'Chidori',
        'village': 'Konohagakure, Defected'
    },
    'sakura':{
        'name':'Sakura Haruno',
        'age': 17,
        'signatureAbility':'Strength of a Hundred Seal',
        'village': 'Konohagakure ,Village Hidden in the Leaves'
    },
    'kakashi': {
        'name':'Kakashi Hatake',
        'age': 31,
        'signatureAbility': 'Lightning Blade',
        'village': 'Konohagakure ,Village Hidden in the Leaves'
    },
    'gaara':{
        'name':'Gaara',
        'age': 17,
        'signatureAbility': 'Sand Manipulation',
        'village': 'Sunagakure, Village Hidden by Sand'
    },
    'temari':{
        'name':'temari',
        'age': 20,
        'signatureAbility':'Wind Release: Great Sickle Weasel Technique',
        'village': 'Sunagakure, Village Hidden by Sand'
    },
    'kankuro':{
        'name':'kankuro',
        'age': 19,
        'signatureAbility':'Puppet Mastery',
        'village': 'Sunagakure, Village Hidden by Sand'
    },
    'a':{
        'name':'A (Fourth Raikage)',
        'age': 47,
        'signatureAbility':'Lightning Release Chakra Mode',
        'village': 'Kumogakure, Village Hidden by Clouds'
    },
    'B':{
        'name':'Killer B',
        'age': 36,
        'signatureAbility':'Acrobat Sword Style',
        'village': 'Kumogakure, Village Hidden by Cloud'
    },
    'zabuza ':{
        'name':'Zabuza Momochi',
        'age': 26,
        'signatureAbility':'Hiding in Mist Technique',
        'village': 'Kirigakure, Defected'
    },
    'pain':{
        'name':'Nagato',
        'age': 35,
        'signatureAbility':'Almighty Push',
        'village': 'Amegakure, Defected'
    },
    'orochimaru':{
        'name':'Orochimaru',
        'age': 54,
        'signatureAbility':'Hidden Shadow Snake Hands',
        'village': 'Konohagakure, Defected'
    },
    'itachi':{
        'name':'Itachi Uchiha',
        'age': 21,
        'signatureAbility':'Tsukuyomi',
        'village': 'Konohagakure, Defected'
    },


    
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})
app.get('/style.css', (request, response)=>{
    response.sendFile(__dirname + '/style.css')
})

app.get('/cloud.jpg', (request, response)=>{
    response.sendFile(__dirname + '/cloud.jpg')
})

app.get('/api/:ninjaName',(request,response)=>{
    const getNinja = request.params.ninjaName.toLowerCase()

    if( ninjas[getNinja] ){
        response.json(ninjas[getNinja])
    }else{
        response.json(ninjas['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

