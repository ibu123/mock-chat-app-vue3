<template>
    <li class="flex-auto py-2.5 list-none border-b  px-2 rounded" :class="{
      'bg-slate-100' : props.itemIndex == chatStore.activeChatIndex
    }">
      <div class="flex flex-row -mx-3 items-center ">
        <!-- <div class="px-3 text-right basis-1/2 ">
            <input type="checkbox" class=" checked:bg-blue-500 " />
        </div> -->
        <div class="px-3 text-left w-[18%] ">
          <div class="inline-block w-12 h-12 text-center rounded-lg">
            <img :src="props.avatar" class="rounded-full">
          </div>
        </div>
        <div class="flex w-[82%]  px-2 relative">
          <div >
            <p class="mb-0 font-semibold leading-normal normal-case text-md">{{ props.name }}</p>
            <span class="mb-0 text-sm text-gray-400  font-medium">
            {{lastMessage[0].text}}
            
            </span>
            <span class="absolute left-1/2 top-1 text-slate-400 text-xs">
              {{ moment(lastMessage[0].date).format('DD-MM-YYYY hh:mm A') }}
            </span>
          </div>
        </div>
        
      </div>
    </li>
</template>
<script setup>
import { useChatStore } from '../stores/chat';
import moment from 'moment';
const chatStore = useChatStore();

const props = defineProps([
    'username',
    'name',
    'avatar',
    'itemIndex',
    'lastMessage'
])


</script>