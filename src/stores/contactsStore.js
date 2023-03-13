import { ref } from "vue";
import router from "../router/index";

export const contacts = ref({

    ediedContact: null,

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

    contacts: [],

    addContact(){
        this.contacts.push(this.contactInfo);
        this.resetContactInfo();
        router.push({ path: "/contacts" });
    },
    deleteContact(index){
        this.contacts= this.contacts.filter((item, i)=>(index !== i));
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
        this.contactInfo = this.contacts[index];
        this.ediedContact = index
    },

    updateContact(){
        this.contacts[this.ediedContact] = this.contactInfo;
        this.resetContactInfo();
        router.push({ path: "/contacts" });
    },
})