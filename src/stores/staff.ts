import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import data from '@/data/data.json'
import { DoctorOrNurse, type IDoctor, type IStaffData } from '@/types/types'

export const useStaffStore = defineStore('Staff', () => {
  const staffData = ref<IStaffData>(data)

  const StaffDataLocalStorage = localStorage.getItem('StaffData');
  if (StaffDataLocalStorage) {
    staffData.value = JSON.parse(StaffDataLocalStorage);
  }

  const doctors = computed(() => staffData.value.Staff.filter((person) => person.profession === DoctorOrNurse.Doctor ))
  const nurses = computed(() => staffData.value.Staff.filter((person) => person.profession === DoctorOrNurse.Nurse ))
  
  const professions = computed(() => staffData.value.professions)
  const departments = computed(() => staffData.value.departments)

  const uniqueId = computed(() => Math.random())

  function editStaffData(data: IDoctor) {
    const findPerson = staffData.value.Staff.findIndex((item) => data.id === item.id)    
    staffData.value.Staff[findPerson] = { ...data } 
  }

  function deletePerson(id: number) {    
    staffData.value.Staff = staffData.value.Staff.filter((item) => id !== item.id)
  }

  const addStaffData = (data: IDoctor) => {
    staffData.value.Staff.push(data)    
  }

  watch(staffData, (state) => {    
    localStorage.setItem('StaffData', JSON.stringify(state))
  }, {deep: true})  

  return { professions, departments, doctors, nurses, uniqueId, addStaffData, editStaffData, deletePerson }
})
