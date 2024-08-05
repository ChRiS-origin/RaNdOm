<script>
    import {rotateIcon} from "$lib/ui_logic";
    let RandMode = 'Random';
    const handleClick = () => {
        if (RandMode === 'Random') {
            RandMode = 'Random-list';           
        } else {
            RandMode = 'Random';
        }
    };
</script>


<button class="" type="button" on:click={()=>{handleClick(); rotateIcon();}}>{RandMode}</button>

<style>
    button{
        text-align: center;   
    }
</style>
