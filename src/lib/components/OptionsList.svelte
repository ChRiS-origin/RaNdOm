<script>
    import {rotateIcon} from "$lib/ui_logic";
    import {options, addOption, deleteOption, selectAllOption, deselectAllOption, deleteSelectedOption, selectOption} from "../stores/optionStore";
	import Option from "./Option.svelte";
    
    let optionInput="";
    let inputField;

    const handleAdd = (optionInput) => {
            if (optionInput !== '') {
                addOption(optionInput);
                console.log("stored option:", optionInput);
                optionInput = '';
                inputField.value = '';
                inputField.focus();
        }
        setTimeout(rotateIcon);
    }

    let allSelected = false;
</script>

<bodyOptions>
    <div class="wrapper">
        <form on:submit|preventDefault={() =>{rotateIcon(); handleAdd(optionInput);}}>
            <input id="optionInput" type="text" placeholder="type in your option…" autocomplete="off" bind:value={optionInput} bind:this={inputField}>
            <button id="addButton">ADD</button>
        </form>
        <ul id="optionListHead" >
            <li class="optionHead">
                <input type="checkbox" id="selectAll"  bind:checked={allSelected} on:change={() => { if (allSelected) {selectAllOption()} else {deselectAllOption()}}}>
                <label class="custom-checkbox" for="selectAll">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                </label>
                <label for="selectAll" class="optionHeadText">
                    select all
                </label>
                <button id="deleteAllButton" class="deleteButton" on:click={deleteSelectedOption}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f5d5d"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>
                </button>
            </li>
        </ul>
        <div class="overflow-auto">
            <ul id="optionList" class="optionList  w-full">
                {#each $options as option, optionIndex (option.id)}
                <Option option={option} optionIndex={optionIndex}/>
                {:else}
                    <li class="nothingThere">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/></svg>
                    </li>
                {/each}
            </ul>
        </div>   
    </div>
</bodyOptions>


<style>
    .nothingThere{
        display: flex;
        justify-content: center;
    }

    .optionList{
        max-height: 65vh;
    }
    bodyOptions{
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .wrapper{
        width: 700px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 0;
    }

    #optionInput{
        box-sizing: border-box;
        padding: 12px 20px;
        width: 100%;
        background: none;
        border: 2px solid #ff007b77;
        border-radius: 1000px;
        font: inherit;
        caret-color: #ff007b;
    }

    #optionInput:focus{
        outline: none;
    }

    form{
        position: relative;
    }

    #addButton{
        position: absolute;
        top: 2px;
        right: 2px;
        background-color: #ff007b77;
        height: 93%;
        padding: 0px 35px;
        border: none;
        border-radius: 1000px;
        font: inherit;
        font-size: 1.5rem;
        font-weight: bolder;
        color: #18181b;
        cursor: pointer;
    }
    
    #addButton:focus{
        color: #f2eee2;
        outline: none;
    }
    #addButton:active{
        color: #f2eee2;
    }
    #addButton:hover{
        color: #f2eee2;
    }

    .optionHead{
        margin-bottom: 10px;
        padding: 0 80px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        box-shadow: -0.8px -3px 2px -1px #080809a4 inset;
    }

    .optionHead .optionHeadText{
        padding: 15px;
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

    input[type="checkbox"]:checked ~.optionText{
        color: green;
        text-decoration: line-through;
    }

    input[type="checkbox"]{
        display: none;
    }

    @media(max-width: 500px){
        #addButton{
            font-size: 1.2rem;
        }
    }
</style>