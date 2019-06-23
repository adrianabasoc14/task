import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export default {
    requestData: (context) => {
        if (context.state.data.length === 0) {
            console.log("Request(from task) sent!");
            Vue.http.get('https://jsonplaceholder.typicode.com/photos').then(response => {
                context.commit("setData", response.data);
            },
            error => {
                console.log(error);
            })
        }
    }
}
