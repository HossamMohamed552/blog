<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <img :src="filterDate[0].imgUrl" class="">
                <h5>{{filterDate[0].title}}</h5>
                <div class="col-12">
                    <textarea v-model="comment" placeholder="enter you'r comment"></textarea>
                    <div v-for="mainComment in filterDate[0].comments">
                        {{mainComment.comment}}
                        <div v-for="subComment in mainComment.subComments">
                            sub - {{subComment.comment}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from "../data/data"
    export default {
        name: "PostDetail",
        data(){
            return{
                postsData: data,
                comment: null
            }
        },
        computed:{
            filterDate(){
                return this.postsData.filter( el =>{
                    return  el.id === this.$route.params.id
                })
            }
        },
        created() {
            console.log(this.filterDate);
            console.table(this.filterDate[0].comments);
        }
    }
</script>

<style scoped>
    img{
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    textarea{
        width: 100%;
        border-radius: 15px;
        background: #e3e3e3;
        resize: none;
        padding: 10px;
        outline: none;
        height: 50px;
    }
</style>