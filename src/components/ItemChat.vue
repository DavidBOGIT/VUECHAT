<template>
    <div
      class="d-flex mb-3"
      :class="{
        'justify-content-end': user.esMio === true,
        'justify-content-start': user.esMio === false
      }"
    >
      <div
        class="p-3 rounded-lg message-box"
        :class="{
          'bg-own-message text-white mine': user.esMio,
          'bg-light text-dark other': !user.esMio
        }"
      >
        <h5 class="user-name">{{ user.user }}</h5>
        <p class="message-text m-0">{{ user.message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['user'],
  };
  </script>
  
  <style scoped>
  
  .message-box {
    max-width: 80%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 15px;
    font-size: 1.1rem;
    line-height: 1.5;
  }
  
  .mine {
    background-color: #d4edda;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 20px;
  }
  
  .bg-own-message {
    background-color: #d1e7dd;
    color: #212529;
  }
  
  .other {
    background-color: #f8f9fa;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 20px;
  }
  

  .user-name {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #333;
  }
  
  .message-text {
    font-size: 1.1rem;
    color: #555;
  }
  
  
  .d-flex {
    margin-bottom: 15px;
  }
  </style>
  