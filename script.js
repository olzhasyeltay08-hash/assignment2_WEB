// Modal functions
const modal = document.getElementById('statsModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

function openStatsModal(levelName, elo, kd, winrate, matches, hs) {
    modalTitle.innerText = levelName + ' - Performance Stats';
    
    modalBody.className = 'modal-body-grid';
    modalBody.innerHTML = `
        <div class="stat-item"><span>Current Elo</span><strong>${elo}</strong></div>
        <div class="stat-item"><span>K/D Ratio</span><strong>${kd}</strong></div>
        <div class="stat-item"><span>Win Rate</span><strong>${winrate}</strong></div>
        <div class="stat-item"><span>Matches Played</span><strong>${matches}</strong></div>
        <div class="stat-item"><span>Headshot %</span><strong>${hs}</strong></div>
        <div class="stat-item"><span>Status</span><strong style="color: #00ff66;">Verified</strong></div>
    `;
    
    modal.style.display = 'flex';
}

function openGalleryModal(levelName, description) {
    modalTitle.innerText = levelName;
    
    modalBody.className = '';
    modalBody.innerHTML = `
        <p style="font-size: 16px; color: #ccc; line-height: 1.6;">${description}</p>
    `;
    
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside content
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

// Navigation active state toggle
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});