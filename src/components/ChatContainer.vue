<template>
    <div class="container w-screen h-screen mx-auto  rounded-xl shadow-lg  bg-gray-50 flex p-8 ">
        <ChatList/>
        <MessagePanel/>
    </div>
</template>
<script setup>
import ChatList from './ChatList.vue';
import MessagePanel from './MessagePanel.vue';
</script>