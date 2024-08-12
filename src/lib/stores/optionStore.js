import { writable } from "svelte/store";

// export const options = writable([]);
export const options = writable([
    { id: '1e4a59703af84', text: 'Todo 1', selected: true },
    { id: '9e09bcd7b9349', text: 'Todo 2', selected: false },
    { id: '9e4273a51a37c', text: 'Todo 3', selected: false },
    { id: '53ae48bf605cc', text: 'Todo 4', selected: false },
  ]);


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
                selectOption(id)
                break;
            }
        }

        return options;
    });
}