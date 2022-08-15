<template>
    <div>
        <p>fdghfghfgh</p>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    name: 'testLodash',

    mounted() {
        // this.join()
        // this.last()
        // this.chunk()
        // this.fill()
        // this.drop()
        // this.sortBy()
        // this.has()
        // this.pick()
    },

    methods: {
        join() {
            let S = [ 'a', 'b', 'c']
            console.log(_.join(S, '~'))
        },
        last() {
            let S = [ 'a', 'b', 'c']
            console.log(_.last(S))
        },
        chunk() {
            let S = [ '1', '2', '3', '4', '5' ]
            console.log(_.chunk(S, 2));
        },
        fill() {
            let S = ['1', '2', '3', '4']
            console.log(_.fill(S, '*', 1, 2));
        },
        drop() {
            let S = ['1', '2', '3', '4', '5']
            console.log(_.drop(S, 2));
        },
        sortBy() {
            let user = [
                {'name': 'A', 'age': 12},
                {'name': 'B', 'age': 22},
                {'name': 'E', 'age': 5},
                {'name': 'D', 'age': 55},
            ]
            // console.log(_.sortBy(user, [function(o){
            //     return o.age
            // }]));
            console.log(_.sortBy(user, ['name', 'age']));
        },
        has() {
            let user =
                {
                    'name': 'user',
                    'age': 12,
                    'adrress': 'HN',
                }
            console.log(_.has(user, 'age'));
        },
        pick() {
            let user =
                {
                    'name': 'user',
                    'age': 12,
                    'adrress': 'HN',
                }
            console.log(_.pick(user, 'name'));
        }
    }
}
</script>