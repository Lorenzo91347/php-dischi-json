const {createApp} = Vue;
 createApp({
    data(){
        return{
            discs:[],
        }
    },
    methods:{
        getInfo(){
            axios.get('server.php').then((response) => { 
                this.discs = response.data;
            });
        }
    },
    created(){
        this.getInfo()
    }
 }).mount('#app');