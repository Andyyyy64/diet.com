<template>
  <v-app>
    <v-container >
      <v-card color="lightblack" class="card">
        <v-card-title class="text">Welcome</v-card-title>
        <v-card-subtitle></v-card-subtitle>
        <v-card-text class="text2">This is an all in one site where you can keep track of your weight, calculate various
          numbers(bmi,tdee..), record
          what you eat and calculate calories! We hope this site will make your diet easier!</v-card-text>
                  <v-card-text class="text2">Get Start your diet from the menu on the left! </v-card-text>
      </v-card>
      <v-row>
        <V-col>
          
        </V-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style>
.text {
  font-size: 25px;
}

.text2 {
  font-size: 20px;
}
.card{
  margin-top: 10%;
}
</style>
