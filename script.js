const app = Vue.createApp({
    data(){
        return {
            count: 10, // Count of total number of question
            idx: 0, // index to iterate
            correctAns: 0,
            wrongAns: 0,
            selectedAns:'',
            ques:[
                {
                    que:"What is capital of India?",
                    options:{a:"Mumbai",b:"Ahmedabad",c:"Jaipur",d:"Delhi"},
                    ans:'d'
                },
                {
                    que:"Which one is not a leap year?",
                    options:{a:"2020",b:"3000",c:"2000",d:"2048"},
                    ans:'b'
                },
                {
                    que:"Which is fastestt executable language?",
                    options:{a:"C++",b:"JavaScript",c:"Python",d:"Dart"},
                    ans:'a'
                },
                {
                    que:"Home Minister of India : ",
                    options:{a:"Rahul Gandhi",b:"Narendra Modi",c:"Amit Shah",d:"Arvind Kejariwal"},
                    ans:'c'
                },
                {
                    que:"Which among the following headstreams meets the Ganges in last?",
                    options:{a:"Alaknanda",b:"Pindar",c:"Mandakini",d:"Bhagirathi"},
                    ans:'d'
                },
                {
                    que:"The metal whose salts are sensitive to light is?",
                    options:{a:"Zinc",b:"Silver",c:"Copper",d:"Aluminum"},
                    ans:'b'
                },
                {
                    que:"Patanjali is well known for the compilation of –",
                    options:{a:"Yoga Sutra",b:"Panchatantra",c:"Brahma Sutra",d:"Ayurveda"},
                    ans:'a'
                },
                {
                    que:"River Luni originates near Pushkar and drains into which one of the following?",
                    options:{a:"Rann of Kachchh",b:"Arabian Sea",c:"Gulf of Cambay",d:"Lake Sambhar"},
                    ans:'a'
                },
                {
                    que:"Which one of the following rivers originates in Brahmagiri range of Western Ghats?",
                    options:{a:"China",b:"India",c:"Russia",d:"France"},
                    ans:'c'
                },
                {
                    que:"Tsunamis are not caused by",
                    options:{a:"Hurricanes",b:"Earthquakes",c:"Undersea landslides",d:"Volcanic eruptions"},
                    ans:'a'
                }
            ]
        }
    },
    methods: {
        answered(e){
            this.selectedAns = e.target.value
            if (this.selectedAns==this.ques[this.idx]['ans'])
                this.correctAns++
            else this.wrongAns++
            console.log(this.correctAns+" "+this.wrongAns)
        },
        nextQue(){
            this.idx++
            this.selectedAns = ''
        },
        showResult(){
            this.idx++
        },
        resetQuiz(){
            this.idx = 0
            this.selectedAns = ''
            this.correctAns = 0
            this.wrongAns = 0
        }
    }
})

app.mount('#app')
