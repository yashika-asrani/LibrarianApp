<template>
    <div class="center">
        <v-row>
            <v-col cols="10" offset="1" sm="6" offset-sm="3" md="4" offset-md="4">

                <!-- cols="10" sets the width of the column to 10 out of 12 units. 
                offset="1" adds a left margin of 1 unit to the left side of the column. 
                sm="6" sets the width of the column to 6 out of 12 units on small screens. 
                offset-sm="3" adds a left margin of 3 units to the left side of the column on small screens. 
                md="4" sets the width of the column to 4 out of 12 units on medium screens. 
                offset-md="4" adds a left margin of 4 units to the left side of the column on medium screens.     -->

                <v-avatar color="primary" size="56" tile>
                    <v-img src="@/assets/logo.png"></v-img>
                </v-avatar>
                <v-text-field label="Username" type="text" v-model="username"></v-text-field>
            <v-text-field label="Passwrod" type="password" v-model="password"></v-text-field>
                <v-btn class="base-inverted" block @click="authenticate()">Login</v-btn>
            </v-col>
        </v-row>


    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        authenticate() {
            alert("Successfully logged in :)")
            
        }
    },
}
</script>
    
<style lang="scss" scoped></style>