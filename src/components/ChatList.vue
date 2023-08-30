<template>
    <div class="w-3/12  rounded-xl bg-white rounded-xl drop-shadow-2xl p-4 overflow-auto ">
        <ul v-for="(user, index) in chatData">
            <UserList
                :username="user.username"
                :name="user.name"
                :avatar="'/avatar/'+user.image"
                :item-index="index"
                :last-message="user.message.slice(-1)"
                @click="openChat(index)"
            />
        </ul>
    </div>
</template>
<script setup>
import UserList from './UserList.vue';
import {storeToRefs} from 'pinia';
import { useChatStore } from '../stores/chat';
const chatStore = useChatStore();

const {chatData} = storeToRefs(chatStore); 
const openChat = (index) => {
    chatStore.activeChatIndex = index;
}
</script>
