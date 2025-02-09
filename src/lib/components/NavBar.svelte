<script>
    import DarkModeSwitch from "./DarkModeSwitch.svelte";
    import ModeSwitch from "./ModeSwitch.svelte";
    import {assets} from '$app/paths';
    import {onMount} from "svelte";

    onMount(() => {
        window.document.getElementById('dark-random-icon')?.toggleAttribute('hidden');
    });

    export let RandMode;
</script>

<nav>
    <div class="flex-container">
        <div class="flex-item">
            <img id="light-random-icon" class="transition ease-in-out duration-300" src="{assets}/silverbutton-rand.png" alt="Random">
            <img id="dark-random-icon" class="transition ease-in-out duration-300" src="{assets}/button-rand.png" alt="Random">
        </div>
        <div class="flex-item button">
            <ModeSwitch {RandMode} on:click/>
        </div>
        <div class="flex-item">
            <DarkModeSwitch/>
        </div>
    </div>
</nav>

<style>
    nav{
        font-size: 1rem;
    }

    .flex-container{
      display: flex;
      justify-content: space-around;
      box-shadow:  0px 3px 3px rgba(0, 0, 0, 0.463);
    }

    .flex-item{
        height: 100%;
        padding: 5px;
        width: 200px;
        margin: 10px;
        font-weight: bold;
        font-size: 1.5em;
        text-align: center;
    }

    img{
        position: relative;
        margin-left: 5.1vw;
        max-width: 48px;
        max-height: 48px;
        }
        
    @media(max-width: 375px){ 
        nav{
          font-size: 0.9rem;
          line-height: 2rem;
        }
    } 
</style>