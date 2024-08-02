<script>
    import ModeSwitch from '$lib/components/ModeSwitch.svelte';
</script>

<ModeSwitch/>

<style>
        main {
            text-align: center;
            background-color: black;
            padding: 1em;
            max-width: 240px;
            margin: 0 auto;
        }

        p {
            color: #ff3e00;
            text-transform: uppercase;
            font-size: 4em;
            font-weight: 100;
        }

        @media (min-width: 640px) {
            main {
                max-width: none;
            }
        }
</style>