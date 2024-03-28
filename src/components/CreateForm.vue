<template>
  <div class="main__create-form-wrapper">
    <form class="main__create-form">
      <VInput
        class="main__create-form-item"
        fieldName="Имя"
        type="text"
        v-model="form.name"
      />
      <VInput
        class="main__create-form-item"
        fieldName="Email"
        type="email"
        v-model="form.email"
      />
      <VRadio
        class="main__create-form-item"
        fieldName="Пол"
        :options="genders"
        v-model="form.gender"
      />
      <VTextarea
        class="main__create-form-item"
        fieldName="Сообщение"
        v-model="form.message"
      />
      <VCheckbox
        class="main__create-form-item"
        fieldName="Согласен на обработку персональных данных"
        v-model="form.agreement"
      />
      <VButton
        class="main__create-form-button"
        @click="sendForm"
      >
        Отправить
      </VButton>
    </form>
    <div class="main__create-form-result">
      <table class="main__create-form-result-table">
        <tr
          v-for="(value, key) in formResult"
          :key="key"
          class="main__create-form-result-row"
        >
          <td class="main__create-form-result-row-title">{{ key }}:</td>
          <td class="main__create-form-result-row-text">{{ value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import VInput from "@/components/form/VInput.vue";
import VCheckbox from "@/components/form/VCheckbox.vue";
import VRadio from "@/components/form/VRadio.vue";
import VTextarea from "@/components/form/VTextarea.vue";
import VButton from "@/components/VButton.vue";

export default {
  name: "CreateForm",
  components: { VButton, VTextarea, VRadio, VCheckbox, VInput },
  data() {
    return {
      form: {
        name: "",
        email: "",
        gender: "male",
        message: "",
        agreement: false,
      },
      genders: {
        male: "Мужской",
        female: "Женский",
      },
      formResult: {},
    }
  },
  methods: {
    sendForm() {
      this.formResult = {...this.form};
      
      this.form.name = "";
      this.form.email = "";
      this.form.gender = "male";
      this.form.message = "";
      this.form.agreement = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.main__create-form {
  flex: 1 0 50%;
  margin-right: 30px;
  
  &-wrapper {
    display: flex;
  }
  
  &-item {
    margin-bottom: 20px;
  }
  
  &-button {
    width: 300px;
  }
  
  &-result {
    background-color: white;
    width: 100%;
    height: 400px;
    border-radius: 10px;
    
    &-table {
      border-spacing: 20px 10px;
    }
    
    &-row {
      margin-bottom: 20px;
    }
    
    &-row-title {
      vertical-align: top;
      color: grey;
    }
  }
}

</style>