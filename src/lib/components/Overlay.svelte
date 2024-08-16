<script>
	import {result_selection, getRandom, getRandomOrder } from "$lib/stores/resultStore";
	import { rotateIcon } from "$lib/ui_logic";

    export let showOverlay = false;
    export let RandMode;
    import {result_order} from "../stores/resultStore";
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
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>
                    </button>
                </li>
            </ul>
            <div class="overflow-auto">
                <ul class="flex-container">
                    <li class="flex-item">
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
    .nothingThere{
        display: flex;
        justify-content: center;
    }

    .backdrop{
        width: 100%;
        min-height: 100vh;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(0.8px);
        z-index: 99;
    }

    .overlay{
        padding: 3px;
        border-radius: 10px;
        width: 93vw;
        min-width: 368px;
        margin: 10% auto;
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