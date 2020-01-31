<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <img :src="filterDate[0].imgUrl" class="">
                <h5>{{filterDate[0].title}}</h5>
                <div class="col-12">
                    <div v-for="mainComment in filterDate[0].comments" :key="mainComment.id">
                        {{mainComment.id}}
                        <p class="main_comment">{{mainComment.comment}}</p>
                        <div><span class="reply" @click="mainComment.replyState = true">reply</span></div>
                        <div v-for="subComment in mainComment.reply" class="replies" :key="subComment.id">
                            <p class="reply_comment">sub - {{subComment.comment}}</p>
                        </div>
                        <transition enter-active-class="fadeInDown">
                                <textarea placeholder="enter you'r reply"
                                          @keyup.enter="addReply($event,mainComment.reply)"
                                          v-if="mainComment.replyState"
                                          class="reply_comment"></textarea>
                        </transition>
                    </div>
                    <textarea v-model="comment" placeholder="enter you'r comment" @keyup.enter="addComment"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from "../data/data"

    export default {
        name: "PostDetail",
        data() {
            return {
                postsData: data,
                comment: null,
                replyComment: null,
                reply: false
            }
        },
        computed: {
            filterDate() {
                return this.postsData.filter(el => {
                    return el.id === this.$route.params.id
                })
            }
        },
        methods: {
            addComment() {
                this.filterDate[0].comments.push({"comment": this.comment, "reply": []});
                this.comment = "";
                console.log(this.filterDate[0].comments);
            },
            addReply($event, replayArray) {
                let replayComment = $event.target.value;
                replayArray.push({"comment": replayComment});
                console.log(replayArray);
            }
        },
        created() {
            console.log(this.filterDate[0].comments);
        }
    }
</script>

<style scoped lang="scss">
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    textarea {
        width: 100%;
        border-radius: 15px;
        background: #F2F3F5;
        resize: none;
        padding: 12px;
        outline: none;
        overflow: hidden;
        border-color: transparent;
        box-shadow: 0 0 3px 1px rgba(0, 153, 204, 0.49);
        margin: 2rem 0;
    }

    .main_comment {
        margin-bottom: 0;
        background: #F2F3F5;
        color: #333;
        border-radius: 15px;
        padding: 12px;
    }

    .reply {
        cursor: pointer;
        transition: all linear .4s;
        text-transform: capitalize;
        font-size: .8rem;
        margin: 3px 0 0 15px;

        &:hover {
            color: #09c;
        }
    }

    .replies {
        margin-left: 30px;
    }

    .reply_comment {
        margin: 10px 0;
        background: #F2F3F5;
        color: #333;
        border-radius: 15px;
        padding: 12px;
    }
</style>