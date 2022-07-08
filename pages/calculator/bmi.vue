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
            <V-col>
                <input>
                <v-text-field v-model.number="theage" label="Age" hide-details="auto" class="age"></v-text-field>
                <v-radio-group v-model.number="gender" row>gender
                    <v-radio label="male" value="radio1"></v-radio>
                    <v-radio label="female" value="radio2"></v-radio>
                </v-radio-group>
                <v-text-field v-model.number="theheight" label="height"></v-text-field>
                <v-text-field v-model.number="theweight" label="weight"></v-text-field>
                <h1>{{($store.state.weight / Math.pow($store.state.height/100, 2)).toFixed(1)}}</h1>
            </V-col>
        </v-row>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            gender: "",
        }
    },
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
}

</script>

<style>
</style>