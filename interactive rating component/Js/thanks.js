function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function showRate(){
    document.getElementById(`showRate`).textContent = `You selected ${getQueryParam(`valor`)} out of 5`;
}

window.onload = showRate;