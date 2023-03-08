const model = {

    app: {
        currentPage: 'login',
        isLoggedIn: false
    },


//site data
    inputs: {
        loginPage: {
            username: '',
            password: ''
        },
        dashboardPage: {
            //ha egen avslutt og gjenåpningsknapp, så vi trenger ikke ta vare på pollId
        },
        constructionPage: { //questionFields[0] vil korrespondere til answerFields[0]
            titleField: '',
            questionFields: [
                              {questionText: '',
                              isMultipleChoice: false}],

            answerFields: [
                ['someAnswer', 'someOtherAnswer'] //push en ny array til answerfields for et nytt spørsmål
            ]                   //iterer gjennom answerFields for å tegne opp valgalternativ per spørsmål
        },
        sendingPage: {
            newEmailToAdd: '',
            mailingListIndices: [] //Bruk denne til å se gjennom mailingList og velge ut hvem som skal motta mail
        },
        editingPage: {
            pollId: null,
            titleField: '',
            questionFields: [
                              {questionText: '',
                              isMultipleChoice: false}],

            answerFields: [
                ['someAnswer', 'someOtherAnswer'] //push en ny array til answerfields for et nytt spørsmål
            ]                   //iterer gjennom answerFields for å tegne opp valgalternativ per spørsmål
        },
        answeringPage: {
            answers: [ //push arrayer med indekser som er svart. Det blir flere indekser for multiple choice
            
            ]
        },
        resultsPage: {

        },
    },


//question data
    polls: [
        {
            id: 0, title: 'Julebord', isOngoing: false, replyCount: 0, questions: [
                {
                    questionText: 'Hvor?', isMultipleChoice: true, answers: [
                        { answerText: 'Fridas Kafé', isChecked: false, replyCount: 0 },
                        { answerText: 'McDonalds', isChecked: false, replyCount: 0 }
                    ]
                },
                {
                    questionText: 'Vegetar?', isMultipleChoice: false, replyCount: 0, 
                        questions: [
                        { answerText: 'Ja', isChecked: true, replyCount: 0 },
                        { answerText: 'Nei', isChecked: false, replyCount: 0 }
                    ]
                }
            ]
        },

    ],

    mailingList: [
        'eksempel@gmail.com',
        'eksempel@hotmail.com'
    ],
    
    admin: {userName: 'admin', password: 'admin'}

}