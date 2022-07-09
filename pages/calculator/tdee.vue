<template>
    <v-app>
        <v-card color="lightblack" class="card2" outlined>
            <v-card-title class="text">TDEE</v-card-title>
            <v-card-subtitle>what is tdee?</v-card-subtitle>
            <v-card-text class="text2">Total Daily Energy Expenditure(tdee)is a measure of how many calories you burn
                per day. This calorie calculator will also display your BMI, BMR, Macros & many other useful statistics!
            </v-card-text>
            <v-card-subtitle>how do you use TDEE for weight loss?</v-card-subtitle>
            <v-card-text class="text2">Most dieticians recommend eating a deficit of anywhere between 500-1,000 calories
                a day. The goal is not to lose weight the fastest</v-card-text>
        </v-card>
        <v-row>
            <v-col>
                <input>
                <v-text-field v-model.number="theage" label="Age" hide-details="auto" class="age"></v-text-field>
                <v-radio-group v-model="thegender" row>gender
                    <v-radio label="male" value="male"></v-radio>
                    <v-radio label="female" value="female"></v-radio>
                </v-radio-group>
                <v-text-field v-model.number="theheight" label="height"></v-text-field>
                <v-text-field v-model.number="theweight" label="weight"></v-text-field>
                <CalcBtn2></CalcBtn2>
                <h1>{{ $store.state.tdee }}kcal</h1>
            </v-col>
        </v-row>
        <v-footer color="black"></v-footer>
    </v-app>
</template>

<script>
export default {
    computed: {
        theage: {
            get() {
                return this.$store.state.age // v-modelはsetとgetを要求するのでどちらも書いてあげる
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
        thegender: {
            get() {
                return this.$store.state.gender
            },
            set(value) {
                this.$store.commit("unkounko4", value)
            }
        }

    },
}

</script>
