import {ref, onMounted} from 'vue'

export function useUsers(redactedWords, wordsToExercise) {
  const user = {
    id: 12345,
    nickName: 'Wasya_ya',
    name: 'Wasilii',
    mail: 'mail@mail.ru',
    registrDate: '22.02.2022',
    lastSeen: '22.03.2022',
    session: [
      {
        startedSession: new Date('September 02, 2020 15:10:05'),
        endSession: new Date('September 04, 2020 16:11:05')
      },
      {
        startedSession: new Date('September 03, 2020 15:10:05'),
        endSession: new Date('September 03, 2020 15:20:15')
      }
    ],
    senseis: [
    {
      id: 333,
      name: 'Irina',
      nickName: 'mama',
      confirmSensei: false
    },
    {
      id: 222,
      name: 'Alexander',
      nickName: 'papa',
      confirmSensei: true
    }
  ],
    childs: [
      {
        id: 444,
        name: 'Valentina',
        nickName: 'do4ka',
        confirmChild: true
      },
      {
        id: 333,
        name: 'Denis',
        nickName: 'suno4ek',
        confirmChild: false
      },
      {
        id: 555,
        name: 'Vika',
        nickName: 'vnu4ka',
        confirmChild: true
      }
    ],
    step1: [],
    step2: [],
    step3: [],
    step4: [],
    complete: [],
    learnedLastSession:[],
    exercise: [],
    exam: {
      firstTry: false,
      enabled: false,
      counter: 0,
      correctAnswerIds: []
    }
  }
  const usersArray = [
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
  const myDialogVisible = ref(false)
  const users = ref([])
  const showsBlocks = ref([])
  const userFindOption = ref('')
  const userSearchRow = ref('')
  const sessionAllTime = ref(0)
  const lastSession = ref(0)
  const childs = ref([])
  const destinations = ref([])
  const seenInfoChild = ref([])
  const showUserInfo = (id)=> {
    const arr = []
    if (showsBlocks.value.includes(id)) {
      showsBlocks.value.forEach((item)=>{
        if (item !== id) {
          arr.push(item)
        }
      })
    } else {showsBlocks.value.push(id)
        return 
      }
    showsBlocks.value = arr
  }
  const findUsers = () => {
    let arr = []
    if (userFindOption.value === 'all') {
      arr = usersArray
    } if (userFindOption.value === 'id') {
      usersArray.forEach((el)=>{
        if (el.id === parseInt(userSearchRow.value)){
          arr.push(el)}})
    }  if (userFindOption.value === 'mail') {
      usersArray.forEach((el)=>{
        if (el.mail === userSearchRow.value){
          arr.push(el)}})
    } 
    users.value = arr
  }
  const findChild = (id)=> {
    users.value = usersArray
    console.log(id);
    let arr = [];
    console.log(users.value);
    users.value.forEach(item => {
      if (item.id === id) {
        arr.push(item)
      }
    })
    seenInfoChild.value = arr
    howLongLastSession()
    allTimeOnExercise()
  }
  const howLongLastSession = () =>{
    console.log(seenInfoChild.value);
    if (seenInfoChild.value[0].session[seenInfoChild.value[0].session.length - 1].endSession) {
      lastSession.value = seenInfoChild.value[0].session[seenInfoChild.value[0].session.length - 1].endSession - seenInfoChild.value[0].session[seenInfoChild.value[0].session.length - 1].startedSession
    } else {
      lastSession.value = seenInfoChild.value[0].session[seenInfoChild.value[0].session.length - 2].endSession - seenInfoChild.value[0].session[seenInfoChild.value[0].session.length - 2].startedSession
    }
  }
  const allTimeOnExercise = () =>{
    sessionAllTime.value = 0
    seenInfoChild.value[0].session.forEach((item)=>{
      if (item.endSession){
        sessionAllTime.value += item.endSession - item.startedSession
      }
    })
  }
  const addToSendExerciseList = (id)=> {
    childs.value.forEach(item=>{
      if (item.id === id) {
        destinations.value.push(item)
      }
    })
  }
  const delForDestinations = (id)=> {
    let arr = []
    for (let i=0; i<destinations.value.length; i++) {
      if (destinations.value[i].id !== id) {
        arr.push(destinations.value[i])
      }
    } destinations.value = arr
  }
  const sendExercise = () =>{
    destinations.value.forEach(item=>{
      for (let i = 0; i < users.value.length; i++) {
        if (users.value[i].id === item.id) {
          const obj = {}
          obj.id = users.value[i].id
          obj.array = []
          for (let j = 0; j < wordsToExercise.value.length; j++) {
            obj.array.push(wordsToExercise.value[j].id)
          }
          users.value.forEach(item=>{
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
    })

    destinations.value = []
    wordsToExercise.value = []
    redactedWords.value = []
    myDialogVisible.value = true
    setTimeout(()=>{
    myDialogVisible.value = false
    }, 1700)
  }

  onMounted(() => {
    user.childs.forEach(item=>{
      if (item.confirmChild) {
        childs.value.push(item)
      }
    })
  })
  return {
    users,
    findUsers,
    showUserInfo,
    userSearchRow,
    userFindOption,
    showsBlocks,
    findChild,
    howLongLastSession,
    allTimeOnExercise,
    addToSendExerciseList,
    delForDestinations,
    sendExercise,
    sessionAllTime,
    lastSession,
    childs,
    destinations,
    seenInfoChild,
    myDialogVisible
  }
}