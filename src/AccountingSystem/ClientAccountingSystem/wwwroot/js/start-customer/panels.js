function openChangePanel() {
    document.getElementById('changeDiv').style.display = 'block';
}

function closeChangePanel() {
    document.getElementById('updateName').value = '';
    document.getElementById('updatePhone').value = '';
    document.getElementById('updateAddress').value = '';
    document.getElementById('changeDiv').style.display = 'none';
}

function openDeletePanel() {
    document.getElementById('deleteDiv').style.display = 'block';
}

function closeDeletePanel() {
    document.getElementById('deleteDiv').style.display = 'none';
}


