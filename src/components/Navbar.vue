<template>
  <div>
    <v-app-bar app>
    <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="@/assets/logo.png" transition="scale-transition"
            width="40" />

        <label for="">{{ $const.APP_NAME }}</label>
    </div>

    <v-spacer></v-spacer>
    <v-icon>mdi-account-circle</v-icon>
    <v-btn text>Login</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>