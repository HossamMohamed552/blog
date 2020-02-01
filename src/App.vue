<template>
    <div id="app">
        <h3 class="text-center text-capitalize my-2">simple blog</h3>
        <div style="overflow: hidden">
            <transition name="fade" enter-active-class="animated fadeIn delay-1s" leave-active-class="animated fadeOut">
                <router-view/>
            </transition>
        </div>
    </div>
</template>


<style lang="scss">

    .fix {
        left: 0;
        right: 0;
        width: 100%;
        position: absolute;
    }
</style>
