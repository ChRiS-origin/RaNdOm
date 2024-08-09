import { writable } from "svelte/store";

export const options = writable([]);


export const addOption = (text) => {
    options.update((cur) => {
        const newOptions = [...cur, {text, selected: false, id:  Date.now()}];
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
                break;
            }
        }

        return options;
    });
}