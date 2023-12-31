import { reactive, computed } from "vue";
import router from "../router/index";
import { required, helpers, minLength } from "@vuelidate/validators"
import Swal from "sweetalert2";
import html2pdf from 'html2pdf.js';
import * as XLSX from 'xlsx/xlsx.mjs';

export const projects = reactive({
    editedProject: null,
    
    projects: [],
    clonedProjects:[],  
    

    projectInfo: {
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


    addProject(){
        this.projects.push(this.projectInfo);
        this.clonedProjects = [...this.projects];
        this.resetProjectInfo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1000
        })
        router.push({ path: "/projects" }); 
        
    },

    resetProjectInfo(){
        this.projectInfo = {
            name: "",
            description: "",
            duration: "",
            extrahoures: "",
            status: "",
            budget: "",
            leader: "",
            client: "",
        }
    },

    deleteProject(index){
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
                this.deleteProjectConfirm(index);
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
        })
    },

    deleteProjectConfirm(index){
        this.projects = this.projects.filter((item, i)=>(index !== i));
        this.clonedProjects = [...this.projects]
        // this.projects.splice(index, 1);
    },

    editProject(index){
        this.projectInfo = {...this.projects[index]};
        this.editedProject = index;
    },

    updateProject(){
        this.projects[this.editedProject] = this.projectInfo;
        this.clonedProjects = [...this.projects]
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

    search(searchText){
        this.projects = this.clonedProjects.filter((project) =>
        project.name.toLowerCase().includes(searchText) ||
        project.description.toLowerCase().includes(searchText)
        );
    },

    exportProjects(){
        const worksheet = XLSX.utils.json_to_sheet(this.projects);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Projects');
        XLSX.writeFile(workbook, 'Projects.xlsx');
    },

    createPdf(){
        const projectsEl = document.querySelector('.table')
        const options = {
          margin: 10,
          filename: 'projects.pdf',
          image: { type: 'jpeg', quality: 1},
          jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
        }
        html2pdf().set(options).from(projectsEl).save()
    },
})