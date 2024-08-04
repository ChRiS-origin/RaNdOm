<script>
    import ModeSwitch from '$lib/components/ModeSwitch.svelte';
    import DarkModeSwitch from '$lib/components/DarkModeSwitch.svelte';
</script>

<img src="%sveltekit.assets%/silverbutton-rand.png">

\<header>
    <div id="random-icon" class="transition ease-in-out duration-300">
        <img id="light-icon" class="" src="%sveltekit.assets%/button-rand.png" alt="Random">
        <img id="dark-icon" class="hidden" src="%sveltekit.assets%/silverbutton-rand.png" alt="Random">
    </div>
    <div id="ModeSwitch">
    </div>
        <ModeSwitch/>
    <div id="DarkModeSwitch">
        <DarkModeSwitch/>
    </div>
</header>



<style>
        .rotate-360 {--tw-rotate: 360deg; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}
</style>