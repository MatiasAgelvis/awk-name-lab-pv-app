<script>
    import { excelInput } from "../stores/variables.js";
    import { processLine } from "../scripts/processLine.js";
    import { copyToClipboard } from "../scripts/copyToClipboard.js";
    import { createFeedbackStore } from "../stores/feedback.js";
    const CopyState = {
        BASE: "Copy",
        SUCCESS: "Copied",
        ERROR: "Error",
    };

    $: fileName = processLine($excelInput);
    $: feedback = createFeedbackStore(CopyState);
</script>

<input
    type="text"
    readonly
    value={fileName}
    on:click={() => {
        const wasCopied = copyToClipboard(fileName);
        feedback.show(wasCopied);
    }}
    class="readonly-input action-input"
    class:success={$feedback === CopyState.SUCCESS}
    class:error={$feedback === CopyState.ERROR}
/>
<button
    on:click={() => {
        const wasCopied = copyToClipboard(fileName);
        feedback.show(wasCopied);
    }}
    class="action-button"
    class:success={$feedback === CopyState.SUCCESS}
    class:error={$feedback === CopyState.ERROR}
>
    {$feedback}
</button>
