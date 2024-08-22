<template>
  <div class="flex flex-col">
    <div class="flex items-center mb-4">
      <div class="flex flex-1 items-center mr-2">
        <div>
          <div class="relative">
            <Button
              icon="pi pi-cog"
              class="p-2 bg-gray-200 text-gray-700 hover:bg-gray-300 !rounded-e-none relative"
              aria-haspopup="true"
              aria-controls="overlay_menu"
              @click="toggleFieldSearch" 
            />
            <Transition
              name="fade"
              mode="out-in"
            >
              <div
                v-if="toggle"
                class="absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg w-[300px]"
              >
                <MultiSelect
                  v-model="searchFields"
                  :options="data.fieldOptions"
                  option-label="label"
                  placeholder="Выберите поля для поиска"
                  class="w-full p-2 absolute bottom-0"
                />
              </div>
            </Transition>
          </div>
        </div>
        <IconField class="flex-1">
          <InputText
            v-model="searchTerm"
            placeholder="Поиск..."
            class="border border-gray-300 !rounded-none py-2 px-4 w-full"
            @keydown.enter="search"
          />
          <Transition name="slide-fade">
            <InputIcon
              v-if="searchTerm.length"
              class="pi pi-times cursor-pointer"
              @click="clearSearch"
            />
          </Transition>
        </IconField>

        <Button
          icon="pi pi-search"
          class="!rounded-s-none !bg-blue-500 !text-white !hover:bg-blue-600 !border-blue-500"
          label="Search"
          @click="search"
        />
      </div>
      
      <MultiSelect
        v-model="selectedFields"
        :options="data.fieldOptions"
        option-label="label"
        placeholder="Поля таблицы"
        class="flex-none w-1/5"
      />
    </div>

    <DataTable
      :value="filteredData"
      class="border border-gray-300 rounded-md"
    >
      <Column
        v-for="col in selectedFields"
        :key="col.value"
        :field="col.value"
        :header="col.label"
      />
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type {iData} from '@/types/elements';
interface iProps {
  data: iData
}

const {data} = defineProps<iProps>();


const selectedFields = ref(data.fieldOptions.map(option => option));
const searchFields = ref([...selectedFields.value]);
const searchTerm = ref('');
const filteredData = ref([...data.dataTable]);
const toggle = ref(false);

const search = (): void => {
  filteredData.value = data.dataTable.filter(item => {
    return searchFields.value.some(field => {
      return selectedFields.value.some(selectedField => {
        return selectedField.value === field.value && String((item as any)[field.value]).toLowerCase().includes(searchTerm.value.toLowerCase());
      });
    });
  });
};

const clearSearch = (): void => {
  searchTerm.value = '';
  search();
};

const toggleFieldSearch = (): void => {
  toggle.value = !toggle.value;
};
</script>

<style>
</style>
