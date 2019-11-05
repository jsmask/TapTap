import Peview from "components/preview/Preview.vue";

const obj = {};

obj.install = Vue => {
    const peviewContrustor = Vue.extend(Peview);
    const peview = new peviewContrustor();
    peview.$mount(document.createElement("div"));
    document.body.appendChild(peview.$el);
    Vue.prototype.$preview = (src = "") => {
        if (src === "") return;
        peview.open(src);
    }
}



export default obj;