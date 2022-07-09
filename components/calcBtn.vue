<template>
    <v-btn elevation="5" @click="bmicalc">calculate</v-btn>
</template>
<script>
export default {
    computed: {
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
        bmicalc() {
            if (this.theheight === "" && this.theweight === "") {// 空白の時アラートを入れたいのでここにもtheweight,theheight等を記入する
                alert("enter some data")
            }
            else { this.$store.commit("bmicalc"); }

        }
    }
}
</script>