<template>
    <div class="home-page d-flex justify-content-center align-items-center">
      <div class="card shadow-lg rounded-lg">
        <div class="card-body">
          <h5 class="card-title text-center mb-4">Crear usuario</h5>
  
          <form @submit.prevent="handleSubmit" autocomplete="off">
            <div class="mb-3">
              <label for="user" class="form-label">Ingresar un usuario</label> 
              <input
                v-model="inputText"
                type="text"
                class="form-control"
                id="user"
                aria-describedby="Ingresar usuario"
              />
              <div class="form-text text-danger" v-if="isEmpty">
                El campo no puede ser vacío
              </div>
            </div>
            <button type="submit" class="btn btn-primary w-100 mb-3">
              Ingresar
            </button>
            <hr />
            <div>
              <router-link
                :to="{ name: 'chat', params: { user: 'anonimo' } }"
                class="btn btn-outline-secondary w-100"
              >
                Soy anónimo
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
  
      return {
        router,
      };
    },
    data() {
      return {
        inputText: '',
        isEmpty: false,
      };
    },
    methods: {
      handleSubmit() {
        if (this.inputText === '') {
          this.isEmpty = true;
          return;
        }
  
        this.router.push({ name: 'chat', params: { user: this.inputText } });
      },
    },
    watch: {
      inputText(value) {
        if (value !== '') {
          this.isEmpty = false;
        } else {
          this.isEmpty = true;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .home-page {
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    height: 100vh;
    padding: 20px;
  }
  
  .card {
    width: 22rem;
    padding: 20px;
    border: none;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #343a40;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #004085;
  }
  
  .btn-outline-secondary {
    border-radius: 8px;
  }
  
  .btn-outline-secondary:hover {
    background-color: #e2e6ea;
  }
  
  .form-control {
    border-radius: 8px;
    border: 1px solid #ced4da;
  }
  
  .text-danger {
    font-size: 0.875rem;
    color: #dc3545;
  }
  </style>
  