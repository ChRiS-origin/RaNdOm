import {writable} from "svelte/store";
import {browser} from "$app/environment";

export const options = writable([]);

if (browser) {
    options.update((options) => {
        let cache = localStorage.getItem("options");
        if (cache !== null && cache !== "null") {
            console.log("recovered entries from localStorage")
            return JSON.parse(cache);
        }
        return options;
    });
    options.subscribe((options) => localStorage.setItem("options", JSON.stringify(options)));
}

export const addOption = (text) => {
    options.update((cur) => {
        const newOptions = [...cur, {text, selected: true, id:  Date.now()}];
        return newOptions;
    })
}

export const deleteOption = (id) => {
    options.update(options => options.filter(option => option.id !== id));
}

export const deleteSelectedOption = () => {
    options.update(options => options.filter(option => !option.selected));
}

export const selectOption = (id) => {
    options.update(options => {
        for (let i = 0; i < options.length; i++) {
            if (options[i].id === id) {
                options[i].selected = !options[i].selected;
                break;
            }
        } 
        return options;
    });
}

export const selectAllOption = () => {
    options.update(options => {
        for (let i = 0; i < options.length; i++) {
            options[i].selected = true;
        }
        return options;
    });
}

export const deselectAllOption = () => {
    options.update(options => {
        for (let i = 0; i < options.length; i++) {
            options[i].selected = false;
        }
        return options;
    });
}

export const editOption = (id, newtext) => {
    options.update(options => {
        for (let i = 0; i < options.length; i++) {
            if (options[i].id === id) {
                options[i].text = newtext;
                options[i].selected = true;
                break;
            }
        }
        return options;
    });
}