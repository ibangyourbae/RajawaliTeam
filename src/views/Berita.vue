<template>
    <div class="halamanberita">
        <v-responsive :aspect-ratio="16/9">
            <Header />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    name: 'Berita',
    components: {
        Header,
    }
}
</script>