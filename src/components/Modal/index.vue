<template>
  <a-modal :open="open" :closable="false" :title="title" :footer="[]">
    <a-button @click="$emit('modal-close', false)">Закрыть</a-button>
    <a-input v-model:value="searchKeyword" placeholder="Поиск позиции по первым символам"/>
    <a-input v-model:value="newItem" @pressEnter="addItem" placeholder="Добавить новую запись"/>
    <a-list size="small" bordered :data-source="filteredItems">
      <template #renderItem="{ item }">
        <a-list-item class="list-item">
          {{ item.value }}
          <a-button @click="deleteItem(item.id)" type="text" icon="delete"></a-button>
        </a-list-item>
      </template>
    </a-list>
  </a-modal>
</template>
<script setup lang="ts">
import {ref, computed} from 'vue';
import {useModalStore} from "@/stores/modal";
import type {Option} from "@/types";

const props = defineProps({itemsLocalKey: {type: String, required: true}, title: String, open: Boolean});
defineEmits(["modal-close"]);

const modalStore = useModalStore();
const key: string = props.itemsLocalKey;
const newItem = ref<string>('');
const searchKeyword = ref<string>('');

const addItem = () => {
  if (newItem.value.trim().length) {
    modalStore.addItem({id: Date.now(), value: newItem.value, key});
    newItem.value = '';
  }
};
const deleteItem = (itemId: number) => {
  modalStore.deleteItem({itemId, key});
};

const filteredItems = computed(() => {
  return modalStore.values[key].filter((item: Option) =>
      item.value.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
});

</script>
<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
}

.ant-modal-body button, .ant-modal-body input {
  margin-bottom: 15px;
}
</style>