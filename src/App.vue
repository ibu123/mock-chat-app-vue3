<template>
  <ChatContainer/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ChatContainer from './components/ChatContainer.vue';
import { useChatStore } from './stores/chat';
const chatStore = useChatStore();
onMounted(() => {
    chatStore.fetchChat();
})
</script>
