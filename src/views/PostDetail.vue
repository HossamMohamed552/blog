<template>
    <div class="fix">
        <div class="container">
            <!--warning message -->
            <div class="alert">
                comment shouldn't have "xmen ,flash or tester"
            </div>
            <!--/-->
            <div class="row">
                <div class="col-12">
                    <!-- heading-->
                    <div class="col-12 text-center text-capitalize my-2">
                        <h5>{{filterDate[0].title}}</h5>
                    </div>
                    <!--/-->
                    <!--image of post-->
                    <div class="col-12">
                        <img :src="filterDate[0].imgUrl" class="img-fluid">
                    </div>
                    <!--/-->
                    <div class="col-12">
                        <!--loop throw all comments in data.json -->
                        <div v-for="mainComment in filterDate[0].comments" :key="mainComment.id">
                            <p class="main_comment">{{mainComment.comment}}</p>
                            <div><span class="reply" @click="mainComment.replyState = true">reply</span></div>
                            <!--loop trow all replies in one comment -->
                            <div v-for="subComment in mainComment.reply" class="replies" :key="subComment.id">
                                <p class="reply_comment">{{subComment.comment}}</p>
                            </div>
                            <!--add new reply -->
                            <transition enter-active-class="fadeInDown">
                                <textarea placeholder="enter you'r reply"
                                          @keyup.enter="addReply($event,mainComment.reply)"
                                          v-if="mainComment.replyState"
                                          class="reply_comment"></textarea>
                            </transition>
                        </div>
                        <!--add new comment -->
                        <textarea v-model="comment" placeholder="enter you'r comment"
                                  @keyup.enter="addComment"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from "../data/data"
    import $ from "jquery";

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
            warningFunc() {
                $(".alert").animate({
                    left: "1%"
                }, 500).delay(2000).animate({
                    left: "-30%"
                }, 800)
            },
            addComment() {
                /* add comment without specific words */
                if (this.comment.includes("xmen") || this.comment.includes("flash") || this.comment.includes("tester")) {
                    this.warningFunc();
                } else {
                    this.filterDate[0].comments.push(
                        {
                            "comment": this.comment,
                            "replyState": false,
                            "reply": []
                        }
                    );
                    /* reset text area */
                    this.comment = "";
                }

            },
            addReply($event, replayArray) {
                /* add comment without specific words */
                let replayComment = $event.target.value;
                if (replayComment.includes("xmen") || replayComment.includes("flash") || replayComment.includes("tester")) {
                    this.warningFunc();
                } else {
                    replayArray.push({
                        "comment": replayComment
                    });
                    $event.target.value = "";
                }
            }
        },
        created() {
        }
    }
</script>

<style scoped lang="scss">
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 5px;
        display: block;
        margin: 1.5rem 0;
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
        margin: 2rem 0;
        transition: all ease-in-out .2s;

        &:focus {
            box-shadow: 0 0 3px 1px rgba(0, 153, 204, 0.49);
        }
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

    .alert {
        position: fixed;
        top: 5%;
        left: -30%;
        z-index: 2;
        width: 25%;
        background: rgba(231, 11, 11, 0.92);
        color: #fff;
        box-shadow: 0 0 5px 1px #3333338c;
    }
</style>