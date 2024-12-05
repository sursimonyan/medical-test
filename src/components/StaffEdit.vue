<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useStaffStore } from '@/stores/staff';
import { storeToRefs } from 'pinia';
import type { IDoctor } from '@/types/types';

interface Props {
  person: IDoctor;
  professionId: number | undefined;
  departmentId: number | undefined;
  isDoctor: boolean | undefined;
}

const props = defineProps<Props>();

const personStore = useStaffStore()

const { departments } = storeToRefs(personStore)
const { editStaffData } = personStore

const emit = defineEmits(['closeEdit'])

const StaffData = reactive<IDoctor>({
  id: props.person.id,
  profession: props.professionId,
  department: props.departmentId,
  name: props.person.name,
  main: props.person.main,
})

const isNameEmpty = computed(() => StaffData.name.length < 3)

function cancel() {
  emit('closeEdit')
}

function save() {
  editStaffData(StaffData)
  emit('closeEdit')
}

</script>

<template>
  <div class="fixed top-0 left-0 flex w-full h-full bg-[rgba(0,0,0,0.3)]">
    <div class="m-auto w-[500px] p-5 bg-white z-20">
      <div class="mb-3">
        <label>
          <span class="block mb-1">Отделение:</span>
          <select
            v-model="StaffData.department"
            class="p-1 min-w-[180px] border border-solid border-black"
          >
            <option
              v-for="department in departments"
              :key="department.id"
              :value="department.id"
            >{{ department.name }}
            </option>
          </select>
        </label>
      </div>
      <div v-if="isDoctor" class="mb-3">
        <label>
          <span class="block mb-1">Заведующий отделения:</span>
          <input type="checkbox" v-model="StaffData.main">
        </label>
      </div>
      <div class="mb-7">
        <span class="block mb-1">ФИО:</span>
        <input
          v-model="StaffData.name"
          class="w-full p-1 border border-solid outline-none"
          :class="{'border-black': isNameEmpty, 'border-red-600': isNameEmpty}"
          type="text"
        >
        <p v-if="isNameEmpty" class="text-red-600">не должно быть пустым (мин 3 буквы)</p>
      </div>
      <div class="flex justify-end gap-4">
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded"
          @click="cancel"
        >Отменить</button>
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          @click="save"
        >Сохранить</button>
      </div>
    </div>
  </div>
</template>
