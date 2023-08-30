<template>
    <div class="h-[calc(100vh-240px)]">
        <template v-for="(message, index) in chatStore.activeChat?.message"  :key="index">
            <Message
                :message = "message"
               

            />
        </template>
    </div>
</template>
<script setup>

import Message from './Message.vue';
import { useChatStore } from '../stores/chat';
const chatStore = useChatStore();
</script>