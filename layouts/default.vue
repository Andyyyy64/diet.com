<template>
  <v-app>
    <v-navigation-drawer v-if="nav" app clipped>
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
            <template #activator>
              <v-list-item-content>
                <v-btn text :to="i.link" small>{{ i.name }}</v-btn>
              </v-list-item-content>
            </template>
            <v-list-item v-for="list in i.lists" :key="list" :to="list.link">
              <v-list-item-content>
                <v-list-item-title>{{ list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="lightblack" app clipped-left>
      <v-app-bar-nav-icon @click="nav = !nav"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <Nuxt-Link to="/" class="navhome">diet.com</Nuxt-Link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu offset-y>
          <template #activator="{ on }">
            <v-btn v-on="on" text>SNS<v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="e in sns" :key="e.name" :href="e.link">
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
      nav: true,
      sns: [
        { name: "twitter", icon: "mdi-twitter", link: "https://twitter.com/aiukkksss1" },
        { name: "instagram", icon: "mdi-instagram", link: "https://www.instagram.com/andyyyy_64/" },
        { name: "github", icon: "mdi-github", link: "https://github.com/Andyyyy64" },
        { name: "discord", icon: "mdi-discord" }
      ],
      menulists: [
        { name: "Calculate", icon: "mdi-diamond", lists: [{ name: "BMI", link: "/calculator/bmi" }, { name: "TDEE", link: "/calculator/tdee" }, { name: "Macro", link: "/calculator/macro" }] },
        { name: "weight Record", icon: "mdi-diamond", link: "/weightrecord" },
        { name: "What you ate", icon: "mdi-diamond", link: "/whatuate" },
      ]
    }
  }
}
</script>

<style>
.navhome {
  text-decoration: none;
}
</style>
