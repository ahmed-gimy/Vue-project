import { reactive, computed } from "vue";
import router from "../router/index";
import { required, helpers, email, minLength, numeric } from "@vuelidate/validators"
import Swal from "sweetalert2";
import {utilites} from '../utilites/utilites'
export const contacts = reactive({

    editedCurrentContactIndex: null,

    contacts: [],  
    

    contactInfo: {
        name: "",
        job: "",
        email: "",
        address: "",
        phone: "",
        about: "",
        rate: "",
        img: "",
    },

    rules: computed (() => {
        return {
        name: { 
            required: helpers.withMessage('* name is required', required), 
            minLength: helpers.withMessage('* name must be more than 10 characters', minLength(3)) ,
        },
        job: { 
            // required: helpers.withMessage('* job is required', required), 
            minLength: helpers.withMessage('* job must be more than 3 characters', minLength(3)),
        },
        email: { 
            // required: helpers.withMessage('* email is required', required), 
            email: helpers.withMessage('* must be an email', email),
        },
        address: { 
            // required: helpers.withMessage('* address is required', required), 
            minLength: helpers.withMessage('* address must be more than 10 characters', minLength(10)),
        },
        phone: { 
            // required: helpers.withMessage('* phone is required', required), 
            numeric: helpers.withMessage('* must be a number', numeric),
        },
        about: { 
            // required: helpers.withMessage('* about is required', required), 
            minLength: helpers.withMessage('* about must be more than 10 characters', minLength(10)),
        },
        rate: { 
            // required: helpers.withMessage('* rate is required', required),
            numeric: helpers.withMessage('* must be a number', numeric),
        },
        img: {
            // required: helpers.withMessage('* img is required', required),
        },
}}),

    onFileChange(e){
        const files = e.target.files
        if(files.length > 0){
            this.contactInfo.img = URL.createObjectURL(files[0]);
        }
    },

    addContact(){
        this.contacts = utilites.add(this.contacts, this.contactInfo);
        utilites.clone(this.contacts);
        this.resetContactInfo();
        utilites.sweetAlert();
        router.push({ path: "/contacts" });
    },

    deleteContact(index){
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
                this.deleteContactConfirm(index);
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
        })
    },

    deleteContactConfirm(index){
        this.contacts = utilites.delete(this.contacts, index)
        utilites.clone(this.contacts);
    },

    resetContactInfo(){
        this.contactInfo = {
            name: "",
            job: "",
            email: "",
            address: "",
            phone: "",
            about: "",
            rate: "",
            img: "",
        }
    },

    editContact(index){
        this.contactInfo = structuredClone(this.contacts[index]);
        // this.contactInfo = {...this.contacts[index]};
        this.editedCurrentContactIndex = index;
    },

    updateContact(){
        this.contacts[this.editedCurrentContactIndex] = this.contactInfo;
        utilites.clone(this.contacts);
        this.resetContactInfo();
        utilites.sweetAlert();
        router.push({ path: "/contacts" });
    },

    search(searchText){
        this.contacts = utilites.clonedArray.filter((contact) =>
            contact.name.toLowerCase().includes(searchText) ||
            contact.about.toLowerCase().includes(searchText)
        );
    }
})