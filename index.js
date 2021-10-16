const formEl = document.querySelector('#form')
const billEl = document.querySelector('#bill')
const peopleEl = document.querySelector('#people')
const customTipEl = document.querySelector('#custom-tip')
const customLabelEl = document.querySelector('label[for="custom-tip"]')

const tipPerEl = document.querySelector('#tip-per')
const tipTotalEl = document.querySelector('#tip-total')
const billPerEl = document.querySelector('#bill-per')
const billTotalEl = document.querySelector('#bill-total')

const resetEl = document.querySelector('#reset')

// Reset
resetEl.addEventListener('click', () => {
    billEl.value = null
    peopleEl.value = null

    tipPerEl.innerHTML = '0.00'
    tipTotalEl.innerHTML = '0.00'
    billPerEl.innerHTML = '0.00'
    billTotalEl.innerHTML = '0.00'
})

// Form onchange

const getUpdate = (e) => {
    const percentsEl = Array.from(document.querySelectorAll('input[name="percent"]'))

    percentsEl.map((percentEl) => {
        if (e.target !== customTipEl) {
            customTipEl.setAttribute('type', 'radio')
            customLabelEl.style.display = 'block'
        } else {
            customTipEl.setAttribute('type', 'text')
            customLabelEl.style.display = 'none'
        }

        if (e.target === percentEl) {
            let percentage = e.target.value
            // let percentage = e.target === percentEl && isNaN(e.target.value) ? percentEl.value = 0: percentEl.value

            const tipPer = (billEl.value * (percentage / 100)) / (!peopleEl.value ? (peopleEl.value = 1) : peopleEl.value)
            tipPerEl.innerHTML = tipPer.toFixed(2)

            const tipTotal = billEl.value * (percentage / 100)
            tipTotalEl.innerHTML = tipTotal.toFixed(2)

            const billTotal = (+billEl.value + tipTotal).toFixed(2)
            billTotalEl.innerHTML = billTotal

            const billPer = billTotal / (!peopleEl.value ? (peopleEl.value = 1) : peopleEl.value)
            billPerEl.innerHTML = billPer.toFixed(2)
        }
    })
}

formEl.addEventListener('change', getUpdate)
