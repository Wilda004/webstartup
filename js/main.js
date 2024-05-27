document.addEventListener('DOMContentLoaded', function() {
    const umkmBoxes = document.querySelectorAll('.umkm-box');
    const detailDiv = document.getElementById('umkm-detail');

    umkmBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const lokasi = this.getAttribute('data-lokasi');
            const whatsapp = this.getAttribute('data-whatsapp');
            detailDiv.innerHTML = `<p>Lokasi: ${lokasi}</p><p>WhatsApp: ${whatsapp}</p>`;
            detailDiv.style.display = 'block';
            detailDiv.style.width = '80%';
            detailDiv.style.maxWidth = '150px';
            detailDiv.style.position = 'absolute';
            detailDiv.style.top = (this.offsetTop + this.offsetHeight) + 'px';
            detailDiv.style.left = (this.offsetLeft + (this.offsetWidth - detailDiv.offsetWidth) / 2) + 'px';
        });
    });

    detailDiv.addEventListener('click', function() {
        detailDiv.style.display = 'none';
    });

    // Close detail box when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.umkm-box') && !event.target.closest('#umkm-detail')) {
            detailDiv.style.display = 'none';
        }
    });
});

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
}

function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function showSignup() {
    document.getElementById('signupModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('signupModal').style.display = 'none';
}
