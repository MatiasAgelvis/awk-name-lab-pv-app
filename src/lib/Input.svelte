<script>
    import { excelInput } from "../stores/variables.js";
    import { copyToClipboard } from "../scripts/copyToClipboard.js";
    import { createFeedbackStore } from "../stores/feedback.js";

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

    const CopyState = {
        BASE: "Copy",
        SUCCESS: "Copied",
        ERROR: "Error",
    };
    $: feedback = createFeedbackStore(CopyState);

    function clearInput() {
        $excelInput = "";
    }
</script>

<input
    type="text"
    bind:value={$excelInput}
    placeholder="Paste line from excel"
    class="action-input"
    class:success={$feedback === CopyState.SUCCESS}
    class:error={$feedback === CopyState.ERROR}
/>
{#if $excelInput === ""}
    <button on:click={bindClipboard}>Paste</button>
{:else}
    <button
        on:click={() => {
            const wasCopied = copyToClipboard($excelInput);
            feedback.show(wasCopied);
        }}
        class="action-button"
        class:success={$feedback === CopyState.SUCCESS}
        class:error={$feedback === CopyState.ERROR}
    >
        {$feedback}
    </button>
{/if}
<button on:click={clearInput} style="background-color: red;"> Clear </button>
