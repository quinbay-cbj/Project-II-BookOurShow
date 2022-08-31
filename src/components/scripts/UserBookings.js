export default {
    name: 'UserBookingsComponent',
    data(){
        return {
            username: localStorage.getItem('name') || 'User'
        }
    },
    methods:{
        GreetingMessage(){
            const hour = new Date().getHours();
            if(hour >=0 && hour<12)
                return "Good Morning";
            else if(hour >= 12 && hour<16)
                return "Good Afternoon";
            else
                return "Good Evening";
        }
    }
}