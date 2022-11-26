import { createStore } from "vuex";
import { userModule } from "./userModule";
import { cardsModule } from "./cardsModule";
import { usersModule } from "./usersModule";


export default createStore({
  state: ()=>({
  }),
  modules: {
    user: userModule,
    cards: cardsModule,
    users: usersModule

  }
})
