<template>
  <a-form :model="formStore.data" @finish="handleSubmit">
    <a-form-item :name="['data', 'device-program']">
      <a-radio-group button-style="outline" v-model:value="formStore.data['device-program']" class="device-program">
        <a-radio-button value="HD">HD</a-radio-button>
        <a-radio-button value="HDF">HDF</a-radio-button>
        <a-radio-button value="UF">UF</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <br/>
    <a-form-item :name="['data', 'dializer']">
      <a-typography-title :level="5">
        Диализаторы
      </a-typography-title>
      <Select @selected="(nv)=>formStore.updateFormData('dializer', nv)" placeholder='Спр. "Диализаторы"'
              :options="dialyzers"
              editor-title="Диализаторы" editor-key="dializer"/>
    </a-form-item>
    <br/>
    <div class="device_withInput">
      <a-form-item :name="['data', 'hub']">
        <a-typography-title :level="5">
          Концентратор
        </a-typography-title>
        <Select @selected="(nv)=>formStore.updateFormData('hub', nv)" placeholder='Спр. "Концентраторы"' :options="hubs"
                editor-title="Концетраторы" editor-key="hubs"/>
      </a-form-item>
      <a-form-item :name="['data', 'volume-liters']" label="Объем л." style="display: block; margin-left: 10px">
        <a-input-number v-model:value="formStore.data['volume-liters']" :default-value="10" style="width: 90px"
                        addon-after="л." min="1"
                        max="99"/>
      </a-form-item>
    </div>
    <br/>
    <a-form-item :name="['data', 'type-of-injection']">
      <a-typography-title :level="5">Тип иньекции</a-typography-title>
      <a-radio-group button-style="outline" v-model:value="formStore.data['type-of-injection']" class="device-program">
        <a-radio-button value="Игла">Игла</a-radio-button>
        <a-radio-button value="Катетер">Катетер</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <br/>
    <div class="flex-row">
      <a-form-item :name="['data', 'needle']">
        <Select @selected="(nv)=>formStore.updateFormData('needle', nv)" placeholder='Спр. "Иглы"' :options="needles"
                editor-title="Лекарственные препараты" editor-key="needles"/>
      </a-form-item>
      <a-form-item :name="['data', 'needle-type']">
        <Select @selected="(nv)=>formStore.updateFormData('needle-type', nv)" placeholder='Спр. "Типы иглы"'
                :options="needleTypes"
                editor-title="Типы иглы"
                editor-key="needleTypes"/>
      </a-form-item>
    </div>
    <br/>
    <div class="flex-row">
      <a-form-item :name="['data', 'catheter']">
        <Select @selected="(nv)=>formStore.updateFormData('catheter', nv)" placeholder='Спр. "Катетеры"'
                :options="catheters"
                editor-title="Лекарственные препараты"
                editor-key="catheters"/>
      </a-form-item>
      <a-form-item :name="['data', 'catheter-type']">
        <Select @selected="(nv)=>formStore.updateFormData('catheter-type', nv)" placeholder='Спр. "Типы катетеров"'
                :options="catheterTypes" editor-title="Типы катетеров"
                editor-key="catheterTypes"/>
      </a-form-item>
    </div>
    <br/>
    <div class="flex-row">
      <a-form-item :name="['data', 'bicarbonate']">
        <a-typography-title :level="5">Бикарбонат</a-typography-title>
        <Select @selected="(nv)=>formStore.updateFormData('bicarbonate', nv)" placeholder='ХХХ гр / л'
                :options="bicarbonate"
                editor-title='Справочник "Бикарбонат"'
                editor-key="bicarbonate"/>
      </a-form-item>
      <a-form-item class="weight" :name="['data', 'bodyweight']">
        <a-typography-title :level="5">Сухой Вес пациента</a-typography-title>
        <a-input-number v-model:value="formStore.data.bodyweight" :default-value="0" style="width: 103px"
                        addon-after="кг" min="1"
                        max="999"/>
      </a-form-item>
      <a-form-item :name="['data', 'anticoagulation']">
        <a-typography-title :level="5">Антикоагуляция</a-typography-title>
        <Select @selected="(nv)=>formStore.updateFormData('anticoagulation', nv)" placeholder='Наименование'
                :options="anticoagulation" editor-title='Справочник "Антикоагуляция"'
                editor-key="anticoagulation"/>
      </a-form-item>
      <a-form-item label="Объем" style="display: block" :name="['data', 'volume']">
        <a-input-number v-model:value="formStore.data.volume" :default-value="0" style="width: 103px"
                        addon-after="ед" min="1"
                        max="999999999"/>
      </a-form-item>
    </div>
    <br/>
    <a-button html-type="submit" style="border-width: 2px" size="large">
      Сформировать сеанс
    </a-button>
  </a-form>
</template>

<script lang="ts" setup>
import {useModalStore} from "@/stores/modal";
import {useFormStore} from "@/stores/form";
import Select from "@/components/Select.vue";
import {computed} from "vue";

const formStore = useFormStore();
const modalStore = useModalStore();

const data = computed(() => formStore.data);
const handleSubmit = () => console.log(data.value);

const anticoagulation = computed(() => modalStore.values.anticoagulation);
const bicarbonate = computed(() => modalStore.values.bicarbonate);
const catheterTypes = computed(() => modalStore.values.catheterTypes);
const catheters = computed(() => modalStore.values.catheters);
const needles = computed(() => modalStore.values.needles);
const needleTypes = computed(() => modalStore.values.needleTypes);
const dialyzers = computed(() => modalStore.values.dializer);
const hubs = computed(() => modalStore.values.hubs);
</script>
<style scoped>
.device-program {
  display: flex;
  gap: 20px;
  overflow: visible;
}

.device-program label {
  width: 100px;
  padding: 0;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: gray;
  border-inline-start-width: 1px;
  border-radius: 5px;
}

.device-program label:before {
  display: none;
}

.ant-radio-button-wrapper-checked {
  border-color: green !important;
  color: green !important;
  border-width: 2px;
  border-inline-start-width: 2px !important;
}

.device_withInput {
  display: flex;
  align-items: flex-end;
  gap: 10px;
}

.ant-form-item {
  margin-bottom: 0;
}

.flex-row {
  display: flex;
  gap: 30px;
  align-items: end;
}

.flex-row div {
  width: 220px;
}

.flex-row .weight {
  width: min-content;
}
</style>