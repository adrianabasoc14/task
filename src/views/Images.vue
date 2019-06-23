<template>
  <div class="about">
    <h1>Images </h1>

       <div id = "vuex">
        <b-loading :active.sync="getLoadingData"></b-loading>
        <ul>
            <li v-for="(user, index) in getData" :key="index">
                <img :src="user.url">
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex' 
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters('taskModule', ['getData', 'getLoadingData'])
    },
    methods: {
        ...mapActions('taskModule', ['requestData'])
    },
    
    mounted() {
        this.requestData();
    }
}
</script>