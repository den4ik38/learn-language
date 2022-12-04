<template>
  <form class="form">
    <label for="word">1. Впишите слово, которое хотите добавить</label>
    <input v-model="word" type="text" name="word" placeholder="Введите новое слово">
    <label for="transcrip">2. Найдите транскрипцию и скопируйте ее в поле ниже:</label>
    <input v-model="transcrip" type="text" name="transcrip" placeholder="Напишите транскрипцию">
    <label for="translate">3. Впишите перевод</label>
    <input v-model="translate" type="text" name="translate" placeholder="Перевод слова на русский язык">
    <label for="sound">4. Скачайте звуковую дорожку с произношение и добавьте ее кликнув по кнопке ниже:</label>
    <div v-if="redMode" class="sound-block">
      <img @click="listenSound" src="@/../public/images/speaker-filled-audio-tool.png" alt="" class="sound-img">
      <div class="sound-path">{{sound}}</div>
    </div>
    <input class="input-file" type="file" ref="soundFile" name="sound" placeholder="Добавьте файл с произношением">
    <label for="mnemoText">5. Напишите текст для запоминания, постарайтесь сделать ее более ярким и запоминающимся:</label>
    <textarea v-model="mnemoText" name="mnemoText" placeholder="Сюда впишите мнемотекст для запоминания"></textarea>
    <label for="picture">6. Скачайте картинку, а после добавьте его, кликнув по кнопке ниже</label>
    <div class="img-path">{{picture.backgroundImage}}</div>
    <div class="img-block" v-if="redMode">
      <div class="img" :style="picture"></div>
      <img ref="imgPicture" class="img" src="">
    </div>
    <input class="input-file" @input="changeImage($event)" type="file" ref="imageFile" name="picture" placeholder="добавьте изображение">
    <label for="category">7. Выберите категорийную принадлежность слова, кликнув по выпадающему списку ниже:</label>
    <select name="category" required v-model="category">
      <option selected disabled>Выберите категорию</option>
      <option value="Человек">Человек</option>
      <option value="Характеристики">Характеристики</option>
      <option value="Время и Числа">Время и Числа</option>
      <option value="Глаголы и образ жизни">Глаголы и образ жизни</option>
      <option value="Еда">Еда</option>
      <option value="Животные и природа">Животные и природа</option>
      <option value="События и места">События и места</option>
      <option value="Дом">Дом</option>
    </select>
    <label for="belong">8. Выберите часть речи добавляемого слова, кликнув по выпадающему списку ниже:</label>
    <select name="belong" required v-model="belong">
      <option selected disabled>Выберите часть речи</option>
      <option value="Существительное">Существительное</option>
      <option value="Глагол">Глагол</option>
      <option value="Прилагательное">Прилагательное</option>
      <option value="Местоимения">Местоимения</option>
      <option value="Наречие">Наречие</option>
      <option value="Числительное">Числительное</option>
    </select>
    <div v-if="redMode" class="">
      <label for="word-id">ID искомого слова</label>
      <input name="word-id" disabled v-model="id" type="text">
    </div>
    <div class="form__control">
      <my-button type="reset" class="form__btns">Сбросить</my-button>
      <my-button @click.prevent="logResult" type="submit" class="form__btns">Отправить</my-button>
    </div>
  </form>
</template>
<script>
export default {
  props: {
    worder: {
      type: Object
    },
    redMode: {
      type: Boolean
    }
  },
  data() {
    return {
      word: '',
      transcrip: '',
      translate: '',
      mnemoText: '',
      category: '',
      belong: '',
      sound: '',
      picture: '',
      id: null,
    }
  },
  methods: {
    logResult() {
      this.sound = this.$refs.soundFile.files[0].name
      this.picture = this.$refs.imageFile.files[0].name
      console.log(this.word, this.transcrip, this.translate, this.picture, this.mnemoText, this.category, this.belong, this.sound);
    },
    setSelectedValue(selectObj, valueToSet) {
      for (var i = 0; i < selectObj[0].options.length; i++) {
          if (selectObj[0].options[i].text.toLowerCase() === valueToSet.toLowerCase()) {
              selectObj[0].options[i].selected = true;
              return;
          }
      }
    },
    select(){
      const a = document.getElementsByName('belong')
      this.setSelectedValue(a, this.belong)
      const b = document.getElementsByName('category')
      this.setSelectedValue(b, this.category)
    },
    listenSound() {
      const audio = new Audio()
      audio.src = this.sound
      audio.autoplay = true
    },
    changeImage(event) {
      const [file] = event.target.files
        if (file) {
        this.$refs.imgPicture.src = URL.createObjectURL(file)
        }
    }
  },
  beforeMount() {
    if(this.worder) {
      this.word = this.worder.word
      this.transcrip = this.worder.transcrip
      this.translate = this.worder.translate
      this.mnemoText = this.worder.mnemoText
      this.category = this.worder.category
      this.belong = this.worder.belong
      this.sound = this.worder.sound
      this.picture = this.worder.picture
      this.id = this.worder.id
    }
  },
  mounted() {
    if (this.redMode){
      this.select()
    }
  },
}
</script>
<style scoped>
  .form {
    margin: 0 auto;
    display: flex;
    width: 600px;
    flex-direction: column;
  }
  input {
    margin: 20px;
    padding: 5px 0;
  }
  select {
    margin: 20px;
    padding: 5px 0;
  }
  textarea {
    margin: 20px;
    padding: 5px 0;
  }
  .form__control {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .form__btns {
    padding: 5px;
    background: none;
    border: 1px solid teal;
    box-shadow: 0 0 5px grey;
  }
  .img-block {
    padding: 10px;
    display: flex;
  }
  .sound-block {
    display: flex;
    padding: 20px;
  }
  .img-path {
    font-weight: bold;
    margin: 10px;
  }
  .sound-path {
    font-weight: bold;
    margin: 10px;
  }
  .sound-img {
    width: 30px;
    height: 30px;
  }
  .img {
    width: 250px;
    min-height: 250px;
    margin: 5px;
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>