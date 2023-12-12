<template>
  <div style="display: flex; align-items: center; gap: 16px">
    <a-select
        show-search
        v-model:value="value"
        :placeholder="placeholder"
        style="width: 200px"
        :options="options"
        :filter-option="filterOption"
        @change="$emit('selected', value)"
    ></a-select>
    <button v-if="editorKey" @click="showModal" type="button"
            style="background: transparent; border: 1px solid gray; border-radius: 3px; cursor: pointer;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="18px"
           style="transform: translateY(2px)">
        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"/>
      </svg>
    </button>
    <Modal v-if="editorKey" :items-local-key="editorKey" :open="open" :title="editorTitle"
           @modal-close="closeModal"/>
  </div>
</template>
<script setup lang="ts">
import Modal from "@/components/Modal/index.vue";
import type {Option} from "@/types/index";
import {ref} from "vue";

const props = defineProps<Props>();
const emits = defineEmits(['selected']);
const filterOption = (input: string, option: Option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

interface Props {
  options: Option[];
  placeholder?: string;
  editorKey?: string;
  editorTitle?: string;
}

const open = ref<boolean>(false);
const value = ref<string | undefined>(undefined);
const showModal = () => {
  open.value = true;
};
const closeModal = () => {
  open.value = false;
};
</script>