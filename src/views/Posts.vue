<template>
    <div class="posts fix">
        <div class="container">
            <div class="row">
                <slot v-for="post in postsData" >
                    <router-link tag="slot" :to="`/post-detail/${post.id}`" >
                        <Post  :post="post"></Post>
                    </router-link>
                </slot>

            </div>
        </div>
    </div>
</template>

<script>
    import Post from "../components/Post";
    import PostDetail from "../views/PostDetail";
    import data from "../data/data.json";

    export default {
        components: {Post, PostDetail},
        data() {
            return {
                postsData: data
            }
        },
        computed:{

        },
        methods: {

        }
    }
</script>

<style scoped>

</style>