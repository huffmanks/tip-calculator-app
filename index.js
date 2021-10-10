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

// Form onchange
formEl.addEventListener('keyup', () => {
    let bill = billEl.value
    let people = peopleEl.value
    const percentsEl = Array.from(document.querySelectorAll('input[name="percent"]'))

    percentsEl.map((percentEl) => {
        percentEl.addEventListener('change', () => {
            const percentage = percentEl.value
            console.log(percentage)

            const perPerson = (bill * (percentage / 100)) / (!people ? 1 : people)
            perPersonEl.innerHTML = perPerson.toFixed(2)

            const totalTip = bill * (percentage / 100)
            totalTipEl.innerHTML = totalTip.toFixed(2)
        })
    })
})

customTipEl.addEventListener('click', () => {
    customTipEl.setAttribute('type', 'text')
    customLabelEl.style.display = 'none'
})
