
export const cardsModule = {
  state: ()=>({
    cards: []
  }),
  getters: {
  },
  mutations: {
    setCards(state, cards) {
      state.cards = cards
    }
  },
  actions: {
    fetchCards(context, page) {
      const cards = [
          {
            id: 1,
            word: 'forehead',
            transcrip: '[ˈfɔː.hed]',
            translate: 'лоб',
            variants: [],
            sound: '@/../sounds/forehead-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/forehead.jpg')"},
            category: 'человек',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 2,
            word: 'buttocks',
            transcrip: '[ˈbʌt̬-]',
            translate: 'ягодицы',
            variants: [],
            sound: '@/../sounds/buttocks-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/buttocks.jpg')"},
            category: 'человек',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 3,
            word: 'their',
            transcrip: '[ðer]',
            translate: 'их',
            variants: [],
            sound: '@/../sounds/their-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/their.jpg')"},
            category: 'человек',
            belong: 'местоимения',
            visibility: false
          },
          {
            id: 4,
            word: 'bruise',
            transcrip: '[bruːz]',
            translate: 'синяк',
            variants: [],
            sound: '@/../sounds/bruise-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/bruise.jpg')"},
            category: 'человек',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 5,
            word: 'dizziness',
            transcrip: '[ˈdɪzinəs]',
            translate: 'головокружение',
            variants: [],
            sound: '@/../sounds/dizziness-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/dizzines.jpg')"},
            category: 'человек',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 6,
            word: 'jealous',
            transcrip: '[ˈdʒeləs]',
            translate: 'ревнивый',
            variants: [],
            sound: '@/../sounds/jealous-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/jealous.png')"},
            category: 'человек',
            belong: 'прилагательное',
            visibility: false
          },
          {
            id: 7,
            word: 'pupil',
            transcrip: '[ˈpjuːpl]',
            translate: 'школьник',
            variants: [],
            sound: '@/../sounds/pupil-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/pupil.png')"},
            category: 'человек',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 8,
            word: 'circumstance',
            transcrip: '[ˈsɜːkəmstɑːns]',
            translate: 'обстоятельство',
            variants: [],
            sound: '@/../sounds/circumstance-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/circumstance.jpg')"},
            category: 'человек',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 9,
            word: 'narrow',
            transcrip: ' [ˈnæroʊ]',
            translate: 'узкий',
            variants: [],
            sound: '@/../sounds/narrow-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/narrow.jpg')"},
            category: 'характеристики',
            belong: 'прилагательное',
            visibility: false
          },
          {
            id: 10,
            word: 'noisy',
            transcrip: '[ˈnɔɪzi]',
            translate: 'шумный',
            variants: [],
            sound: '@/../sounds/noisy-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/noisy.jpg')"},
            category: 'характеристики',
            belong: 'прилагательное',
            visibility: false
          },
          {
            id: 11,
            word: 'near',
            transcrip: '[nɪr]',
            translate: 'близко',
            variants: [],
            sound: '@/../sounds/near-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/near.jpg')"},
            category: 'характеристики',
            belong: 'наречие',
            visibility: false
          },
          {
            id: 12,
            word: 'during',
            transcrip: ' [ˈdʊrɪŋ]',
            translate: 'во время',
            variants: [],
            sound: '@/../sounds/during-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/during.jpg')"},
            category: 'время и числа',
            belong: 'наречие',
            visibility: false
          },
          {
            id: 13,
            word: 'probably',
            transcrip: '[ˈprɑːbəbli]',
            translate: 'вероятно',
            variants: [],
            sound: '@/../sounds/probably-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/probably.png')"},
            category: 'время и числа',
            belong: 'наречие',
            visibility: false
          },
          {
            id: 14,
            word: 'cheap',
            transcrip: '[tʃiːp]',
            translate: 'дешевый',
            variants: [],
            sound: '@/../sounds/cheap-gb.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/cheap.png')"},
            category: 'время и числа',
            belong: 'прилагательное',
            visibility: false
          },
          {
            id: 15,
            word: 'backpack',
            transcrip: '[ˈbækpæk]',
            translate: 'рюкзак',
            variants: [],
            sound: '@/../sounds/backpack-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/backpack.jpg')"},
            category: 'глаголы и образ жизни',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 16,
            word: 'destination',
            transcrip: '[ˌdes.tɪˈneɪ.ʃən]',
            translate: 'пункт назначения',
            variants: [],
            sound: '@/../sounds/destination-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/destination.png')"},
            category: 'глаголы и образ жизни',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 17,
            word: 'suitcase',
            transcrip: '[ˈsjuːtkeɪs]',
            translate: 'чемодан',
            variants: [],
            sound: '@/../sounds/suitcase-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/suitcase.png')"},
            category: 'глаголы и образ жизни',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 18,
            word: 'insurance',
            transcrip: '[ɪnˈʃʊərəns]',
            translate: 'страховка',
            variants: [],
            sound: '@/../sounds/insurance-gb.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/insurance.png')"},
            category: 'глаголы и образ жизни',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 19,
            word: 'bring',
            transcrip: '[brɪŋ]',
            translate: 'приносить',
            variants: [],
            sound: '@/../sounds/bring-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/bring.jpeg')"},
            category: 'глаголы и образ жизни',
            belong: 'глагол',
            visibility: false
          },
          {
            id: 20,
            word: 'pass',
            transcrip: '[pæs]',
            translate: 'проходить',
            variants: [],
            sound: '@/../sounds/pass-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/pass.jpg')"},
            category: 'глаголы и образ жизни',
            belong: 'глагол',
            visibility: false
          },
          {
            id: 21,
            word: 'throw',
            transcrip: '[θroʊ]',
            translate: 'бросать',
            variants: [],
            sound: '@/../sounds/throw-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/throw.png')"},
            category: 'глаголы и образ жизни',
            belong: 'глагол',
            visibility: false
          },
          {
            id: 22,
            word: 'wear',
            transcrip: ' [weə(r)]',
            translate: 'носить (одежду)',
            variants: [],
            sound: '@/../sounds/wear-gb.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/wear.jpg')"},
            category: 'глаголы и образ жизни',
            belong: 'глагол',
            visibility: false
          },
          {
            id: 23,
            word: 'complain',
            transcrip: '[kəmˈpleɪn]',
            translate: 'жаловаться',
            variants: [],
            sound: '@/../sounds/complain-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/complain.jpg')"},
            category: 'глаголы и образ жизни',
            belong: 'глагол',
            visibility: false
          },
          {
            id: 24,
            word: 'disturb',
            transcrip: '[dɪˈstɜːrb]',
            translate: 'беспокоить',
            variants: [],
            sound: '@/../sounds/disturb-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/disturb.png')"},
            category: 'глаголы и образ жизни',
            belong: 'глагол',
            visibility: false
          },
          {
            id: 25,
            word: 'explain',
            transcrip: '[ɪkˈspleɪn]',
            translate: 'объяснять',
            variants: [],
            sound: '@/../sounds/explain-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/explain.jpg')"},
            category: 'глаголы и образ жизни',
            belong: 'глагол',
            visibility: false
          },
          {
            id: 26,
            word: 'also',
            transcrip: '[ˈɔːlsoʊ] ',
            translate: 'также',
            variants: [],
            sound: '@/../sounds/also-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/also.jpg')"},
            category: 'глаголы и образ жизни',
            belong: 'союз',
            visibility: false
          },
          {
            id: 27,
            word: 'laugh',
            transcrip: '[lɑːf]',
            translate: 'смеяться',
            variants: [],
            sound: '@/../sounds/laugh-gb.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/laugh.jpg')"},
            category: 'глаголы и образ жизни',
            belong: 'глагол',
            visibility: false
          },
          {
            id: 28,
            word: 'behavior',
            transcrip: '[bɪˈheɪ.vjər]',
            translate: 'поведение',
            variants: [],
            sound: '@/../sounds/behavior-gb.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/behavior.jpg')"},
            category: 'глаголы и образ жизни',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 29,
            word: 'habit',
            transcrip: ' [ˈhæbɪt]',
            translate: 'привычка',
            variants: [],
            sound: '@/../sounds/habit-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/habit.jpeg')"},
            category: 'глаголы и образ жизни',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 30,
            word: 'decide',
            transcrip: ' [dɪˈsaɪd]',
            translate: 'принимать решение',
            variants: [],
            sound: '@/../sounds/decide-gb.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/decide.jpg')"},
            category: 'глаголы и образ жизни',
            belong: 'глагол',
            visibility: false
          },
          {
            id: 31,
            word: 'expect',
            transcrip: '[ɪkˈspekt]',
            translate: 'ожидать',
            variants: [],
            sound: '@/../sounds/expect-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/expect.jpg')"},
            category: 'глаголы и образ жизни',
            belong: 'глагол',
            visibility: false
          },
          {
            id: 32,
            word: 'scissors',
            transcrip: '[ˈsɪzərz] ',
            translate: 'ножницы',
            variants: [],
            sound: '@/../sounds/scissors-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/scissors.jpg')"},
            category: 'глаголы и образ жизни',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 33,
            word: 'should',
            transcrip: '[ʃəd]',
            translate: 'должен (сделать что-то)',
            variants: [],
            sound: '@/../sounds/should-gb.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/should.png')"},
            category: 'глаголы и образ жизни',
            belong: 'глагол',
            visibility: false
          },
          {
            id: 34,
            word: 'baked',
            transcrip: '[beɪk]',
            translate: 'запеченный',
            variants: [],
            sound: '@/../sounds/baked-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/baked.jpg')"},
            category: 'еда',
            belong: 'прилагательное',
            visibility: false
          },
          {
            id: 35,
            word: 'oatmeal',
            transcrip: '[ˈəʊt.miːl]',
            translate: 'овсянка',
            variants: [],
            sound: '@/../sounds/oatmeal-gb.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/oatmeal.jpg')"},
            category: 'еда',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 36,
            word: 'cockroach',
            transcrip: '[ˈkɑːk.roʊtʃ]',
            translate: 'таракан',
            variants: [],
            sound: '@/../sounds/cockroach-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/cockroach.jpeg')"},
            category: 'животные и природа',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 37,
            word: 'windy',
            transcrip: '[ˈwɪn.di]',
            translate: 'ветрено',
            variants: [],
            sound: '@/../sounds/windy-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/vetreno.jpg')"},
            category: 'животные и природа',
            belong: 'прилагательное',
            visibility: false
          },
          {
            id: 38,
            word: 'easter',
            transcrip: '[ˈiː.stər]',
            translate: 'пасха',
            variants: [],
            sound: '@/../sounds/easter-gb.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/easter.jpeg')"},
            category: 'события и места',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 38,
            word: 'intersection',
            transcrip: '[ˌɪn.təˈsek.ʃən]',
            translate: 'перекресток',
            variants: [],
            sound: '@/../sounds/intersection-gb.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/intersection.jpg')"},
            category: 'события и места',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 39,
            word: 'socket',
            transcrip: '[ˈsɑː.kɪt]',
            translate: 'розетка',
            variants: [],
            sound: '@/../sounds/socket-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/socket.jpg')"},
            category: 'дом',
            belong: 'существительное',
            visibility: false
          },
          {
            id: 40,
            word: 'wardrobe',
            transcrip: '[ˈwɔːr.droʊb]',
            translate: 'шкаф',
            variants: [],
            sound: '@/../sounds/wardrobe-us.mp3',
            mnemoText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus libero nostrum veritatis, odit laborum saepe amet aperiam blanditiis dolorem nemo.',
            picture: {backgroundImage: "url('@/../images/wardrobe.jpg')"},
            category: 'дом',
            belong: 'существительное',
            visibility: false
          },
        
      ]
      let arr = []
      if (page) {
        let excludedArr = []
        if (this.state.user.activeStep === 0) {
          excludedArr = [...this.state.user.step1, ...this.state.user.step2, ...this.state.user.step3, ...this.state.user.step4, ...this.state.user.complete]
        }
        if (this.state.user.activeStep === 1) {
          excludedArr = [...this.state.user.step2, ...this.state.user.step3, ...this.state.user.step4, ...this.state.user.complete]
        }
        if (this.state.user.activeStep === 2) {
          excludedArr = [...this.state.user.step3, ...this.state.user.step4, ...this.state.user.complete]
        }
        if (this.state.user.activeStep === 3) {
          excludedArr = [...this.state.user.step4, ...this.state.user.complete]
        }
        if (this.state.user.activeStep === 4) {
          excludedArr = [...this.state.user.complete]
        }
        
        if ((page*10 - cards.length) > 10) {
          arr =false
        }else {
          if (cards.length < page*10) {
            let startPosition = (page-1)*10
            let ostatok = cards.length%10
            for (let i= startPosition; i< (startPosition + ostatok); i++) {
              if (!excludedArr.includes(cards[i].id)) {
                arr.push(cards[i])
              }
            }
          } else {
            for (let i = (page*10 - 10); i<(page*10); i++) {
              if (!excludedArr.includes(cards[i].id)) {
                arr.push(cards[i])
              }
            }
          }
        }
      } else { arr = cards}
      
    context.commit('setCards', arr)
    }
  },
  namespaced: true
}