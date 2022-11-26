export const usersModule = {
  state: ()=>({
    users: [
      {
        id: 444,
        nickName: 'Olya_ya',
        name: 'Olya',
        mail: 'Olya@mail.ru',
        registrDate: '29.02.2022',
        lastSeen: '29.03.2022',
        session: [
          {
            startedSession: new Date('September 02, 2020 15:10:05'),
            endSession: new Date('September 04, 2020 19:11:05')
          },
          {
            startedSession: new Date('September 03, 2020 15:10:05'),
            endSession: new Date('September 03, 2020 19:20:15')
          }
        ],
        senseis: [
        {
          id: 333,
          name: 'olina-mama',
          nickName: 'mama',
          confirmSensei: false
        },
        {
          id: 222,
          name: 'olina-papa',
          nickName: 'papa',
          confirmSensei: true
        }
      ],
        childs: [
          {
            id: 444,
            name: 'olina-do4ka',
            nickName: 'do4ka',
            confirmChild: true
          },
          {
            id: 333,
            name: 'olin-suno4ek',
            nickName: 'suno4ek',
            confirmChild: false
          },
          {
            id: 555,
            name: 'olin-vnu4ok',
            nickName: 'vnu4ka',
            confirmChild: true
          }
        ],
        step1: [12, 22, 33],
        step2: [21, 11],
        step3: [],
        step4: [],
        complete: [],
        learnedLastSession:[21, 11],
        exercise: []
      },
      {
        id: 333,
        nickName: 'inna_ya',
        name: 'inna',
        mail: 'inna@mail.ru',
        registrDate: '22.02.2012',
        lastSeen: '22.05.2022',
        session: [
          {
            startedSession: new Date('September 02, 2020 15:10:05'),
            endSession: new Date('September 04, 2020 18:11:05')
          },
          {
            startedSession: new Date('September 03, 2020 15:10:05'),
            endSession: new Date('September 03, 2020 18:20:15')
          }
        ],
        senseis: [
        {
          id: 333,
          name: 'innina-mama',
          nickName: 'mama',
          confirmSensei: false
        },
        {
          id: 222,
          name: 'innina-papa',
          nickName: 'papa',
          confirmSensei: true
        }
      ],
        childs: [
          {
            id: 444,
            name: 'innina-do4ka',
            nickName: 'do4ka',
            confirmChild: true
          },
          {
            id: 333,
            name: 'innin-suno4ek',
            nickName: 'suno4ek',
            confirmChild: false
          },
          {
            id: 555,
            name: 'innin-vnu4ok',
            nickName: 'vnu4ka',
            confirmChild: true
          }
        ],
        step1: [2, 22, 44, 55, 66, 77],
        step2: [13, 14, 45],
        step3: [67],
        step4: [89],
        complete: [5, 17, 18],
        learnedLastSession:[2, 22, 44, 55, 66, 77],
        exercise: []
      },
      {
        id: 555,
        nickName: 'ira_ya',
        name: 'ira',
        mail: 'ira@mail.ru',
        registrDate: '22.07.2022',
        lastSeen: '22.08.2022',
        session: [
          {
            startedSession: new Date('September 02, 2020 15:10:05'),
            endSession: new Date('September 04, 2020 17:11:05')
          },
          {
            startedSession: new Date('September 03, 2020 15:10:05'),
            endSession: new Date('September 03, 2020 17:20:15')
          }
        ],
        senseis: [
        {
          id: 333,
          name: 'irina-mama',
          nickName: 'mama',
          confirmSensei: false
        },
        {
          id: 222,
          name: 'irina-papa',
          nickName: 'papa',
          confirmSensei: true
        }
      ],
        childs: [
          {
            id: 444,
            name: 'irina-do4ka',
            nickName: 'do4ka',
            confirmChild: true
          },
          {
            id: 333,
            name: 'irin-suno4ek',
            nickName: 'suno4ek',
            confirmChild: false
          },
          {
            id: 555,
            name: 'irina-vnu4ka',
            nickName: 'vnu4ka',
            confirmChild: true
          }
        ],
        step1: [2, 22, 33, 44, 55, 66, 77],
        step2: [1],
        step3: [4],
        step4: [3],
        complete: [5, 44,55, 66, 77, 88],
        learnedLastSession:[2, 22, 33, 44, 55, 66, 77],
        exercise: []
      }
    ]
  }),
  mutations: {
    setUserExercise(state, obj) {
      state.users.forEach(item=>{
        const {id, array} = obj
        if (item.id === id) {
          for (let i = 0; i < array.length; i++) {
            if (!item.exercise.includes(array[i])){
              item.exercise.push(array[i])
            }
          }
        }
      })
    }
  }
}