//  total memory cost start

const doka = document.getElementById('doka');
const voka = document.getElementById('voka');

const cobiText = document.getElementById('cobi')
const total = document.getElementById('total');

doka.addEventListener('click', function() {
    cobiText.innerText = '0'
    updateTotal();
})
voka.addEventListener('click', function() {
    cobiText.innerText = '180'
    updateTotal();
});

// total memory cost end


// total storege cost start
const mona = document.getElementById('mona')
const kona = document.getElementById('kona')

const copNumber = document.getElementById('cop')

sona.addEventListener('click', function() {
    copNumber.innerText = '0'
    updateTotal();
})
mona.addEventListener('click', function() {
    copNumber.innerText = '100'
    updateTotal();
})
kona.addEventListener('click', function() {
    copNumber.innerText = '180'
    updateTotal();
})

//  total storege cost end


// total delevery cost start

const nika = document.getElementById('nika')
const fika = document.getElementById('fika');
popNumber = document.getElementById('pop')

nika.addEventListener('click', function() {
    popNumber.innerText = '0'
    updateTotal();

})
fika.addEventListener('click', function() {
        popNumber.innerText = '20'
        updateTotal();
    })
    // total delevery cost end


// total shiping cost of monitor

function updateTotal() {
    const rop = parseInt(document.getElementById('rop').innerText);
    const cobi = parseInt(document.getElementById('cobi').innerText);
    const cop = parseInt(document.getElementById('cop').innerText);
    const pop = parseInt(document.getElementById('pop').innerText);
    const totalFinal = rop + cobi + cop + pop;
    total.innerText = totalFinal;

}


// applying promo code

document.getElementById('promo-btn').addEventListener('click', function() {
    const promoValueField = document.getElementById('promo-value');
    const promoValue = promoValueField.value;
    promoValueField.value = '';
    const totalValue = document.getElementById('coupon-total');
    const totalNumber = parseInt(totalValue.innerText);
    if (promoValue == 'stevekaku') {
        const totalNumberPer = 20 / 100;
        const findNumber = parseInt(totalNumber * totalNumberPer);
        totalValue.innerText = totalNumber - findNumber;
        document.getElementById('promo-btn').disabled = true;
        document.getElementById('error').innerText = 'You can apply coupon one time';

    } else {
        document.getElementById('error').innerText = 'Please apply right coupon';
    };

});