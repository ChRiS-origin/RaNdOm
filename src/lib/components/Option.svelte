<script>
    import {rotateIcon} from "$lib/ui_logic";
    import {deleteOption, editOption, selectOption} from "../stores/optionStore";
    export let option;
    export const optionIndex = null;

    const handleSubmit = (id, NewOption) => {
            if (NewOption !== '') {
                editOption(id, NewOption);
                console.log("stored option:", NewOption);
        }
        setTimeout(rotateIcon);
    }
</script>

<li class="option">
    <input type="checkbox" id="option-{option.id}" checked={option.selected} on:change={() => selectOption(option.id)}>
    <label class="custom-checkbox" for="option-{option.id}" >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
    </label>
    <label for="option-{option.id}" class="optionText">
        <form class="overflow-auto">
            <input id="optionInput" type="text" bind:value={option.text} autocomplete="off" on:click={handleSubmit(option.id, option.text)}>
        </form>
    </label>
    <button class="deleteButton" on:click={deleteOption(option.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f5d5d"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
    </button>
</li>


<style>
    #optionInput{
        box-sizing: border-box;
        padding: 1px 20px;
        width: 100%;
        background: none;
        border-radius: 1px;
        font: inherit;
        caret-color: #ff007b;
    }

    ::placeholder {
        color: inherit;
        opacity: 1;
        }

    #optionInput:focus{
        border: none;
        background-color: #2e2e34;
        outline: none;
    }

    form{
        position: relative;
    }

    .option{
        margin-bottom: 5px;
        padding: 0 16px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        background-color: #08080973;
    }

    .option .optionText{
        padding: 12px;
        padding-right: 0;
        flex-grow: 1;
        transition: 0.2ms ease;
    }
    
    .deleteButton{
        padding: 3px;
        background: none;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    
    .deleteButton:active{
        background-color: rgb(105, 15, 15);
        border-radius: 10px;
    }
    
    .deleteButton:focus{
        outline: none;
    }

    .deleteButton:focus svg{
        fill:red;
        outline: none;
    }

    .deleteButton svg{
        transition: 0.2ms ease;
    }

    .deleteButton:hover svg{
        fill:red;
    }
    
    .custom-checkbox{
        border: 2px solid #ff007b77;
        border-radius: 50%;
        min-height: 20px;
        min-width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        transition: 0.2ms ease;
        cursor: pointer;
    }

    input[type="checkbox"]:checked ~.custom-checkbox{
        background-color: none;
    }

    input[type="checkbox"]:checked ~.custom-checkbox svg{
        fill: #6d28d9;
    }

    input[type="checkbox"]{
        display: none;
    }
</style>