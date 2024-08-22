<script>
    import {result_selection, getRandom} from "$lib/stores/resultStore";
    import {deleteOption, editOption, selectOption} from "../stores/optionStore";
    import {rotateIcon } from "$lib/ui_logic";

    const handleSubmit = (id, NewOption) => {
            if (NewOption !== '') {
                editOption(id, NewOption);
                console.log("stored resultSelection:", NewOption);
        }
        setTimeout(rotateIcon);
    }
</script>

<li class="option">
    {#if ($result_selection.selected)}
        <input type="checkbox" id="option-{$result_selection.id}" checked={$result_selection.selected} on:click={() => {selectOption($result_selection.id); getRandom(); rotateIcon();}}>
        <label class="custom-checkbox" for="option-{$result_selection.id}">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
        </label>
        <label for="option-{$result_selection.id}" class="optionText">
            <form class="overflow-auto">
                <input id="optionInput" type="text" bind:value={$result_selection.text} autocomplete="off" on:click={handleSubmit($result_selection.id, $result_selection.text)}>
            </form>
        </label>
        <button class="deleteButton" on:click={deleteOption($result_selection.id)} on:click={() => {getRandom(); rotateIcon()}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f5d5d"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
        </button>
    {:else}
        <li class="nothingThere">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z"/></svg>
        </li>
    {/if}
</li>

<style>
    .nothingThere{
        margin-top: 6vh;
        margin-left: 27.3vw; 
    }

    #optionInput{
        box-sizing: border-box;
        padding: 0px 20px;
        width: 100%;
        height: 3rem;
        background: none;
        border: none;
        border-radius: 1000px;
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
        min-width: 60vw;
        max-width: 75vw;
        margin-top: 15vh;
        width: 100%;
        margin-bottom: 1px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        background-color: #08080973;
    }

    .option .optionText{
        padding-right: 0;
        text-align: center;
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

    /* @media(max-width: 500px){
        .nothingThere{
            position: relative;
            margin-top: 6vh;
            margin-left: 26.8vw; 
        }
    } */
</style>