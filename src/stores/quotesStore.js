import { reactive, computed } from "vue";
import router from "../router/index";
import { required, email, helpers, minLength } from "@vuelidate/validators"
import Swal from "sweetalert2";

export const quotations = reactive({
    editedQuote: null,

    quotes: [],
    clonedQuotes:[],  
    

    quoteInfo: {
        name: "",
        description: "",
        duration: "",
        extrahoures: "",
        status: "",
        budget: "",
        leader: "",
        client: "",
    },

    rules: computed (() => {
        return {
        name: { 
            required: helpers.withMessage('* name is required', required), 
            minLength: helpers.withMessage('* name must be more than 3 characters', minLength(3)) ,
        },
        description: { 
            // required: helpers.withMessage('* description is required', required), 
            // minLength: helpers.withMessage('* description must be more than 10 characters', minLength(10)),
        },
        duration: { 
            // required: helpers.withMessage('* duration is required', required), 
            // numeric: helpers.withMessage('* must be a number', numeric),
        },
        extrahoures: { 
            // required: helpers.withMessage('* duration is required', required), 
            // numeric: helpers.withMessage('* must be a number', numeric),
        },
        status: { 
            // required: helpers.withMessage('* Status is required', required), 
        },
        budget: { 
            // required: helpers.withMessage('* budget is required', required), 
            // numeric: helpers.withMessage('* must be a number', numeric),
        },
        leader: { 
            // required: helpers.withMessage('* Leader is required', required), 
            // minLength: helpers.withMessage('* Leader must be more than 3 characters', minLength(3)),
        },
        client: { 
            // required: helpers.withMessage('* Client is required', required),
        },
}}),


    addQuote(){
        this.quotes.push(this.quoteInfo);
        this.clonedQuotes = [...this.quotes];
        this.resetQuoteInfo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1000
        })
        router.push({ path: "/quote" }); 
        
    },

    resetQuoteInfo(){
        this.quoteInfo = {
            name: "",
            description: "",
            duration: "",
            extrahoures: "",
            Status: "",
            budget: "",
            Leader: "",
            Client: "",
        }
    },

    deleteQuote(index){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.deleteQuoteConfirm(index);
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
        })
    },

    deleteQuoteConfirm(index){
        this.quotes = this.quotes.filter((item, i)=>(index !== i));
        this.clonedQuotes = [...this.quotes]
        // this.quotes.splice(index, 1);
    },

    editQuote(index){
        this.quoteInfo = {...this.quotes[index]};
        this.editedQuote = index;
    },

    updateQuote(){
        this.quotes[this.editedQuote] = this.quoteInfo;
        this.clonedQuotes = [...this.quotes]
        this.resetQuoteInfo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        router.push({ path: "/quote" });
    },

    search(searchText){
        this.quotes = this.clonedQuotes.filter((quote) =>
        quote.name.toLowerCase().includes(searchText) ||
        quote.description.toLowerCase().includes(searchText)
        );
    },
})