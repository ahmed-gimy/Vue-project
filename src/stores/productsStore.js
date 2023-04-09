import { reactive, computed } from "vue";
import router from "../router/index";
import { required, helpers, minLength, numeric } from "@vuelidate/validators"
import Swal from "sweetalert2";
import html2pdf from 'html2pdf.js';
import * as XLSX from 'xlsx/xlsx.mjs';
export const products = reactive({
    editedProduct: null,

    products: [],
    clonedProducts:[],  
    

    productInfo: {
        name: "",
        image: "",
        category: "",
        price: "",
        status: "",
    },

    rules: computed (() => {
        return {
        name: { 
            required: helpers.withMessage('* name is required', required), 
            minLength: helpers.withMessage('* name must be more than 10 characters', minLength(3)) ,
        },
        image: { 
            // required: helpers.withMessage('* image is required', required), 
        },
        category: { 
            // required: helpers.withMessage('* category is required', required), 
        },
        price: { 
            // required: helpers.withMessage('* price is required', required), 
            numeric: helpers.withMessage('* must be a number', numeric),
        },
        status: { 
            // required: helpers.withMessage('* status is required', required), 
        },
}}),

    onFileChange(e){
        const files = e.target.files
        if(files.length > 0){
            this.productInfo.image = URL.createObjectURL(files[0]);
        }
    },

    addProduct(){
        this.products.push(this.productInfo);
        this.clonedProducts = [...this.products];
        this.resetProductInfo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1000
        })
        router.push({ path: "/products" }); 
        
    },

    resetProductInfo(){
        this.productInfo = {
            name: "",
            image: "",
            category: "",
            price: "",
            status: "",
        }
    },

    deleteProduct(index){
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
                this.deleteProductConfirm(index);
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
        })
    },

    deleteProductConfirm(index){
        this.products= this.products.filter((item, i)=>(index !== i));
        this.clonedProducts=[...this.products]
        // this.products.splice(index, 1);
    },

    

    editProduct(index){
        this.productInfo = {...this.products[index]};
        this.editedProduct = index;
    },

    updateProduct(){
        this.products[this.editedProduct] = this.productInfo;
        this.clonedProducts=[...this.products]
        this.resetProductInfo();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        router.push({ path: "/products" });
    },

    search(searchText){
        this.products = this.clonedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchText) ||
        product.price.toString().includes(searchText)
        );
    },

    exportProducts(){
        const worksheet = XLSX.utils.json_to_sheet(this.products);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
        XLSX.writeFile(workbook, 'products.xlsx');
    },

    createPdf(){
        const productsEl = document.querySelector('.table')
        const options = {
          margin: 10,
          filename: 'products.pdf',
          image: { type: 'jpeg', quality: 100 },
          jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
        }
        html2pdf().set(options).from(productsEl).save()
      }
})