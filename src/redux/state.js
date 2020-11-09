let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'It is my first post', likesCount: 12},
            {id: 2, message: 'How are you?', likesCount: 10},
            {id: 3, message: 'Nice, thanks', likesCount: 19}
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Maria'},
            {id: 2, name: 'Nick'},
            {id: 3, name: 'Jhon'},
            {id: 4, name: 'Daniil'},
            {id: 5, name: 'Vlad'},
            {id: 6, name: 'Genry'},
            {id: 7, name: 'Tom'},
            {id: 8, name: 'Lera'},
            {id: 9, name: 'Lara'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'hello'},
            {id: 3, message: 'good'},
            {id: 4, message: 'bye'},
            {id: 5, message: 'luck'}
        ]
    },
    teamsPage: {
        teamsData: [
            {id: 1, name: 'it-school', sub: 25, posts: 120},
            {id: 2, name: 'new films', sub: 1178, posts: 1190},
            {id: 3, name: 'GOTY', sub: 567, posts: 566},
            {id: 4, name: 'library', sub: 208, posts: 240},
            {id: 5, name: 'tutorials', sub: 157, posts: 435}
        ]
    }
}

export default state;