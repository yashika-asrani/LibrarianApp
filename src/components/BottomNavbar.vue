<template>
    <div>
        <v-bottom-navigation v-model="value" app>
            <v-btn value="recent" @click="$router.push('/books')">
                <!-- $router is the router instance that provides programmatic navigation and URL related functionalities. -->
                <span>Books</span>
                <!-- designed to navigate the user to a page with books when it is clicked -->
                <v-icon>mdi-history</v-icon>
            </v-btn>

            <v-btn value="favorites" @click="$router.push('/authors')">
                <span>Authors</span>
                 <!-- designed to navigate the user to a page with authors when it is clicked -->
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn value="nearby">
                <span>Members</span>
                 <!-- designed to navigate the user to a page with members when it is clicked -->
                <v-icon>mdi-map-marker</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>