import { reactive, computed } from "vue";
import router from "../router/index";
import { required, email, helpers, minLength } from "@vuelidate/validators"
import Swal from "sweetalert2";

export const users = reactive({
    editedUser: null,

    users: [],
    clonedUsers:[],  
    

    userInfo: {
        name: "",
        image: "",
        email: "",
        address: "",
        about: "",
        status: "",
    },

    rules: computed (() => {
        return {
        name: { 
            required: helpers.withMessage('* name is required', required), 
            // minLength: helpers.withMessage('* name must be more than 10 characters', minLength(3)) ,
        },
        image: { 
            // required: helpers.withMessage('* image is required', required), 
        },
        email: { 
            // required: helpers.withMessage('* email is required', required),
            // email: helpers.withMessage('* must be an email', email), 
        },
        address: { 
            // required: helpers.withMessage('* price is required', required),
            // minLength: helpers.withMessage('* address must be more than 10 characters', minLength(10)), 
        },
        about: { 
            // required: helpers.withMessage('* price is required', required),
            // minLength: helpers.withMessage('* about must be more than 10 characters', minLength(10)),
        },
        status: { 
            // required: helpers.withMessage('* status is required', required), 
        },
}}),

    onFileChange(e){
        const files = e.target.files
        if(files.length > 0){
            this.userInfo.image = URL.createObjectURL(files[0]);
        }
    },

    addUser(){
        this.users.push(this.userInfo);
        this.clonedUsers = [...this.users];
        this.resetUserInfo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1000
        })
        router.push({ path: "/users" }); 
        
    },

    resetUserInfo(){
        this.userInfo = {
            name: "",
            image: "",
            email: "",
            address: "",
            about: "",
            status: "",
        }
    },

    deleteUser(index){
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
                this.deleteUserConfirm(index);
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
        })
    },

    deleteUserConfirm(index){
        this.users= this.users.filter((item, i)=>(index !== i));
        this.clonedUsers=[...this.users]
        // this.users.splice(index, 1);
    },

    editUser(index){
        this.userInfo = {...this.users[index]};
        this.editedUser = index;
    },

    updateUser(){
        this.users[this.editedUser] = this.userInfo;
        this.clonedUsers=[...this.users]
        this.resetUserInfo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        router.push({ path: "/users" });
    },

    search(searchText){
        this.users = this.clonedUsers.filter((user) =>
        user.name.toLowerCase().includes(searchText) ||
        user.about.toLowerCase().includes(searchText)
        );
    },
})