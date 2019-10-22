<style lang="sass" scoped>
main
    text-align: center

header
    font-size: 3rem
    color: #4e4e4e
    font-weight: bold
    margin-top: 2rem

.counter
    margin: 50px auto 20px auto
    border-radius: 10px
    width: 200px
    height: 200px
    text-align: center
    line-height: 200px
    font-size: 5rem
    background-color: #f0f0f0
    color: #7b7b7b
    user-select: none

    &.loading
        font-size: 2rem

button
    cursor: pointer
    margin-bottom: 50px
    font-size: 18px
    background: #e8e8e8
    -webkit-appearance: none
    border: 0
    padding: 5px 28px
    border-radius: 10px
    color: #4e4e4e
    margin-right: 12px
    font-weight: bold

button:last-child
    margin-right: 0

small
    display: block
    color: #9e9e9e
</style>

<template>
    <main>
        <header>Hello, VueCargo!</header>
        <div class="counter" :class="{'loading': total == 0}">{{ total == 0 ? '讀取中' : total }}</div>
        <button @click="increment">增加</button>
        <button @click="set(1)">重設</button>
        <small>
            這個計數器範例完整示範了如何使用 Vuex 和 SuperAgent 相互傳遞資料並進行溝通，
            <a href="https://github.com/teacat/vue-cargo">拜訪 VueCargo 的 GitHub</a> 以了解更多。
        </small>
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'CounterBase',
    methods: {
        ...mapActions('counter', ['increment', 'set', 'fetchCount'])
    },
    computed: {
        ...mapGetters('counter', ['total'])
    },
    created() {
        this.fetchCount({ $http: this.$http });
    }
};
</script>