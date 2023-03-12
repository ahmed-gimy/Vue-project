import { ref } from "vue";
import router from "../router/index";

export const contacts = ref({

    contactInfo: {
        name: "",
        job: "",
        email: "",
        address: "",
        phone: "",
        about: "",
        img: "",
    },
    contacts: [],
    addContact() {
        this.contacts.push(this.contactInfo);
        this.resetContactInfo()
        router.push({ path: "/contacts" });
},
    deleteContact(index) {
        this.contacts= this.contacts.filter((item,i)=>(index !== i))
    },

    resetContactInfo(){
        this.contactInfo={
            name: "",
            job: "",
            email: "",
            address: "",
            phone: "",
            about: "",
            img: "",
        }
    }
})