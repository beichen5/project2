const filterSelect = document.getElementById('filter-list');
const productList = document.getElementById('list-projects').getElementsByTagName('li');

filterSelect.addEventListener('change', (event) => {
    const filterValue = event.target.value;
    for (let i = 0; i < productList.length; i++) {
      const product = productList[i];
      if (filterValue === 'all') {
        product.style.display = 'list-item';
      } else if (product.classList.contains(filterValue)) {
        product.style.display = 'list-item';
      } else {
        product.style.display = 'none';
      }
    }
  });