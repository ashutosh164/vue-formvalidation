<template>
  <h1>Register form </h1>


  <form action="" @submit.prevent="handelSubmit">
    <label for="">Email: </label>
    <input type="text" required v-model="email">
    <label for="">Password: </label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error">{{passwordError}}</div>

    <label for="">Role: </label>
    <select v-model="role" name="" id="">
        <!-- <option value="" >-----</option> -->
        <option value="developer">Web developer</option>
        <option value="designer">Web Designer</option>
    </select>

    <label for="">Skills: </label>
    <input type="text" v-model="tempSkill" @keypress="addSkill">

    <div v-for="i in skills" :key="i" class="pill" @click="deleteSkill(i)">
        <span >{{i}}</span>
    </div>


    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label for="">Accept terms and condition</label>
    </div>
    <!-- <div>
        <label for="">Ashu</label>
        <input type="checkbox" value="ashu" v-model="name">
    </div>
    <div>
        <label for="">Rocky</label>
        <input type="checkbox" value="rocky" v-model="name">
    </div>
    <div>
        <label for="">Chinki</label>
        <input type="checkbox" value="chinki" v-model="name">
    </div> -->

    <div class="submit">
        <button>Create an Account</button>
    </div>

  </form>
  <p>Email: {{email}}</p>
  <p>Password: {{password}}</p>
  <p>Role: {{role}}</p>
  <p>terms: {{terms}}</p>
  <p>show selected :  {{name}}</p>
  <p>skill : {{tempSkill}}</p>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            tempSkill: '',
            skills: [],
            passwordError: '',
        }
    },
    methods: {
        addSkill(e) {
            // console.log(e)
            if (e.key === ' ' && this.tempSkill) {
                if(!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
            
        },
        deleteSkill(i) {
            this.skills = this.skills.filter((item) => {
                return i !== item
            })
        },
        handelSubmit() {
            // validate password
            this.passwordError = this.password.length > 5 ? '': 'Password must be at least 6 chars long'
            if (!this.passwordError) {
                console.log('email:', this.email)
                console.log('password: ', this.password)
                console.log('role: ', this.role)
                console.log('terms: ', this.terms)
                console.log('tempskills: ', this.skills)
            }
        }
    
    }

}
</script>

<style>
    body{
        margin: 0;
        background: #eee;
    }
    form{
        max-width: 429px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;

    }
    label {
        color: rgb(17, 15, 15);
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    input[type='checkbox']{
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;

    }
    .pill{
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 6px 12px;
        background: rgb(38, 76, 192);
        border-radius: 20px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
        color: rgb(15, 13, 13);
        cursor: pointer;
    }
    button{
        background: blue;
        border: 0;
        padding: 10px 50px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;

    }
    .submit{
        text-align: center;
    }
    .error{
        color: red;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>