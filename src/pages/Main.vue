<template>
  <div class="wrapper">
    <div class="first-setion">
      <div class="first-line">
        <ul class="first-line__linked-list">
          <li class="first-line__link-item"><router-link class="first-line__link" to="/how-to-use#second" >Запоминаем правильно</router-link> </li>
          <li class="first-line__link-item"><router-link class="first-line__link" to="/how-to-use#third" >Тесты</router-link> </li>
          <li class="first-line__link-item"><router-link class="first-line__link" to="/how-to-use#fourth" >Родителям & наставникам</router-link> </li>
        </ul>
      </div>
      <div class="second-line">
        <div class="info-container">
          <div class="info-container__section info-container__section_big-font">Всего 1000 слов для вашего комфорта</div>
          <hr class="separator">
          <div class="info-container__section info-container__section_low-font">Лексический минимум в 1000 слов даст вам возможность разговаривать в любой англоговорящей стране на бытовом уровне</div>
        </div>
      </div>
      <div class="third-line"></div>
    </div>
  </div>
  <div class="steps-section">
    <div class="steps__title-contaner">
      <div class="steps__title-wrapper">
        <div class="steps__title">Несколько шагов необходимых для эффективного изучения языка</div>
      </div>
      <div class="steps__title-clear-block"></div>
    </div>
    <div class="steps__container">
      <div class="steps__items">
        <h2 class="steps__subtitle">Сделайте свое обучение максимально комфортным, наглядным и эффективным. Следуйте этой короткой инструкции</h2>
        <div class="step step-right">
          <span ref="observer" class="step__number">Шаг 1</span>
          <div ref="step1" class="step__content step1">
            <span class="step__item-title">Регистрация</span>
            <img src="../../public/reg-form.png" alt="" class="step__item-img">
            <div class="step__item-descr">
              <h3 class="step__item-descr-title">Выгоды регистрации</h3>
              <p class="step__item-descr-text">Чтобы приложение могло сохранять ваши прогресс вы должны быть авторизованы. Вам откроется доступ к личному кабинету, а также вам будет доступен родительский контроль и/или возможность иметь наставника</p>
              <a href="" class="step__item-descr-link">Страница регистрации</a>
            </div>
          </div>
        </div>
        <div class="step step-left">
          <span ref="observer2" class="step__number step__number_replace">Шаг 2</span>
          <div ref="step2" class="step__content step1">
            <span class="step__item-title step__item-title_replace">Подготовка</span>
            <img src="../../public/efficiency.png" alt="" class="step__item-img">
            <div class="step__item-descr">
              <h3 class="step__item-descr-title">10 минут чтобы учиться эффективно</h3>
              <p class="step__item-descr-text">Изучите раздел "как пользоваться". Мнемонические методы, позволяют запоминать слова быстро и надежно. После некоторой тренировки, запомнить двадцать слов за раз вам не покажется чем то нереальным.</p>
              <a href="" class="step__item-descr-link">Как пользоваться</a>
            </div>
          </div>
        </div>
        <div class="step step-right">
          <span ref="observer3" class="step__number">Шаг 3</span>
          <div ref="step3" class="step__content step1">
            <span class="step__item-title">Тесты</span>
            <img src="../../public/test.jpg" alt="" class="step__item-img">
            <div class="step__item-descr">
              <h3 class="step__item-descr-title">Закрепите усвоенное</h3>
              <p class="step__item-descr-text">После изучения карточек со словами, переходите к тестам. Каждый новый раунд тестов, убирает одну из подсказок. Тесты эффективны и требуют очень мало времени.</p>
              <a href="" class="step__item-descr-link">Страница Тесты</a>
            </div>
          </div>
        </div>
        <div class="step step-left">
          <span ref="observer4" class="step__number step__number_replace">Шаг 4</span>
          <div ref="step4" class="step__content step1">
            <span class="step__item-title step__item-title_replace">Экзамен</span>
            <img src="../../public/exam.jpg" alt="" class="step__item-img">
            <div class="step__item-descr">
              <h3 class="step__item-descr-title">Испытайте себя</h3>
              <p class="step__item-descr-text">Если чувствуете, что уже готовы пройдите экзамен. 1000 слов это не шутки, вам необязательно проходить его за раз. Приложение запомнит место, где вы остановились и при следующем входе сможете продолжить свой экзамен. По окончании, приложение будет подбирать только те слова, на которые вы ответили неправильно.</p>
              <a href="" class="step__item-descr-link">Экзамен</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="about-section">
    <div class="about__container">
      <div ref="observer5" class="about__anchor"></div>
      <div ref="descr" class="about__descr">
        <h2 class="about__title">Рады всем желающим</h2>
        <p class="about__text">
          Проект создан на волонтерских началах. Делать подборки слов, писать мнемотексты, добавлять слова, подбирать изображения, редактировать, на все это уходит немало времени. Мы будем рады любой помощи в развитии проекта. А мы придумаем "плюшки", чтобы отблагодарить вас. Добро не должно оставаться "безнаказанным".
        </p>
      </div>
      <img ref="image" src="../../public/volon.png" alt="" class="about__img">
    </div>
  </div>
