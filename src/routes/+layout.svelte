<script>
    import "../app.css";
    import NavBar from '$lib/components/NavBar.svelte';
    
    let RandMode = 'Random';
</script>

<NavBar {RandMode}/>

<main id="main" class="">
    <slot/>
</main>