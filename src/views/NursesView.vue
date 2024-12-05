<script setup lang="ts">
import { ref } from 'vue';
import { useStaffStore } from '@/stores/staff'
import { storeToRefs } from 'pinia'
import PersonCard from '@/components/PersonCard.vue'
import AddStaff from '@/components/AddStaff.vue';

const nurseStore = useStaffStore()

const { nurses } = storeToRefs(nurseStore)

const isAdd = ref(false);

const openCloseAdd = () => {
  isAdd.value = !isAdd.value
}
</script>

<template>
  <div>    
    <h1 class="mb-10 text-5xl font-bold text-center">Медсёстры</h1>
    <div class="flex justify-end">
      <button class="mb-10 hover:bg-blue-500 bg-blue-400 font-semibold text-white py-2 px-4 border rounded"
        @click="openCloseAdd">Добавить медсестёр</button>
    </div>
    <PersonCard
      v-for="nurse in nurses"
      :key="nurse.id"
      :person="nurse"
    />
    <AddStaff
      v-if="isAdd"
      @close-add="openCloseAdd"
    />
  </div>
</template>
