import {ref} from 'vue';
import {defineStore} from 'pinia';

interface FormData {
    'device-program': string;
    dializer: string;
    //...
}

export const useFormStore = defineStore('form', () => {
    const data = ref<any>({
        'device-program': "",
        dializer: "",
        hub: "",
        'volume-liters': "",
        'type-of-injection': "",
        volume: "",
        needle: "",
        'needle-type': "",
        catheter: "",
        'catheter-type': "",
        bicarbonate: "",
        bodyweight: "",
        anticoagulation: "",

    });
    const updateFormData = (prop: string, newValue: any): void => {
        data.value[prop] = newValue;
    };

    return {data, updateFormData};
});
