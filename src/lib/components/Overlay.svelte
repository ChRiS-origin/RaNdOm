<script>
	import { getRandom, getRandomOrder } from "$lib/stores/resultStore";
	import { rotateIcon } from "$lib/ui_logic";

    export let showOverlay = false;
    export let RandMode;
	import ResultOrder from './ResultOrder.svelte';
    import ResultSelection from './ResultSelection.svelte';



    // import {rotateIcon, toggleOverlay} from '$lib/ui_logic';
    // import { onMount } from 'svelte';

    // let touchstartX = 0
    // let touchendX = 0
    // let touchstartY = 0
    // let touchendY = 0

    // let screenWidth40 = null;

    // onMount(() => {
    //     const slider = document.getElementById('main');

    //     function handleGesture() {
    //         let angle = Math.atan((touchendY -touchstartY) / (touchendX - touchstartX)) / Math.PI * 180;
    //         if (Math.abs(angle) < 25 && (Math.abs(touchendX - touchstartX) > (window.screen.width * 0.4) || Math.abs(touchendX - touchstartX) > 240)) {
    //             if (touchendX < touchstartX) {
    //                 toggleOverlay();
    //             }
    //             if (touchendX > touchstartX) {
    //                 toggleOverlay();
    //             }
    //         }
    //     }

    //     slider.addEventListener('touchstart', e => {
    //         touchstartX = e.changedTouches[0].screenX;
    //         touchstartY = e.changedTouches[0].screenY;
    //     })

    //     slider.addEventListener('touchend', e => {
    //         touchendX = e.changedTouches[0].screenX;
    //         touchendY = e.changedTouches[0].screenY;
    //         handleGesture();
    //     })

    //     screenWidth40 = window.screen.width * 0.4;
    // });
</script>

{#if showOverlay}
    <div class="backdrop" on:click|self>
        <div class="overlay">
            <ul class="flex-container">
                <li class="flex-item">
                    <button id="close" class="OverlayButton closeOverlay" on:click>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </button>
                </li>
                <li class="flex-item">
                    »Your result«
                </li>
                <li class="flex-item">
                        <button id="again" class="OverlayButton again" on:click={() => { if (RandMode === 'Random') {getRandom()} else {getRandomOrder()};{rotateIcon()}}}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M314-115q-104-48-169-145T80-479q0-26 2.5-51t8.5-49l-46 27-40-69 191-110 110 190-70 40-54-94q-11 27-16.5 56t-5.5 60q0 97 53 176.5T354-185l-40 70Zm306-485v-80h109q-46-57-111-88.5T480-800q-55 0-104 17t-90 48l-40-70q50-35 109-55t125-20q79 0 151 29.5T760-765v-55h80v220H620ZM594 0 403-110l110-190 69 40-57 98q118-17 196.5-107T800-480q0-11-.5-20.5T797-520h81q1 10 1.5 19.5t.5 20.5q0 135-80.5 241.5T590-95l44 26-40 69Z"/></svg>
                    </button>
                </li>
            </ul>
            <div class="space">
                <ul class="flex-container">
                    <li class="flex-itemList">
                        {#if RandMode === 'Random'}
                            <ResultSelection/>
                        {:else if RandMode === 'Random-list'}
                            <ResultOrder/>
                        {:else}
                        <span>Error: specified content not found</span>
                        {/if}
                    </li>
                </ul>
            </div>
        </div>
    </div>    
{/if}

<style>
    .space{
        margin-top: 15px;
    }

    .backdrop{
        width: 100%;
        min-height: 100vh;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        z-index: 99;
    }

    .overlay{
        padding: 3px;
        border-radius: 10px;
        width: 93vw;
        min-width: 350px;
        min-height: 60vh;
        margin: 10vh auto;
        background: #18181b54;
        backdrop-filter: blur(1.3px);
        box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.436) inset;
        text-align: center;
        color: white;
        z-index: 100;
    }

    .flex-container{
      display: flex;
      flex-flow: row;
      justify-content: space-around;
      padding: 0;
      margin: 0;
      margin-top: -50px;
      list-style: none;
      box-shadow: 0 3px 0px rgba(0, 0, 0, 0.436);
    }

    .flex-item{
        height: 100%;
        padding: 10px;
        width: 200px;
        margin-top: 15px;
        margin-bottom: -40px;
        line-height: 120px;
        font-size: 1.3rem;
        text-align: center;
    }

    .flex-itemList{
        position: relative;
        height: 100%;
        min-width: 1vw;
        margin-top: 5vh;
        line-height: 120px;
        font-size: 1.3rem;
        text-align: center;
    }

    .OverlayButton {
        border:none; 
        border-radius: 12px; 
        padding: 15px;
        min-height: 20px; 
        min-width: 20px;
     }

    .OverlayButton:focus:active{
        box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.923), 0px 0px 2px 2px rgba(82, 42, 176, 0.987);
        transition: 0.1ms;
    }
    
    .OverlayButton:hover {
        box-shadow: 1px 1px 8px rgba(255, 255, 255, 0.436) inset, 10px 10px #18181b inset;
    }
     

    .closeOverlay:focus{
        background-color: #a0195a;
    }

    .closeOverlay:hover{
        box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.923), 0px 0px 2px 2px rgba(82, 42, 176, 0.987);
        transition: 0.1ms;
    }

    .closeOverlay:active{
        background-color: #a0195a;
    }

    .again:focus{
        background-color: rgba(82, 42, 176, 0.987);
    }

    .again:hover{
        box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.923), 0px 0px 2px 2px rgba(82, 42, 176, 0.987);
        transition: 0.1ms;
    }
    .again:active{
        background-color: rgba(82, 42, 176, 0.987);
    }
    

    @media(max-width: 401px){ 
        .flex-item{
            font-size: 1.1rem;
        }
    }
    
</style>



<!-- const gettry = () =>{
    alert('try');
};
const gettry2 = () =>{
    alert('try2');
}; -->
<!-- <button id="again" class="OverlayButton again" on:click={() => { if (RandMode === 'Random') {gettry()} else {gettry2()};{rotateIcon()}}}> -->