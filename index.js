const formEl = document.querySelector('#form')
const billEl = document.querySelector('#bill')
const peopleEl = document.querySelector('#people')
const customTipEl = document.querySelector('#custom-tip')
const customLabelEl = document.querySelector('label[for="custom-tip"]')

const perPersonEl = document.querySelector('#per-person')
const totalTipEl = document.querySelector('#total-tip')

const resetEl = document.querySelector('#reset')

// Reset
resetEl.addEventListener('click', () => {
    billEl.value = null
    peopleEl.value = null

    perPersonEl.innerHTML = '0.00'
    totalTipEl.innerHTML = '0.00'
})

// Clear
billEl.addEventListener('focus', () => {
    billEl.value = null
})

peopleEl.addEventListener('focus', () => {
    peopleEl.value = null
})

// Form onchange
formEl.addEventListener('keyup', () => {
    const percentEl = document.querySelector('input[type="radio"]:checked')

    // (customTipEl.value === null || customTipEl.value === undefined || customTipEl.value === '' ? percentEl.dataset.tip : customTipEl.value )
    // console.log(!percentEl.dataset.tip ? customTipEl.value : percentEl.dataset.tip)

    // console.log(customTipEl.value)

    let percentage

    if (customTipEl.value) {
        percentage = customTipEl.value
    } else {
        percentage = percentEl.dataset.tip
    }

    const perPerson = (billEl.value * (percentage / 100)) / (!peopleEl.value ? 1 : peopleEl.value)
    perPersonEl.innerHTML = perPerson.toFixed(2)

    const totalTip = billEl.value * (percentage / 100)
    totalTipEl.innerHTML = totalTip.toFixed(2)
})

customTipEl.addEventListener('click', () => {
    customTipEl.setAttribute('type', 'text')
    customLabelEl.style.display = 'none'
})
