<script>
    import sialLogo from "./assets/logo-sial.svg";
    import Counter from "./lib/Counter.svelte";
    import Input from "./lib/Input.svelte";
    import Output from "./lib/Output.svelte";
</script>

<main>
    <div>
        <a target="_blank" rel="noreferrer">
            <img src={sialLogo} class="logo" alt="Vite Logo" />
        </a>
    </div>
    <!-- <h1>SIAL.nom</h1> -->

    <div class="card">
        <Input />
    </div>
    <div class="card">
        <Output />
    </div>
</main>
