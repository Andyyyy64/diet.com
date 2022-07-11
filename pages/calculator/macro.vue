<template>
    <v-app>
        <v-card color="lightblack" class="card2" outlined>
            <v-card-title class="text">MACRO</v-card-title>
            <v-card-subtitle>what is macro?</v-card-subtitle>
            <v-card-text class="text2">Carbohydrates, fat and protein are called macronutrients. They are the nutrients
                you use in the largest amounts. “Macronutrients are the nutritive components of food that the body needs
                for energy and to maintain the body's structure and systems
            </v-card-text>
            <v-card-subtitle>Which macro is most important?</v-card-subtitle>
            <v-card-text class="text2">Proteins are the building blocks of your body. Pretty much all lean (non-fat)
                tissue in your body is comprised of protein, therefore it is the most important macronutrient.
            </v-card-text>
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
                <v-radio-group v-model="theactivity" row>Activity
                    <v-radio label="Sedentary" value="Sedentary"></v-radio>
                    <v-radio label="Light Activity" value="Light Activity"></v-radio>
                    <v-radio label="Moderate Activity" value="Moderate Activity"></v-radio>
                    <v-radio label="Active" value="Active"></v-radio>
                </v-radio-group>
                <CalcBtn3></CalcBtn3>
                <div v-if="$store.state.kcalFlg">
                    <h1>{{ $store.state.macro }}kcal</h1>
                    <p>protein {{ $store.state.protein }}g</p>
                    <p>fat {{ $store.state.fat }}g</p>
                    <p>carbohydrate {{ $store.state.carbohydrate }}g</p>
                </div>

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
        },
        theactivity: {
            get() {
                return this.$store.state.activity
            },
            set(value) {
                this.$store.commit("unkounko5", value)
            }

        }

    },
}

</script>
