<script>
    import Overlay from '$lib/components/Overlay.svelte';
    import Options from '$lib/components/Options.svelte';
    import {rotateIcon} from "$lib/ui_logic";
    
    export let showOverlay = false;

    const toggleOverlay = () => {
            showOverlay =  !showOverlay;
    };
    import NavBar from '$lib/components/NavBar.svelte';
    
    let RandMode = 'Random';

    const handleClick = () => {
    if (RandMode === 'Random') {
        RandMode = 'Random-list';           
    } else {
        RandMode = 'Random';
        }
    };
</script>

<NavBar {RandMode} on:click={handleClick}/>
<Options/>
<div>
    <button class="button" on:click={() => {rotateIcon(); toggleOverlay();}}>
        R@ŊðØm
    </button>
</div>
<Overlay {showOverlay} {RandMode} on:click={toggleOverlay}/>


<style>
    :global(body) {
        min-height: 100vh;
        background-color: #18181b;
        background-size: cover;
        font-family:  "Abel", sans-serif;
        color: white;
        z-index: -1;
        transition: background-color 0.3s
    }
    :global(body.dark-mode) {
        background-color: #f2eee2;
        color: black;
    }

    div{
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        position: absolute;
        width: 100%;
        bottom: 0;
        align-items: center;
    }
    .button{
        text-align: center;
        min-width: 300px;
        background-color: #6d28d9;
        padding: 5px;
        margin-bottom: 10px;
        border-radius: 10px;
        border-color: #f2eee2;
        color: #f2eee2;
        font-size: 1.5em;
        cursor: pointer;
    }

    .button:focus:active{
        box-shadow: 0px 0px 0.1px 0.1px rgba(255, 255, 255, 0.923), 0px 0px 1px 1px rgba(82, 42, 176, 0.987);
        transition: 0.1ms;
    }
    
    .button:hover {
        box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.436) inset, 0px 0px 3px 3px #18181b inset;
    }
</style>
