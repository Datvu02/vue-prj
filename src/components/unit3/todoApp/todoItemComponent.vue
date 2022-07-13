<template>
  <div class="todo-list">
   <div class="todo-item" v-for="(value, index) in listWork" :key="index">
       <div class="checker"><span class=""><input type="checkbox" @click="handleTick(index, $event)" :checked="value.isActive"></span></div>
        <span :class="{ del: value.isActive }">{{ value.work }}</span>
        
       <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
    <button @click="handleDeleteItem(index)" v-if="value.isActive">Xóa</button>

   </div>
      <div class="todo-null" v-if="listWork.length === 0">
            Chưa có công việc nào được thêm
      </div>
   </div>
   
</template>

<script>
export default {
    name: "todoItemComponent",
    props: ['todoItemComponent'],
    data() {
        return {
            listWork: []
        }
    },
    methods: {
        handleDeleteItem(index) {
            this.listWork.splice(index,1)
        },
        handleTick(index, event){
            if (event.target.checked) {
                this.listWork[index].isActive = 1
            } else {
                this.listWork[index].isActive = 0
            }
        }
    },
    watch: {
        todoItem (value) {
            this.listWork.push(value)
        }
    }
}
</script>

<style>
</style>