
const { createApp } = Vue

createApp({
    data(){
        return{
            query:"",
            list:[
                {korName:"아이스초키", engName:"lalala"},
                {korName:"라따", engName:"nnnn"}
            ]
        }
    },
    methods:{
        clickHandler(){
            this.list.push({});
        }
    },
    beforeCreate(){
        console.log("beforeCreate");
    },
    async created(){
        console.log("created");
        let response = await fetch("/api/menus");
        let list = await response.json();
        this.list = list;
    },
    beforeMount(){
        console.log("beforeMount");
    },
    mounted(){
        console.log("mounted");
    },
    beforeUpdate(){
        console.log("beforeUpdate");
    },
    updated(){
        console.log("updated");
    },
    beforeUnmount(){
        console.log("beforeUnmount");
    },
    unmounted(){
        console.log("unmounted");
    },
    activated(){
        console.log("activated");
    },
    deactivated(){
        console.log("deactivated");
    }

}).mount('main');