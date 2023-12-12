import {reactive} from 'vue';
import {defineStore} from 'pinia';

const getFromLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || '[]');
};

export const useModalStore = defineStore('modal', () => {
    const values = reactive<{ [key: string]: any[] }>({
        'dializer': getFromLocalStorage('dializer'),
        'hubs': getFromLocalStorage('hubs'),
        'anticoagulation': getFromLocalStorage('anticoagulation'),
        'needles': getFromLocalStorage('needles'),
        'needleTypes': getFromLocalStorage('needleTypes'),
        'catheters': getFromLocalStorage('catheters'),
        'catheterTypes': getFromLocalStorage('catheterTypes'),
        'bicarbonate': getFromLocalStorage('bicarbonate'),
        // Другие select значения (по идеалу все должно быть получено из API а не из localStorage)
    });
    const addItem = ({id, value, key}: { id: number; value: string; key: string }) => {
        values[key].push({id, value});
        localStorage.setItem(key, JSON.stringify(values[key]))
    };
    const deleteItem = ({itemId, key}: { itemId: number; key: string }) => {
        const items = values[key];
        const index = items.findIndex((item: any) => item.id === itemId);

        if (index !== -1) {
            items.splice(index, 1);
            localStorage.setItem(key, JSON.stringify(values[key]))
        }
    };

    return {values, addItem, deleteItem};
});
