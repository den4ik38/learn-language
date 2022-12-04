<template>
  <div class="wrapper">
    <div class="first-setion">
      <div class="first-line">
        <ul class="first-line__linked-list">
          <li class="first-line__link-item"> <a href="" class="first-line__link">Как правильно работать с карточками</a> </li>
          <li class="first-line__link-item"> <a href="" class="first-line__link">Как проходить тесты</a> </li>
          <li class="first-line__link-item"> <a href="" class="first-line__link">Родителям, репетиторам и учителям</a> </li>
        </ul>
      </div>
      <div class="second-line">
        <div class="info-container">
          <div class="info-container__section info-container__section_big-font">Используй эффективно</div>
          <hr class="separator">
          <div class="info-container__section info-container__section_low-font">Просмотрите эту инструкцию, чтобы ваше обучение было максимально продуктивным</div>
        </div>
      </div>
      <div class="third-line"></div>
    </div>



    <div class="main-container">

      <div class="paper">
        <div id="second" class="second__title">Вкладка "Учить"</div>
        <div class="second__subtitle">Начните ваше обучение со страницы "Учить". Карточки слов устроены таким образом, 
          чтобы образовать максимальное количество ассоциативных связей, между словом и его значением. 
          Для полноценного запоминания вам потребуется около одной минуты на изучение каждой карточки. 
        </div>
        <img src="../../public/polaroid-ticket.webp" alt="" class="photo">
        <p>1. Прочтите слово, его транскрипцию и перевод. Если у вас существуют проблема с чтением транскрипции,
            нажмите на "Произношение". Прослушайте произношение слова несколько раз, после каждого прослушивания, постарайтесь воспроизвести
            произношение максимально точно. Проговаривайте вслух, это очень важно.
        </p>
        <p>
          2. Обратите внимание на цвет слова и выделение. Цвет текста характеризует категорию, к которой слово относится. 
            в шапке карточки вы видите название категории, все слова которой, будут выделены этим цветом. Эти цевтовые подсказки 
            будут доступны вам в первых раундах тестирования на запоминание. Выделение же текста, характеризует частиречную принадлежность
            слова. В шапке вы также можете наблюдать, как будут выделены слова, принадлежащие к той или иной части речи. Подсказки выделения
            будут доступны вам в первом раунде тестирования. Большинство выделений частиречной принадлежности знакому вам со школы.
        </p>
        <p>
          3. Обратите внимания на изображение. На картинке будет продимонстрировано значение запоминаемого слова. Повторите произношение на английском
            два-три раза рассматривая картинку, будет здорово если вы отметите какие нибудь особенности изображения. На изображении для примера, меня, к примеру, 
            смутила неправильная анатомия стопы.
        </p>
        <p>
          4. И наконец самый эффективный прием запоминания иностранных слов - мнемотекст. Мнемотекст, это описание, связывающее произношение слова на английском,
            с чем то созвучным из привычного вам языка и переводом слова. Для эффективной работы приема, нужно как можно глубже прочувствовать ассоциацию, 
            представить ее в своем воображении, наделить ее яркими деталями. В идеале даже связать ее со всеми органами чувств. Однажды, я демонстрировал эффективность этого приема моему другу.
            Для демонстрации я выбрал слово 'adventure' (эдвенчур - если грубо), я сказа следующее: С чем бы могло быть созвучно это слово? Одуванчик! Смотри Adventure переводится как приключение,
            а созвучно в русском с одуванчиком. Нам нужно связать ассоциацию произношения со значением. Представь себе огромную-огромную поляну, где то посреди леса. В какую сторону не посмотри,
            все-все пространство, до самого леса, усеяно плотным ковром ярко-желтых одуванчиков. И посреди этой поляны стоишь ты. Как тебе больше нравится?
            Ты видишь все из глаз или смотришь на себя со стороны? В одной руке ты держишь палку, которая лежит у тебя на плече, а на конце этой палки узелок, с какими то вещами или едой. Теперь представь всю описанную картину целиком.
            Ты чувствуешь запах? Чувстввуешь, как греет солнышко? Как легкий ветер обдувает тебя и колышит море одуванчиков? После мы поговорили на отвелеченные темы еще какое-то время. Спустя неделю,
            я спросил его перевод слова, и он легко его вспомнил, как вспомнил его через месяц, а потом и через три. Я уверен, что он и сейчас его помнит.
        </p>
        <p>
          5. За один подход изучайте не менее 10 слов. Все изученные карточки перейдут в раздел тестов. И когда вы перейдете на страницу тестов, в первую очередь, для тестирования приложение вам покажет слова именно из пройденных карточек.
        </p>
        <p>
          P.S. Большиство людей уже знают те или иные слова. Как минимум, почти каждый знает как переводится "mother", "father", "cat", "dog" и многие другие.
            Встречая такие слова, перед тем как нажать на кнопку "Запомнил >>", поставьте галочку "Я знаю это слово", тогда карточка уйдет сразу же на споледний раунд тестирования и вам не надо будет каждый раз отвечать на и без того известное слово.
        </p>
      </div>

      <div class="paper">
        <div id="third" class="second__title">Тесты</div>
        <div class="second__subtitle">
          Некоторым для запоминания проще несколько раз прогнать слово в тестах, чем учить слова по карточкам. ОДнако, лучше использовать и то и другое.
        </div>
        <img src="../../public/polaroid.webp" alt="" class="photo photo_replace">
        <p>
          Процесс запоминания на тестах построен на 4 раундах. С каждым новым рандом с карточек будет исчезать одна из подсказок.
              В случае правильного ответа, карточка записывается на следующий раунд. Слово считается выученным, если вы ответили на 
              карточку правильно во всех раундах. Возможность переходить на раунды выше первого, открывается, когда на этом уровне 
              скапливается не менее 10 карточек. В первом раунде вам также доступна кнопка "Я знаю это слово".
        </p>
        <p>
          В первом раунде, вам доступны:, картинка, подсказки выделения и цветовые подсказки. Нажмите на "подсказки выделения" или "цветовые подсказки",
              чтобы появилось напоминание, какой цвет или какое выделение на что указывают. Во втором раунде, пропадает выделение, на третьем цвета, 
              на четвертом из теста исчезнет и картинка. 
        </p>
        <p>
          В случае неправильного ответа, появится кнопка "Показать правильный ответ". нажав на нее, вы сможете повторно просмотреть карточку слова. 
              Возможность посмотреть карточку в случае неправильного ответа, появляется во всех раундах и даже на "экзамене".
        </p>
        <p>
          Также в тестах доступна еще одна функция - "Экзамен". При первом прохождении экзамена, помимо подсчета вашей результативности, все слова на которые вы ответите правильно, 
              будут считаться выученными и больше не попадутся вам в тестах. На "Экзамене" все подсказки недоступны.
        </p>
      </div>
    </div>





    
    
    <div class="section fourth">
      <div id="fourth" class="second__title">Родителям, учителям и репетиторам</div>
      <div class="second__subtitle">Смотрите за прогрессом своих подопечных, выдавайте задания, отслеживайте выполнение.</div>
      <div class="item__container">
        <div class="item__text">1. Пройдите по ссылке своего профиля. Доступ к профилю доступен только после регистрации.</div>
        <img src="../../public/images/nav.png" alt="" class="item__img">
      </div>
      <div class="item__container">
        <div class="item__text">2. Прокрутите страницу профиля до раздела подопечные аккаунты. В строку поиска введите id аккаунта вашего подопечного и нажмите кнопку "Запросить подтверждение".
          Вы сможете просматривать информацию подопечного аккаунта, как только владелец аккаунта подтвердит ваше наставничество. А в навигационном меню появится раздел "Учительская".
        </div>
        <img src="../../public/images/childs.png" alt="" class="item__img">
      </div>
      <div class="item__container">
        <div class="item__text">3. На странице "Учительской", во вкладке "Информация об учениках" вы можете отслеживать прогресс ваших учеников, посмотреть время и длительность последнего посещение, а также следить за ходом выполнения, выданного вами задания.
          В этом списке ученик появится только после того, как подтвердит ваше наставничество. Кликните по имени в списке, чтобы просмотреть информацию.
        </div>
        <img src="../../public/images/childs-info.png" alt="" class="item__img">
      </div>
      <div class="item__container">
        <div class="item__text">4. Во вкладке "Создать задание" в строке поиска введите слово или часть слова, которое хотите добавить в задание. В списке ниже появятся слова содержащие поисковый запрос. 
          При помощи клика добавьте нужное слово в список длч выдачи задания. Настояьтельно рекомендуем давать в задании не менее 10 слов. Лучше всего около 20.
        </div>
        <img src="../../public/images/find-words.png" alt="" class="item__img">
      </div>
      <div class="item__container">
        <div class="item__text">5. Из списка подтвежденных учеников выберите тех, кому хотите выдать сформированное задание и нажмите на кнопку "Отправить". После отправки вы сможете отслеживать прогресс выполнения во вкладке "Информация об учениках"
        </div>
        <img src="../../public/images/send-quest.png" alt="" class="item__img">
      </div>
      <div class="item__container">
        <div class="item__text">6. Чтобы получить возможность добавлять новые слова, необходимо получить права модератора. На данный момент, такие права могу выдать только я. Для этого можете написать мне в социальных сетях, ссылки на профиль есть в конце страницы.
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
    methods: {
      routerWithParam(param) {
        this.$store.commit('user/setActiveStep', param)
        switch(param) {
          case 0:
            this.$router.push('/learn-page')
            break;
          case 1: 
            this.$router.push('/test-page')
            break;
        }
      },
    }
}
</script>
<style scoped>

  .wrapper {
    width: 100%;
    margin: 0 auto;
    min-height: calc(100vh - 140px);
  }
  .first-line {
    width: 100%;
    max-width: 1000px;
    padding: 20px;
    margin: 0 auto;
  }
  .first-line__linked-list {
    display: flex;
    list-style-type: none;
    overflow: hidden; top: 15px; left: 0; width: 0;
  text-align: right; white-space: nowrap;
  animation: wow 1s linear forwards;
  }
  .first-line__link-item {
    margin-left: 25px;
  }
  .first-line__link {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  .first-line__link:hover {
    color: #3b7b2b;
  }
  .second-line {
    width: 100%;
    min-height: 450px;
    background-image: url('../../public/correct.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
  }
  .info-container {
    width: 800px;
    height: 200px;
    position: absolute;
    left: calc(50% - 400px);
    bottom: -100px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding: 15px;
    align-items: center;
    opacity: 0;
    animation: born 1.5s forwards;
  }
  .info-container__section {
    width: 40%;
  }
  .info-container__section_big-font {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }
  .info-container__section_low-font {
    font-size: 21px;
    line-height: 1.4;
  }
  .separator {
    background-color: crimson;
    width: 5px;
    height: 170px;
  }
  .third-line {
    width: 100%;
    min-height: 200px;
    background-color: lightgrey;
  }


  .main-container {
    background-image: url('../../public/cats.jpg');
    background-repeat: repeat;
    padding: 40px 0;
  }
  .paper {
    background-color: white;
    width: 100%;
    max-width: 1000px;
    margin: 40px auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    position: relative;
    z-index: 4;
    padding: 40px;
    padding-bottom: 60px;
  }
  .paper:before, .paper:after {
  content: "";
  height: 98%;
  position: absolute;
  width: 100%;
  z-index: -1;
  }
  .paper:before {
    background: #fafafa;
    box-shadow: 0 0 8px rgba(0,0,0,0.4);
    left: -5px;
    top: 4px;
    transform: rotate(-2.5deg);
  }
  .paper:after {
    background: #f6f6f6;
    box-shadow: 0 0 3px rgba(0,0,0,0.4);
    right: -3px;
    top: 1px;
    transform: rotate(1.4deg);
  }

  .paper p {
    margin-top: 20px;
  }
  .photo {
  width: 400px;
  height: 500px;
  border-radius: 25px;
  box-shadow: 0 0 8px grey;
  float: right;
  transform: rotate(-8deg)translateX(100px);
}

.photo_replace {
  float: left;
  transform: rotate(8deg)translateX(-100px);
}


.second__title {
  padding-top: 30px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}
.second__subtitle {
  text-align: center;
  font-size: 20px;
  margin: 30px auto 0;
  max-width: 1024px;
}

.fourth {
  background: linear-gradient(-45deg, #52cfee, #4787e7, #1ca94b, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
  color: white;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
.item__container {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 15px auto 0;
  padding: 15px;
}
.item__text {
  margin: 15px auto;
  text-align: center;
  max-width: 1024px;
  font-size: 18px;
}
.item__img {
  max-width: 1024px;
  margin: 20px auto;
  width: -webkit-fill-available;
}

@keyframes born {
  0%{opacity: 0;}
  100%{opacity: 1;}
}
@keyframes wow {
  0% {width: 0;}
  100% { width: 100%;}
}
</style>