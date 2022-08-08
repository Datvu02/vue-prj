<template>
    <div>
        <h3> {{ count }} </h3><br>
        <!-- <h2>Todos : {{ doneTodos }} </h2><br>
        <h2>Length done todos : {{ lengthDoneTodos }} </h2><br>
        <h2>Todo : {{ $store.getters.findTodoById(2) }} </h2><br> -->

        <!-- <h3>{{text}}</h3> -->
        <button @click="setTitle()">click ne</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
    name: 'learnVueX',
    computed: {
        ...mapState([
            'count',
            'text'
        ]),
        ...mapGetters([
            'doneTodos',
            'lengthDoneTodos'
        ])
    },
    methods: {
        ...mapMutations(['increment']),
        setTitle () {
            let input = {
                'number' : 1
            }
            
            this.increment(input)
        }
    }
}
</script>