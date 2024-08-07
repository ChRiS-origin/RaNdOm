<script>
    import {rotateIcon} from "$lib/ui_logic";
    export let RandMode = 'Random';
</script>


<button class="button" on:click on:click={rotateIcon}>{RandMode}</button>

<style>
    .button{
        text-align: center; 
    }
</style>
