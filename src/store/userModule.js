
export const userModule = {
  state: ()=>({
    isAuth: false,
    name: '',
    id: null,
    registrDate: null,
    lastSeen: '',
    session: [],
    senseis: [],
    childs: [],
    step1: [],
    step2: [],
    step3: [],
    step4: [],
    complete: [],
    activeStep: 1,
    role: 'admin',
    exercise: [],
    exam: {
      
    }
  }),
  getters: {
  },
  mutations: {
    setAuth(state) {
      state.isAuth = true
    },
    setId(state, id) {
      state.id = id
    },
    setName(state, name) {
      state.name = name
    },
    setNickName(state, nickname) {
      state.nickName = nickname
    },
    setMail(state, mail) {
      state.mail = mail
    },
    setSenseis(state, senseis) {
      state.senseis = senseis
    },
    setChilds(state, childs) {
      state.childs = childs
    },
    setLastSeen(state) {
      state.lastSeen = new Date().toLocaleString()
      state.session.push({
        startedSession: new Date(),
        endSession: null
      })
    },
    setUpdateLastSeen(state) {
      state.session[state.session.length - 1].endSession = new Date()
    },
    setStep1(state, stepOne) {
      state.step1 = stepOne
    },
    setStep2(state, stepTwo) {
      state.step2 = stepTwo
    },
    setStep3(state, stepThree) {
      state.step3 = stepThree
    },
    setStep4(state, stepFour) {
      state.step4 = stepFour
    },
    setComplete(state, complete) {
      state.complete = complete
    },
    acceptAnswerStep1(state, item) {
      state.step1.push(item)
    },
    acceptAnswerStep2(state, item) {
      state.step2.push(item)
    },
    acceptAnswerStep3(state, item) {
      state.step3.push(item)
    },
    acceptAnswerStep4(state, item) {
      state.step4.push(item)
    },
    clearAnswerFromStep1(state, item) {
      state.step1 = state.step1.filter((el)=>{if (el !== item){return item}})
    },
    clearAnswerFromStep2(state, item) {
      state.step2 = state.step2.filter((el)=>{if (el !== item){return item}})
    },
    clearAnswerFromStep3(state, item) {
      state.step3 = state.step3.filter((el)=>{if (el !== item){return item}})
    },
    clearAnswerFromStep4(state, item) {
      state.step4 = state.step4.filter((el)=>{if (el !== item){return item}})
    },
    cardComplete(state, id) {
      state.complete.push(id)
    },
    setConfirmSensei(state, id) {
      state.senseis.forEach(element => {
        if (element.id === id) {
          element.confirmSensei = true
        }
      });
    },
    setActiveStep(state, num) {
      state.activeStep = num
    },
    setRegistrDate(state, date) {
      state.registrDate = date
    }, 
    setSession(state, arr) {
      state.session = arr
    },
    setExercise(state, arr) {
      state.exercise = arr
    },
    setExerciseStep(state, num) {
      state.exercise[0].step = num
    },
    exerciseToComplete(state, arr) {
      arr.forEach(item=>{state.complete.push(item)})
      state.exercise.shift()
    },
    setExam(state, item) {
      state.exam = item
    },
    setExamDisabled(state) {
      state.exam.enabled = false
    },
    setExamEnabled(state, bool) {
      state.exam.enabled = bool
    },
    setExamFirstTryConfirm(state, bool) {
      state.exam.firstTry = bool
    },
    setAddExamCorrectAnswer(state, id) {
      state.exam.correctAnswerIds.push(id)
    }, 
    setExamCounter(state) {
      state.exam.counter++
    }
  },
  actions: {
    getUser(context) {
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
        context.commit('setId', user.id)
        context.commit('setName', user.name)
        context.commit('setNickName', user.nickName)
        context.commit('setMail', user.mail)
        context.commit('setStep1', user.step1)
        context.commit('setStep2', user.step2)
        context.commit('setStep3', user.step3)
        context.commit('setStep4', user.step4)
        context.commit('setComplete', user.complete)
        context.commit('setAuth')
        context.commit('setRegistrDate', user.registrDate)
        context.commit('setSenseis', user.senseis)
        context.commit('setChilds', user.childs)
        context.commit('setSession', user.session)
        context.commit('setLastSeen'),
        context.commit('setExercise', user.exercise)
        context.commit('setExam', user.exam)
        context.commit('setExamDisabled')

    }
  },
  namespaced: true
}