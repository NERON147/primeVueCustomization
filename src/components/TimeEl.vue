<template>
  <div class="flex flex-col gap-2.5 w-fit">
    <span>
      Значение переменной директивы v-model: {{ buttondisplay ? formatDateTime(buttondisplay) : '' }}
    </span>
    <Calendar
      v-model="buttondisplay"
      show-icon
      :show-on-focus="false"
      input-id="buttondisplay"
      time-only 
    >
      <template #footer>
        <div class="flex justify-between text-blue-500">
          <span>
            Сегодня
          </span>
          <span
            class="cursor-pointer"
            @click="buttondisplay = null"
          >
            Очистить
          </span>
        </div>
      </template>
    </Calendar>
  </div>
</template>

<script setup lang="ts">
import {formatDateTime} from '@/helpers/formatDate';
const buttondisplay = defineModel<Date | null | undefined>('buttondisplay');
</script>

<style scoped>

</style>