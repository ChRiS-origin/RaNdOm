<script>
    export let showOverlay = false;
    export let RandMode;
    const RunAgain = () => {
    };
</script>

{#if showOverlay}
    <div class="backdrop" on:click|self>
        <div class="overlay">
            <ul class="flex-container">
                <li class="flex-item">
                    <button id="again" class="OverlayButton again" on:click={RunAgain}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>
                    </button>
                </li>
                <li class="flex-item">
                    »Your result«
                </li>
                <li class="flex-item">
                    <button id="close" class="OverlayButton closeOverlay" on:click>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </button>
                </li>
            </ul>
            <p> 
                {RandMode}
            </p>
        </div>
    </div>    
{/if}

<style>
    .backdrop{
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(0.8px);
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
     

    .closeOverlay:focus:active{
        background-color: #a0195a;
    }

    .again:focus:active{
        background-color: rgba(82, 42, 176, 0.987);
    }

    @media(max-width: 401px){ 
        .flex-item{
            font-size: 1.1rem;
        }
    }
    
</style>
