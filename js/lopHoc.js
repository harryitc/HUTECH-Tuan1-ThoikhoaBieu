function copyPhone(phoneId) {
    var copyText = document.getElementById(phoneId)
    navigator.clipboard.writeText(copyText.textContent);
}