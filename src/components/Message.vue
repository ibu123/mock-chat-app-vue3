<template>
    <div class="flex mt-3 justify-end" v-if="props.message.sender_id == 100">
        
        <div class="w-4/3 max-w-full px-3">
            <span class="mb-0 text-sm text-gray-500  font-medium">
              {{props.message.name}}
              <span class="text-gray-400 text-xs ml-2">{{  moment(props.message.date).format('DD-MM-YYYY hh:mm A')  }}</span>
            </span>
            <p class="mb-0  leading-normal normal-case text-md">
              {{props.message.text}}
            </p>
        </div>
        <div class="px-3 text-right basis-1/16">
          <div class="inline-block w-12 h-12 text-center rounded-lg">
            <img :src="'/avatar/'+props.message.image" class="rounded-full">
          </div>
        </div>
    </div>
    <div class="flex mt-3" v-else>
        <div class="px-3 text-right basis-1/16">
          <div class="inline-block w-12 h-12 text-center rounded-lg">
            <img :src="'/avatar/'+props.message.image" class="rounded-full">
          </div>
        </div>
        <div class="w-4/3 max-w-full px-3">
            <span class="mb-0 text-sm text-gray-500  font-medium">
              {{props.message.name}}
              <span class="text-gray-400 text-xs ml-2">{{  moment(props.message.date).format('DD-MM-YYYY hh:mm A')  }}</span>
            </span>
            <p class="mb-0  leading-normal normal-case text-md">
              {{props.message.text}}
            </p>
        </div>
    </div>
</template>
<script setup>
import moment from 'moment'
const props = defineProps([
    'message'
])
</script>