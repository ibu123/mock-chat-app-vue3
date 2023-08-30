<template>
    <div class="flex flex-1 relative">
        <input type='text' class="border w-full p-2 rounded-md focus:outline-blue-100" v-model="messageToSend" v-on:keyup.enter="sendMessage()">
        <button class="absolute bg-blue-500 py-[6.5px] top-1  px-4 rounded-md text-white text-sm right-1" @click="sendMessage()"> Send </button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import moment from 'moment';
import { useToast } from "vue-toastification";
import { useChatStore } from '../stores/chat';
const chatStore = useChatStore()
const messageToSend = ref(null);
const toast = useToast();
const sendMessage = () => {
    if(messageToSend.value) {
        chatStore.activeChat.message.push({
            "name" : "Chalsei Haley",
            "text" : messageToSend.value,
            "sender_id" : 100,
            "image" : "avatar.jpg",
            "date" : moment().format('YYYY-MM-DD HH:mm:ss')
        })

        messageToSend.value = '';
    } else {
        toast.error("Please Enter Message")
    }
}
</script>