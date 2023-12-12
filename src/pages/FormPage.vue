<script setup lang="ts">
import Form from "@/components/Form.vue";
import {ref} from "vue";
const months = ref(4);//Сделаем чтоб все данные формы были в store
</script>
<template>
  <main>
    <div class="form_head">
      <a-typography-title style="margin-top: 10px" :level="2">Сеанс гемодиализа</a-typography-title>
      <a-typography-title style="margin: 0" :level="4">№ месяце:
        <a-input-number v-model:value="months" min="1" class="month_input" max="99"/>
      </a-typography-title>
    </div>
    <a-typography-title :level="3">Назначения сеанса гемодиализа</a-typography-title>
    <a-typography-title :level="4">Программа аппарата</a-typography-title>
    <Form/>
  </main>
</template>
<style scoped>
*{
  font-family: Roboto;
}
h1,h2,h3,h4,h5{
  font-weight: 400;
}
main{
  max-width: 3840px;
  margin: 0 auto;
  padding: 0 30px;
}
.form_head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 50%;
  max-height: fit-content;
}

.month_input {
  width: 60px;
  transform: translateX(-11px);
  z-index: 0;
  background: transparent;
  color: #479dff;
  font-size: 19px;
  border: none;
  outline: none;
}
</style>