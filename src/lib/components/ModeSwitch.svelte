<script>
    let RandMode = 'R@ŊðØm';

    const handleClick = () => {
        if (RandMode === 'R@ŊðØm') {
            RandMode = 'R@ŊðØm-list';
        } else {
            RandMode = 'R@ŊðØm';
        }
    };
</script>

<main>
    <button class="modeButton" on:click={handleClick}>{RandMode}</button>
</main>


<style>
	.modeButton{
		color:red;
		font-size:1em;
        border: none;
        background-color: transparent;
		padding:0.1em;
	}
</style>