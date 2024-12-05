<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useStaffStore } from '@/stores/staff'
import PersonCard from '@/components/PersonCard.vue'
import AddStaff from '@/components/AddStaff.vue';

const doctorsStore = useStaffStore()

const { doctors } = storeToRefs(doctorsStore)

const isAdd = ref(false);

const openCloseAdd = () => {
  isAdd.value = !isAdd.value
}

</script>

<template>
  <div>
    <h1 class="mb-10 text-5xl font-bold text-center">Врачи</h1>
    <div class="flex justify-end">
      <button class="mb-10 hover:bg-blue-500 bg-blue-400 font-semibold text-white py-2 px-4 border rounded"
        @click="openCloseAdd">Добавить врачей</button>
    </div>
    <PersonCard
      v-for="doctor in doctors"
      :key="doctor.id"
      :person="doctor"
    />
    <AddStaff
      v-if="isAdd"
      @close-add="openCloseAdd"
      isAddDoctor
    />
  </div>
</template>
