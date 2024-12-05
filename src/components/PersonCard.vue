<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia';
import StaffEdit from './StaffEdit.vue'
import { useStaffStore } from '@/stores/staff';
import type { IDoctor } from '@/types/types';

const personStore = useStaffStore()

const { professions, departments } = storeToRefs(personStore)
const { deletePerson } = personStore

interface Props {
  person: IDoctor;
}

const props = defineProps<Props>();

const profession = computed(() => professions.value.find((item) => item.id === props.person.profession))
const department = computed(() => departments.value.find((item) => item.id === props.person.department))

const isDoctor = computed(() => profession.value?.id === 1)

const isEdit = ref(false);

const openCloseEdit = () => {
  isEdit.value = !isEdit.value
}

</script>

<template>
  <div class="flex justify-between items-center mb-5 p-4 border border-solid border-black">
    <div class="mb-4">
      <p class="mb-1 text-xl font-bold">Отделение: {{ department?.name }}</p>
      <div class="flex gap-2 text-xl">
        <p v-if="person.main" class="font-bold">заведующий отделения: </p>
        <p v-else class="font-bold">{{ profession?.name }}: </p>
        {{ person.name }}
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <button
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="openCloseEdit">Редактировать</button>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 border border-red-500 hover:border-transparent rounded"
        @click="deletePerson(person.id)">Удалить</button>
    </div>
  </div>
  <StaffEdit
    v-if="isEdit"
    :departmentId="department?.id"
    :person="person"
    :professionId="profession?.id"
    @close-edit="openCloseEdit"
    :isDoctor="isDoctor"
  />
</template>
