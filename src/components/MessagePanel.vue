<template>
    <div class="w-9/12 rounded-xl bg-white rounded-xl drop-shadow-2xl p-7 ml-3 ">
        <MessageHeader/>
        <MessageContainer/>
        <MessageControl/>
    </div>
</template>
<script setup>
import MessageContainer from './MessageContainer.vue';
import MessageHeader from './MessageHeader.vue';
import MessageControl from './MessageControl.vue';
</script>