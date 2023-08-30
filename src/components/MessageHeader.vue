<template>
    
    <div class="flex grow flex-1 items-center border-b pb-3">
        <div class="w-16"><img :src="'/avatar/'+chatStore?.activeChat?.image" class="rounded-full"></div>
        <div class="w-2/3 pl-6">
            <p class="mb-0 font-semibold leading-normal normal-case text-md">{{chatStore?.activeChat?.name}}</p>
            <span class="mb-0 text-sm text-gray-400 font-medium">
            @{{chatStore?.activeChat?.username}}
            </span>
         </div>
        <div class="flex w-1/4 justify-end">
            <button class="px-3 py-2 border rounded-xl flex"> Follow <PlusSmallIcon class="h-6 w-6 text-gray-500" /></button>
            <button class="px-3 ml-3 py-2 border rounded-xl flex"> Message  <ChatBubbleLeftEllipsisIcon class="h-6 w-6 ml-2" /> </button>
        </div>
    </div>
</template>
<script setup>
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/vue/24/outline";
import { PlusSmallIcon } from "@heroicons/vue/24/outline";
import { useChatStore } from "../stores/chat";
const chatStore = useChatStore();
</script>
