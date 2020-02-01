<template>
    <div class="col-md-4 col-12">
        <div class="post">
            <div class="hold-img">
                <img :src="post.imgUrl" class="img-fluid">
            </div>
            <div class="row">
                <div class="col-6">
                    <h5 class="my-3">{{post.title}}</h5>
                </div>
                <div class="col-6 d-flex justify-content-end align-items-center">
                    <i class="far fa-comment"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            post: {default: {}, type: Object}
        },
        data() {
            return {}
        },

    }
</script>

<style scoped lang="scss">
    .post {
        border-radius: 4px;
        box-shadow: 0 0 7px 1px #e3e3e3;
        overflow: hidden;
        margin: 15px 0;
        cursor: pointer;
        transition: all ease-in-out .4s;

        .hold-img {
            height: 200px;
            overflow: hidden;

            img {
                height: 200px;
                width: 100%;
                object-fit: cover;
                transition: all linear 1.5s;
            }
        }

        h5 {
            padding-left: 15px;
            text-transform: capitalize;
        }

        .fa-comment {
            margin-right: 15px;
        }

        &:hover {
            box-shadow: 0 0 7px 1px #b8b8b8;
            img {
                transform: scale(1.05);
            }
        }
    }


</style>