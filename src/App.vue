<template>
  <div class="p-10 flex flex-col gap-5">
    <InputEl
      v-model:currentUrl="data.currentUrl"
      :data="data"
      @handle-blur="handleBlur"
      @handle-enter="handleEnter"
      @is-editing="data.isEditing = true"
    />
    <TimeEl v-model:buttondisplay="data.buttondisplay" />
    <SelectEl
      v-model:selectedValues="data.selectedValues"
      :data="data"
    />
    <TableEl />
    <TableSearchEl :data="data" />
  </div>
</template>

<script setup lang="ts">
import InputEl from '@/components/InputEl.vue';
import TimeEl from '@/components/TimeEl.vue';
import SelectEl from '@/components/SelectEl.vue';
import TableEl from '@/components/TableEl.vue';
import TableSearchEl from '@/components/TableSearchEl.vue';

import {useElementsLogic} from '@/components/composables/useElementsLogic';

const {data, handleBlur, handleEnter } = useElementsLogic();
</script>

<style>
</style>
