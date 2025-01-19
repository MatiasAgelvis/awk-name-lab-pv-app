<script>
    import { excelInput } from "../stores";
    import { processLine } from "../scripts/processLine.js";
    $: fileName = processLine($excelInput);

    let copyStatus = "";
    let timeoutId;

    async function copyToClipboard(textToCopy) {
        try {
            await navigator.clipboard.writeText(textToCopy);
            copyStatus = "copied";

            // Clear any existing timeout
            clearTimeout(timeoutId);

            // Reset status after 2 seconds
            timeoutId = setTimeout(() => {
                copyStatus = "";
            }, 2000);
        } catch (err) {
            copyStatus = "error";
        }
    }
</script>

<input
    type="text"
    readonly
    value={fileName}
    on:click={() => {
        copyToClipboard(fileName);
    }}
    class="readonly-input action-input"
    class:success={copyStatus === "copied"}
    class:error={copyStatus === "error"}
/>
<button
    on:click={() => {
        console.debug("Copying to clipboard: ", fileName);
        copyToClipboard(fileName);
    }}
    class="action-button"
    class:success={copyStatus === "copied"}
    class:error={copyStatus === "error"}
>
    {#if copyStatus === "copied"}
        <span>Copied!</span>
    {:else if copyStatus === "error"}
        <span>Error!</span>
    {:else}
        <span>Copy</span>
    {/if}
</button>

<style>
    .readonly-input {
        background-color: #f5f5f5;
    }
    .action-button {
        transition: background-color 0.2s;
    }
    .action-input {
        transition: box-shadow 0.2s;
    }
    .action-button.success {
        background-color: #28a745;
    }

    .action-button.error {
        background-color: #dc3545;
    }
    .action-input.success {
        box-shadow: 0 0 20px #28a745;
    }

    .action-input.error {
        box-shadow: 0 0 20px #dc3545;
    }
</style>
