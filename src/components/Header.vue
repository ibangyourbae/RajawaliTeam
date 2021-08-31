<template>
        <v-toolbar flat class="mainHeader">
            <v-toolbar-title>
                <div class="header">
                    <v-img
                    :src="require('../assets/logo.svg')"
                    class="logo"
                    contain
                    height="50"
                />
                </div>
            </v-toolbar-title>

            <v-toolbar-items>
                <v-btn text>Berita</v-btn>
                <v-btn text>Cari Profil</v-btn>
                <v-btn text>Tentang Kami</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-toolbar-items>
                <v-btn text>Masuk</v-btn>
                <v-btn text>Daftar</v-btn>
            </v-toolbar-items>
        </v-toolbar>
</template>

<script>
export default {
    name: "Header"
}
</script>