</template>
<script>

export default {
 mounted() {
  const options = {
  rootMargin: '0px',
  threshold: 1.0
  }
  const callback = (entries, observer)=>{
    if (entries[0].isIntersecting) {
      if (entries[0].target.textContent === 'Шаг 1') {
        this.$refs.step1.classList.add('step-ani')
      } else if (entries[0].target.textContent === 'Шаг 2') {
        this.$refs.step2.classList.add('step-ani')
      } else if (entries[0].target.textContent === 'Шаг 3') {
        this.$refs.step3.classList.add('step-ani')
      } else if (entries[0].target.textContent === 'Шаг 4') {
        this.$refs.step4.classList.add('step-ani')
      } else {
        this.$refs.descr.classList.add('trans-descrip')
        this.$refs.image.classList.add('trans-image')
      }
    }
  }
  const observer = new IntersectionObserver(callback, options)
  observer.observe(this.$refs.observer)
  observer.observe(this.$refs.observer2)
  observer.observe(this.$refs.observer3)
  observer.observe(this.$refs.observer4)
  observer.observe(this.$refs.observer5)
 }
}
</script>

<style scoped>
  .wrapper {
    width: 100%;
    overflow: hidden;
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
    background-image: url('../../public/meet-img.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
  .steps__title-contaner {
    border-bottom: 6px solid rgba(228, 226, 226, 0.688);
  }
  .steps__title-wrapper {
    padding: 15px;
    border-bottom: 0.5px solid grey;
    border-top: 0.5px solid grey;
  }
  .steps__title {
    max-width: 1000px;
    margin: 0 auto;
    font-size: 21px;
    line-height: 1.4;
  }
  .steps__title-clear-block {
    min-height: 45px;
  }

  .steps__container {
    position: relative;
    background-color: #363636;
    min-height: auto;
    padding: 100px 10vw;
  }
  .steps__container::after {
    content: "";
    display: block;
    position: absolute;
    border-left: 1px solid #acb5c0;
    top: 0;
    bottom: 0;
    left: 50%;
    height: 100%;
    z-index: 1;
  }
  .steps__items {
    width: auto;
    text-align: left;
    display: grid;
    grid-gap: 5rem 10.625rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content;
    grid-auto-rows: min-content;
    align-items: start;
    justify-items: center;
    grid-auto-flow: dense;
    position: relative;
    z-index: 3;
    justify-self: center;
    margin-bottom: -280px;
  }
  .steps__subtitle {
    color: white;
  }
  .step {
    max-width: 427px;
    z-index: 5;
    justify-self: start;
    align-self: start;
    position: relative;
    display: inline-block;
  }
  .step1 {
    transform: translateY(150%);
    opacity: 0;
  }
  .step-ani {
    animation: ani 1s forwards;
  }
  .step-left {
    justify-self:end;
    transform: translateY(-200px);
  }
  .step__number {
    height: 40px;
    width: 97px;
    position: absolute;
    left: -85px;
    transform: translateX(-50%);
    top: 20px;
    border: 2px solid #fff;
    background: #363636;
    border-radius: 100px;
    display: block;
    color: #fff;
    text-align: center;
    padding: 6px 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    pointer-events: none;
  }
  .step__number_replace {
    left: auto;
    right: -85px;
    transform: translateX(50%);
  }
  .step__content {
    background: #fff;
    position: relative;
    z-index: 2;
    height: 100%;
  }
  .step__item-title {
    background: #ef6023;
    color: white;
    padding: 16px 24px 14px;
    position: absolute;
    top: 15px;
    left: 0;
    height: 50px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    z-index: 3;
  }
  .step__item-title::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    border-top: 25px solid transparent;
    border-right: 25px solid #ef6023;
    border-bottom: 25px solid transparent;
  }
  .step:nth-child(odd) .step__item-title::before {
    left: auto;
    right: 0;
    transform: translateX(100%);
    border-right: 0;
    border-left: 25px solid #ef6023;
  }
  
  .step__item-title_replace {
    left: auto;
    right: 0;
  }
  .step__item-img {
    width: 100%;
    max-height: 260px;
    display: block;
  }
  .step__item-descr {
    padding: 25px 40px 33px;;
  }
  .step__item-descr-text {
    margin-top: 15px;
    text-align: justify;
    margin-bottom: 15px;
  }
  .step__item-descr-link {
    text-decoration: none;
    font-weight: bold;
    color: #3b7b2b;
  }
  .about-section {
    padding: 20px;
  }
  .about__container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    max-height: 400px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: relative;
  }
  .about__anchor {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    left: calc(50% - 10px);
    background: transparent
  }
  .about__descr {
    width: 70%;
    padding: 20px;
    transform: translateX(-200%);
  }
  .about__title {
    margin-bottom: 20px;
  }
  .about__text {
    font-size: 22px;
    line-height: 1.4;
  }
  .about__img {
    height: 100%;
    width: 30%;
    display: none;
    transform: translateX(200%);
  }
  .trans-descrip {
    animation: animleftx 1s forwards;
  }
  .trans-image {
    display: block;
    animation: animrightx 1s forwards;
  }
  @media screen and (max-width: 850px) {
    .steps__items {
      grid-gap: 8.25rem;
      grid-template-columns: 1fr;
      margin-bottom: -80px;
    }
    .step {
      justify-self: auto;
    }
    .step__number {
      top: -80px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .step-left {
      transform: translateY(10px);
    }
    .steps__subtitle {
      text-align: center;
    }
    .step__item-title {
      width: 100%;
      top: -50px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
    .step__item-title::before {
      display: none;
    }
  }
  @media screen and (max-width: 800px) {
    .info-container {
      flex-direction: column;
    }
    .info-container__section_big-font {
      font-size: 22px;
    }
    .info-container__section_low-font {
      font-size: 17px;
    }
    .separator {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    .about__container {
      flex-direction: column-reverse;
      max-height: none;
    }
    .about__descr {
      width: 100%;
    }
    .about__title {
      text-align: center;
    }
    .about__text {
      text-align: center;
    }
    .first-line__link-item {
      display: flex;
      width: -webkit-fill-available;
    }
  }

  @keyframes ani {
  0% {transform: translateY(150%);opacity: 0;}
  100% {transform: translateY(0);opacity: 1;}
  }
  @keyframes animrightx {
    0% {transform: translateX(200%);}
    100% {transform: translateX(0)}   
  }
  @keyframes animleftx {
    0% {transform: translateX(-200%);}
    100% {transform: translateX(0)}   
  }
</style>
