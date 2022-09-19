<template>
  <div >
    <div>
    <h1>This is about page</h1>
  </div>
  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleModalTwo">Open Modal 2</button>
 
    <!-- <template v-slots:links>
      <a href="#">Register</a>
      <a href="#">Login</a>
    </template> -->

  <div v-if="showModal" class="about" @click.self="toggleModal">
    <div class="modal">
      <h1>Modal Title</h1>
      <p>hi this is modal</p>
      <div class="actions">
        <slot>
          <a href="#">Sign Up</a>
          <a href="#">Login</a>
        </slot>
      </div>
    </div>

  </div>

  <div v-if="showModalTwo" class="about" @click.self="toggleModalTwo">
    <div class="modal">
      <h1>Modal 2</h1>
      <p>Welcome to Modal Two</p>
      <div class="actions">
        <slot>
          <a href="#">Sign Up</a>
          <a href="#">Login</a>
        </slot>
      </div>
    </div>

  </div>



  </div>

 

</template>

<script>
export default {
  data() {
    return {
        showModal: false,
        showModalTwo: false
      }
  },
  methods: {
    toggleModal() {
        this.showModal = !this.showModal
    },
    toggleModalTwo() {
        this.showModalTwo = !this.showModalTwo
    },
    }
  }
</script>


<style>
  .modal{
    width: 350px;
    height: 150px;
    padding: 20px;
    margin: 100px auto;
    background: rgb(240, 241, 240);
    border-radius: 50px;
  }
  .about{
    top:0;
    position: fixed;
    background: rgb(91, 95, 88);
    width: 100%;
    height: 100%;
  }
  .modal h1{
    color: #73dd1c;
    border: none;
    padding: 0;
  }

.modal .actions{
  text-align: center;
  margin: 30px 0 10 px 0;
  color: #dd561c;

}

.modal .actions a {
  color: blue;
  padding: 8px;
  border-radius: 5px;
  text-decoration: none;
  margin: 10px;
}


</style>