import { reactive } from "vue";
import Swal from "sweetalert2";

export const utilites = reactive({

clonedArray: [],

clone(arr){
    this.clonedArray = JSON.parse(JSON.stringify(arr));
},

add(arr, info){
    const newArray = [].concat(arr);
    newArray.push(info);
    return newArray
},

delete(arr, index){
    const newArray = [].concat(arr);
    newArray.splice(index, 1);
    return newArray
},

sweetAlert(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
},

})