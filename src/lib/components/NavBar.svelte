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
    <ul class="flex-container">
        <li class="flex-item">
            <img id="light-random-icon" class="transition ease-in-out duration-300" src="{assets}/silverbutton-rand.png" alt="Random">
            <img id="dark-random-icon" class="transition ease-in-out duration-300" src="{assets}/button-rand.png" alt="Random">
        </li>
        <li class="flex-item button">
            <ModeSwitch {RandMode} on:click/>
        </li>
        <li class="flex-item">
            <DarkModeSwitch/>
        </li>
    </ul>
</nav>

<style>
    nav{
        font-size: 1rem;
        line-height: 2rem;
    }

    .flex-container{
      display: flex;
      flex-flow: row;
      justify-content: space-around;
      padding: 0;
      margin: 0;
      margin-top: -35px;
      list-style: none;
      box-shadow:  0px 3px 3px rgba(0, 0, 0, 0.463);
    }

    .flex-item{
        height: 100%;
        padding: 5px;
        width: 200px;
        margin-top: 10px;
        margin-bottom: -30px;
        line-height: 120px;
        font-weight: bold;
        font-size: 1.5em;
        text-align: center;
    }

    img{
        margin-top: 35px;
        margin-left: 2.5rem;
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