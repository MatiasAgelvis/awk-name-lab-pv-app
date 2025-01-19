<script>
    import { excelInput } from "../stores";

    async function getClipboard() {
        try {
            const text = await navigator.clipboard.readText();
            console.debug("Clipboard contents: ", text);
            return text;
        } catch (err) {
            console.error("Failed to read clipboard contents: ", err);
        }
    }
    function bindClipboard() {
        getClipboard().then((text) => {
            $excelInput = text;
        });
    }
</script>

<input
    type="text"
    bind:value={$excelInput}
    placeholder="Paste line from excel"
/>
<button on:click={bindClipboard}>Paste</button>
