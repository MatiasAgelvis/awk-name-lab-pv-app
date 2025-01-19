export function copyToClipboard() {
    const input = document.querySelector('.readonly-input');
    input.select();
    navigator.clipboard.writeText(input.value)
        .then(() => {
            const button = document.querySelector('.copy-button');
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}