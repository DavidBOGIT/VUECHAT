<template>
    <nav class="navbar bg-white fixed-top w-100">
      <div class="container-chat d-flex justify-content-between align-items-center">
        <span class="navbar-brand mb-0 h1">Chat</span>
        <router-link :to="{ name: 'home' }" class="btn btn-outline-danger">Salir</router-link>
      </div>
    </nav>
  
    <div :style="{ height: '100vh' }" class="d-flex flex-column justify-content-between container-chat py-4">
      <div ref="messagesContainer" class="messages-container flex-grow-1 overflow-auto">
        <list-chat :list="messages" />
      </div>
  
      <form @submit.prevent="handleSubmit" class="d-flex gap-3 chat-form">
        <input
          v-model="inputText"
          type="text"
          class="form-control"
          aria-describedby="Ingresar mensaje"
        />
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { io } from 'socket.io-client';
  import { useRoute } from 'vue-router';
  import ListChat from '../components/ListChat.vue';
  
  export default {
    components: { ListChat },
    setup() {
      const route = useRoute();
  
      return {
        route,
      };
    },
    data() {
      return {
        inputText: '',
        socket: null,
        messages: [],
      };
    },
    computed: {
      currentUser() {
        return this.route.params.user;
      },
    },
    methods: {
      handleSubmit() {
        if (this.inputText === '' || this.socket === null) return;
  
        this.socket.emit('chat message', this.inputText);
        this.inputText = '';
      },
      scrollToBottom() {
        const container = this.$refs.messagesContainer;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      },
    },
    mounted() {
      this.socket = io('http://localhost:3000', {
        query: {
          user: this.currentUser,
        },
      });
  
      this.socket.on('chat message', (data) => {
        const newData = {
          ...data,
          esMio: data.user === this.currentUser,
        };
  
        this.messages.push(newData);
  
    
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      });
  
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    },
    unmounted() {
      this.socket.disconnect();
    },
  };
  </script>
  
  <style scoped>
  .container-chat {
    max-width: 768px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-right: 16px;
    padding-left: 16px;
  }
  
  .messages-container {
    flex-grow: 1;
    overflow-y: auto;
  }
  
  .chat-form {
    position: sticky;
    bottom: 0;
    background: white;
    padding: 10px 0;
  }
  </style>
  