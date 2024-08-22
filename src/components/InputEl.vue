<template>
  <div class="flex gap-2.5 items-center">
    <a
      v-if="!data.isEditing && data.url"
      :href="data.url"
      target="_blank"
      class="text-black"
    >{{ data.title }}</a>
    <InputText 
      v-else
      v-model="currentUrl"
      :placeholder="data.placeholder"
      class="min-w-[500px]"
      @blur="emit('handleBlur')"
      @keydown.enter="emit('handleEnter')"
    />
    <i
      v-if="!data.isEditing && data.url"
      class="pi pi-pencil text-black cursor-pointer"
      @click="emit('isEditing')"
    />
  </div>
</template>

<script setup lang="ts">
import type {iData} from '@/types/elements';
interface iProps {
  data: iData
}

const {data} = defineProps<iProps>();
const emit = defineEmits(['handleBlur', 'handleEnter', 'isEditing']);
const currentUrl = defineModel<string>('currentUrl');

</script>

<style>
</style>
