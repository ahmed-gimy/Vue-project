import { reactive, computed } from "vue";
import router from "../router/index";
import { required, helpers, email, minLength, numeric } from "@vuelidate/validators"
import Swal from "sweetalert2";
export const contacts = reactive({
    editedContact: null,

    contacts: [],
    clonedContacts:[],  
    

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
        this.contactInfo.img = files[0];
    },

    addContact(){
        this.contacts.push(this.contactInfo);
        this.clonedContacts=[...this.contacts];
        this.resetContactInfo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
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
        this.contacts= this.contacts.filter((item, i)=>(index !== i));
        this.clonedContacts=[...this.contacts]
        // this.contacts.splice(index, 1);
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
        this.contactInfo = {...this.contacts[index]};
        this.editedContact = index;
    },

    updateContact(){
        this.contacts[this.editedContact] = this.contactInfo;
        this.clonedContacts=[...this.contacts]
        this.resetContactInfo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        router.push({ path: "/contacts" });
    },

    search(searchText){
        this.contacts = this.clonedContacts.filter((contact) =>
            contact.name.toLowerCase().includes(searchText) ||
            contact.about.toLowerCase().includes(searchText)
        );
    }
})