<template>
    <v-app>
        <v-row align="center" justify="center">
            <v-card height="100" width="250">
                <v-row justify="center">
                    <v-btn color="success" class="mt-12" @click="overlay = !overlay">
                        add food
                    </v-btn>
                    <v-overlay :absolute="absolute" :value="overlay">
                        <v-card height="500" width="1000">
                            <v-text-field placeholder="enter food name" v-model="foodname" label="name"></v-text-field>
                            <v-text-field placeholder="enter the time you ate. ex 20xx/xx/xx" v-model="time" label="time">
                            </v-text-field>
                            <v-radio-group v-model="kind" row>
                                <v-radio label="breakfast" value="breakfast"></v-radio>
                                <v-radio label="lunch" value="lunch"></v-radio>
                                <v-radio label="dinner" value="dinner"></v-radio>
                            </v-radio-group>
                            <v-text-field placeholder="enter food calory" v-model="calory" label="calory">
                            </v-text-field>
                        </v-card>
                        <v-btn width="100" @click="adddata">追加</v-btn>
                    </v-overlay>

                </v-row>
            </v-card>
        </v-row>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            calories: [],
            absolute: true,
            overlay: false,
            foodname: "",
            time: "",
            kind: "",
            calory: ""

        }
    },
    mounted() {
        this.$fire.database.ref("calories").on("value", (snapshot) => {
            this.calories = snapshot.val();
        })
    },
    methods: {
        adddata() {
            this.overlay = false
            this.$fire.database.ref("calories").push({
                name: this.foodname,
                time: this.time,
                kind: this.kind,
                calory: this.calory
            })
        },
        hideol() {

        }
    }
}
</script>