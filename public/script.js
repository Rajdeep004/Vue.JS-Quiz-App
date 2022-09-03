const app = Vue.createApp({
    data(){
        return {
            count: 3, // Count of total number of question
            idx: 0, // index to iterate
            correctAns: 0,
            wrongAns: 0,
            selectedAns:'',
            ques:[
                {
                    que:"What is my name?",
                    options:{a:"Raju",b:"Sunny",c:"Rajdeep",d:"All of the above"},
                    ans:'d'
                },
                {
                    que:"What is my age?",
                    options:{a:"17",b:"18",c:"19",d:"20"},
                    ans:'b'
                },
                {
                    que:"What is my favourite language?",
                    options:{a:"C++",b:"JavaScript",c:"Python",d:"Dart"},
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