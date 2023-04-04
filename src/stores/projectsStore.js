import { reactive, computed } from "vue";
import { required, helpers, minLength, numeric } from "@vuelidate/validators"
import router from "../router/index";
import Swal from "sweetalert2";

export const projects = reactive({

    editedProject: null,

    data: [],
    clonedData: [],

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
            // minLength: helpers.withMessage('* name must be more than 3 characters', minLength(3)) ,
        },
        description: { 
            // required: helpers.withMessage('* description is required', required), 
            minLength: helpers.withMessage('* description must be more than 10 characters', minLength(10)),
        },
        duration: { 
            // required: helpers.withMessage('* duration is required', required), 
            numeric: helpers.withMessage('* must be a number', numeric),
        },
        Status: { 
            // required: helpers.withMessage('* Status is required', required), 
        },
        budget: { 
            // required: helpers.withMessage('* budget is required', required), 
            numeric: helpers.withMessage('* must be a number', numeric),
        },
        Leader: { 
            // required: helpers.withMessage('* Leader is required', required), 
            minLength: helpers.withMessage('* Leader must be more than 3 characters', minLength(3)),
        },
        Client: { 
            // required: helpers.withMessage('* Client is required', required),
        },
}}),

    columns: [
        {
            data: "name"
        },
        {
            data: "description"
        },
        {
            data: "duration"
        },
        {
            data: "Status"
        },
        {
            data: "budget"
        },
        {
            data: "Leader"
        },
        {
            data: "Client"
        },
        // {
        //     data: null,
        //     className: "dt-center editor-edit",
        //     defaultContent: '<router-link to="/projects/edit" class="fas fa-pencil-alt"/>',
        //     orderable: false
        // },
        // {
        //     data: null,
        //     className: "dt-center editor-delete",
        //     defaultContent: '<i class="fa fa-trash"/>',
        //     orderable: false
        // }
    ],
    
    addProject(){
        this.data.push(this.rowInfo);
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
            Client: "",
        }
    },    

    updateProject(){
        this.data[this.editedProject] = this.rowInfo;
        console.log(this.rowInfo);
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
})