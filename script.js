lucide.createIcons();

const carFleet = [
    { name: "AERO GT", type: "sport", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800", price: "$142,000" },
    { name: "QX-800", type: "suv", img: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&q=80&w=800", price: "$95,500" },
    { name: "RS-Vitesse", type: "sport", img: "https://superfastdiecast.co.uk/cdn/shop/files/482193007_1058885966276978_2920461668041798358_n.jpg?v=1747668791&width=2048", price: "$189,000" },
    { name: "Q-Nova", type: "suv", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800", price: "$68,000" },
];

// Handle Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Render Cars
function renderCars(data) {
    const grid = document.getElementById('car-grid');
    grid.innerHTML = data.map(car => `
        <div class="car-card group border-r border-b border-white/5 p-10 cursor-pointer">
            <div class="overflow-hidden aspect-video mb-8">
                <img src="${car.img}" class="w-full h-full object-cover grayscale group-hover:grayscale-0" alt="${car.name}">
            </div>
            <div class="flex justify-between items-end">
                <div>
                    <h4 class="text-3xl font-black uppercase italic">${car.name}</h4>
                    <p class="text-[9px] tracking-[0.4em] text-gray-500 uppercase mt-2">${car.type} Platform</p>
                </div>
                <div class="text-right">
                    <p class="text-red-600 font-bold italic">${car.price}</p>
                </div>
            </div>
        </div>
    `).join('');
}

window.filterCars = (type) => {
    // UI Update
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filtering
    const filtered = type === 'all' ? carFleet : carFleet.filter(c => c.type === type);
    renderCars(filtered);
};

// Parallax for Hero Image
window.addEventListener('scroll', () => {
    const heroImg = document.getElementById('hero-img');
    const scroll = window.pageYOffset;
    heroImg.style.transform = `scale(1.1) translateY(${scroll * 0.4}px)`;
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => renderCars(carFleet));