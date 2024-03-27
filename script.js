/* Random Number Animation */
/**
 * @type {NodeListOf<HTMLSpanElement>}
 */
const RandomAnimationSpans = document.querySelectorAll('.randomize-number');
const maxRandomNumbers = {}
let updateCount = 0, maxUpdateCount = 20;

// Get the maximum-num number (exclusive) for each span
RandomAnimationSpans.forEach((span, key) => {
    maxRandomNumbers[key] = span.dataset.max ? span.dataset.max :
        Math.pow(10, Math.floor(Math.log10(Number.parseInt(span.dataset.value))) + 1);
})

console.log(maxRandomNumbers);

let randomAnimationIntervalId;

/**
 * Updates inner HTML of all spans with a random number (of the appropriate length)
 */
function updateSpans() {
    updateCount++;
    if (updateCount >= maxUpdateCount) {
        RandomAnimationSpans.forEach((span, key) => {
            span.textContent = Number.parseFloat(span.dataset.value).toLocaleString();
        })
        clearInterval(randomAnimationIntervalId);
        return;
    }
    RandomAnimationSpans.forEach((span, key) => {
        span.textContent = Math.floor(Math.random() * maxRandomNumbers[key]).toLocaleString()
    })
}

updateSpans(); //To ensure spans aren't empty when program starts

setTimeout(() => randomAnimationIntervalId = setInterval(updateSpans, 100), 2000)

