<script>
    let Mode = 'dark';

    const handleClick = () => {
        if (Mode === 'dark') {
            Mode = 'light';
        } else {
            Mode = 'dark';
        }
    };
</script>

<main>
    <button class="DarkModeButton" on:click={handleClick}>{Mode}</button>
</main>


<style>
	.DarkmodeButton{
		color:blue;
		font-size:1em;
        border: none;
        background-color: transparent;
		padding:0.1em;
	}
</style>