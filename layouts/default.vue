<template>
  <v-app>
    <v-navigation-drawer app v-model="nav" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list>
          <v-list-group v-for="i in menulists" :key="i.name" :prepend-icon="i.icon" no-action
            :append-icon="i.lists ? undefined : ''">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ i.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="list in i.lists" :key="list">
              <v-list-item-content>
                <v-list-item-title>{{ list }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="green" app clipped-left>
      <v-app-bar-nav-icon @click="nav = !nav"></v-app-bar-nav-icon>
      <v-toolbar-title>diet.com</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text>SNS<v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="e in sns" :key="e.name">
              <v-list-item-icon>
                <v-icon>{{ e.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ e.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultPage",
  data() {
    return {
      nav: null,
      sns: [
        { name: "twitter", icon: "mdi-twitter" },
        { name: "instagram", icon: "mdi-instagram" },
        { name: "github", icon: "mdi-github" },
        { name: "discord", icon: "mdi-discord" }
      ],
      menulists: [
        { name: "What you ate", icon: "mdi-diamond" },
        { name: "Calculator", icon: "mdi-diamond", lists: ["BMI", "TDEE", "Ideal Weight"] },
        { name: "weight Record", icon: "mdi-diamond" },
        { name: "About this site", icon: "mdi-diamond" },
      ]
    }
  }
}
</script>
