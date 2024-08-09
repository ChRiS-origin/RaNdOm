<script>
    import {rotateIcon} from "$lib/ui_logic";
    export let RandMode = 'Random';
</script>

<button class="button" on:click on:click={rotateIcon}>{RandMode}</button>

<style>
    .button{
        text-align: center; 
        cursor: pointer;
    }
    
    .button:active{
        background-image: linear-gradient(45deg,#d70e9e,#f39857);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
       /* font-size: 1.5rem; */
       transition: 0.1s;
    }
    /* @media(max-width: 375px){ 
        .button:active{
          font-size: 1.4rem;
          line-height: 2rem;
        }
    }  */
    .button:focus{
        background-image: linear-gradient(45deg,#d70e9e,#f39857);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
       font-weight: 700;
       outline: none;
    }
    .button:hover{
        background-image: linear-gradient(45deg,#d70e9e,#f39857);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
       font-weight: 700;
    }
</style>
