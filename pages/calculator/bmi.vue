<template>
    <v-app>
        <v-card color="lightblack" class="card2" outlined>
            <v-card-title class="text">BMI</v-card-title>
            <v-card-subtitle>what is bmi?</v-card-subtitle>
            <v-card-text class="text2">Body Mass Index (BMI) is a measurement of a person’s weight with respect to his
                or her height. It is more of an indicator than a direct measurement of a person’s total body fat.
            </v-card-text>
            <v-card-subtitle>how is bmi used?</v-card-subtitle>
            <v-card-text class="text2">BMI can be a screening tool, but it does not diagnose the body fatness or health
                of an individual. To determine if BMI is a health risk, a healthcare provider performs further
                assessments.</v-card-text>
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
                <CalcBtn></CalcBtn>
                <h1>{{ $store.state.bmi }}</h1>
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