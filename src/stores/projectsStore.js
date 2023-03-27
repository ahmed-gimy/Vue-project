import { reactive, computed } from "vue";
import router from "../router/index";
import { required, helpers, minLength, numeric } from "@vuelidate/validators"
import Swal from "sweetalert2";
import { nanoid } from "nanoid";

export const projects = reactive({
    editedProject: null,
    projects: [
        ["aa", "cc"],
        ["aa", "cc"],
        ["aa", "cc"],
        ["aa", "cc"],
        ["aa", "cc"],
        ["aa", "cc"],
        ["aa", "cc"],
        ["aa", "cc"],
        ["aa", "cc"],
        ["aa", "cc"],
        ["aa", "cc"],
        ["bb", "xx"],
        ["zz", "ss"]
    ],
    clonedProjects:[],  
    
    projectInfo: [
        "",
        ""
    ],

    rules: computed (() => {
        return {
        name: { 
            required: helpers.withMessage('* name is required', required), 
            minLength: helpers.withMessage('* name must be more than 10 characters', minLength(3)) ,
        },
        status: { 
            // required: helpers.withMessage('* job is required', required), 
            minLength: helpers.withMessage('* job must be more than 3 characters', minLength(3)),
        },
        description: { 
            // required: helpers.withMessage('* email is required', required), 
            minLength: helpers.withMessage('* job must be more than 3 characters', minLength(3)),
        },
        client: { 
            // required: helpers.withMessage('* address is required', required), 
            minLength: helpers.withMessage('* address must be more than 10 characters', minLength(10)),
        },
        leader: { 
            // required: helpers.withMessage('* about is required', required), 
            minLength: helpers.withMessage('* about must be more than 10 characters', minLength(10)),
        },
        budget: { 
            // required: helpers.withMessage('* phone is required', required), 
            numeric: helpers.withMessage('* must be a number', numeric),
        },
        duration: { 
            // required: helpers.withMessage('* rate is required', required),
            numeric: helpers.withMessage('* must be a number', numeric),
        },
}}),

    // onFileChange(e){
    //     const files = e.target.files
    //     this.contactInfo.img = files[0];
    // },

    addContact(){
        this.projects.push(this.projectInfo);
        this.clonedProjects=[...this.projects];
        this.resetProjectInfo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        router.push({ path: "/projects" }); 
        
    },

    deleteProject(id){
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
                this.deleteProjectConfirm(id);
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
        })
    },

    deleteProjectConfirm(id){
        this.projects= this.projects.filter((item, i)=>(id !== i));
        this.clonedProjects=[...this.projects]
        // this.projects.splice(index, 1);
    },

    resetProjectInfo(){
        this.ProjectInfo = {
            id: nanoid(),
            name: "",
            status: "",
            description: "",
            client: "",
            leader: "",
            budget: "",
            duration: "",
        }
    },

    editProject(id){
        this.projectInfo = {...this.projects[id]};
        this.editedProject = id;
    },

    updateProject(){
        this.projects[this.editedProject] = this.projectInfo;
        this.clonedProjects=[...this.projects]
        this.resetProjectInfo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        router.push({ path: "/projects" });
    },

    // search(searchText){
    //     this.contacts = this.clonedContacts.filter((contact) =>
    //         contact.name.toLowerCase().includes(searchText) ||
    //         contact.about.toLowerCase().includes(searchText)
    //     );
    // }
})