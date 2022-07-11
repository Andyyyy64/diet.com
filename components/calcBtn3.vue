<template>
    <v-btn elevation="5" @click="macrocalc">calculate</v-btn>
</template>
<script>
export default {
    computed: {
        theage: {
            get() {
                return this.$store.state.age
            },
            set(value) {
                this.$store.commit("unkounko", value)
            }
        },
        theheight: {
            get() {
                return this.$store.state.height
            },
            set(value) {
                this.$store.commit("unkounko2", value)
            }
        },
        theweight: {
            get() {
                return this.$store.state.weight
            },
            set(value) {
                this.$store.commit("unkounko3", value)
            }
        },
    },
    methods: {
        macrocalc() {
            if (this.theheight === "" && this.theweight === "" && this.theage === "") { // 空白の時アラートを入れたいのでここにもtheweight,theheight等を記入する\\
                alert("enter some data")
            }
            else { this.$store.commit("macrocalc"); }
        }
    }
}
</script>