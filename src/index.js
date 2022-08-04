
const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '321183b65emshc94a015cfb27196p16f40bjsn2acac154b39d',
        'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
    }
};

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(error => console.error(error))
}   

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const results = document.querySelector('#results')

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = input 
    if (!value) return

    submit.setAttribute('disable', '')
    submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {
        results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    submit.removeAttribute('disable')
    submit.removeAttribute('aria-busy')
})