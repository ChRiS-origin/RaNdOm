<script>
    import {rotateIcon} from "$lib/ui_logic";
    export let RandMode = 'Random';
    export const handleClick = () => {
    if (RandMode === 'Random') {
        RandMode = 'Random-list';           
    } else {
        RandMode = 'Random';
    }
};
</script>


<button class="button" on:click={()=>{handleClick(); rotateIcon();}}>{RandMode}</button>

<style>
    .button{
        text-align: center; 
    }
</style>
