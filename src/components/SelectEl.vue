<template>
  <div>
    <MultiSelect
      v-model="selectedValues"
      :options="data.options"
      option-label="label"
      option-value="value"
      placeholder="Select items"
      class="min-w-[170px] max-w-[170px]"
    >
      <template #value>
        <div class="flex justify-between items-center gap-3 w-full">
          <div v-if="!data.selectedValues.length">
            Select items
          </div>
          <div
            class="text-white"
          >
            {{ data.selectedValues.join(', ') }}
          </div>
          <Transition name="slide-fade">
            <i
              v-if="data.selectedValues.length"
              class="pi pi-times text-xl cursor-pointer ml-auto"
              @click="selectedValues = []"
            />
          </Transition>
        </div>
      </template>
    </MultiSelect>
  </div>
</template>

<script setup lang="ts">
import type {iData} from '@/types/elements';
interface iProps {
  data: iData
}

const {data} = defineProps<iProps>();

const selectedValues = defineModel<number[]>('selectedValues');


</script>

<style>
</style>
