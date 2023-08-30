
import { defineStore } from 'pinia'
import axios from 'axios';

export const useChatStore = defineStore('chat',  {
  state : () => ({
      'chatData' : null,
      'activeChatIndex' : null,
  }),
  actions: {
    fetchChat() {
      axios.get('api/chat')
      .then((data) => {
        this.chatData = data.data
        this.activeChatIndex = 0
      })
    }
  },
  getters : {
    activeChat : (state) => {
      return state.chatData ? state.chatData[state.activeChatIndex] : null;
    }
  }
});
