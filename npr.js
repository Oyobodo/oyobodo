const properties = [
    {
        id: 1,
        title: 'Luxury Villa in Beverly Hills',
        bedrooms: 4,
        bathrooms: 3,
        price: 2500000,
        image: 'house1.jpg'
    },
    {
        id: 2,
        title: 'Modern Apartment in New York',
        bedrooms: 2,
        bathrooms: 2,
        price: 1200000,
        image: 'house2.jpg'
    }
    // Add more properties as needed
];

function displayProperties(filteredProperties) {
    const propertyList = document.querySelector('.property-list');
    propertyList.innerHTML = '';

    filteredProperties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.className = 'property';
        propertyDiv.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h2>${property.title}</h2>
            <p>${property.bedrooms} Bed | ${property.bathrooms} Bath</p>
            <p>$${property.price.toLocaleString()}</p>
            <a href="#" class="contact-btn">Contact Agent</a>
        `;
        propertyList.appendChild(propertyDiv);
    });
}


function applyFilters() {
    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;
    const price = document.getElementById('price').value;

    const filteredProperties = properties.filter(property => {
        return (bedrooms === 'all' || property.bedrooms == bedrooms) &&
               (bathrooms === 'all' || property.bathrooms == bathrooms) &&
               (price === 'all' || property.price <= price);
    });

    displayProperties(filteredProperties);
}

// Initial display
displayProperties(properties);