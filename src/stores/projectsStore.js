import { reactive, computed } from "vue";
import { required, helpers, minLength, numeric } from "@vuelidate/validators"
import router from "../router/index";
import Swal from "sweetalert2";
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net';
import 'datatables.net-select';

DataTable.use(DataTablesLib);

export const projects = reactive({
    
    data: [],

    rowInfo: {
        name: "",
        description: "",
        duration: "",
        Status: "",
        budget: "",
        Leader: "",
        Client: "",
        
    },

    rules: computed (() => {
        return {
        name: { 
            required: helpers.withMessage('* name is required', required), 
            minLength: helpers.withMessage('* name must be more than 3 characters', minLength(3)) ,
        },
        description: { 
            required: helpers.withMessage('* description is required', required), 
            minLength: helpers.withMessage('* description must be more than 10 characters', minLength(10)),
        },
        duration: { 
            required: helpers.withMessage('* duration is required', required), 
            numeric: helpers.withMessage('* must be a number', numeric),
        },
        Status: { 
            required: helpers.withMessage('* Status is required', required), 
        },
        budget: { 
            required: helpers.withMessage('* budget is required', required), 
            numeric: helpers.withMessage('* must be a number', numeric),
        },
        Leader: { 
            required: helpers.withMessage('* Leader is required', required), 
            minLength: helpers.withMessage('* Leader must be more than 3 characters', minLength(3)),
        },
        Client: { 
            required: helpers.withMessage('* Client is required', required),
        },
}}),

    columns: [
        {
            data: "a",
            title: "name"
        },
        {
            data: "b",
            title: "description"
        },
        {
            data: "c",
            title: "duration"
        },
        {
            data: "d",
            title: "Status"
        },
        {
            data: "e",
            title: "budget"
        },
        {
            data: "f",
            title: "Leader"
        },
        {
            data: "g",
            title: "Client"
        },
        
    ],
    
    addProject(){
        const dataInfo = {
            a: this.rowInfo.name,
            b: this.rowInfo.Client,
            c: this.rowInfo.Leader,
            d: this.rowInfo.Status,
            e: this.rowInfo.budget,
            f: this.rowInfo.description,
            g: this.rowInfo.duration,
        }
        this.data.push(dataInfo);
        console.log(this.data)
        this.resetRowInfo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        router.push({ path: "/projects" }); 
        
    },

    resetRowInfo(){
        this.rowInfo = {
            name: "",
            description: "",
            duration: "",
            Status: "",
            budget: "",
            Leader: "",
            Client : "",
            
        }
    },
})