const categories = [
    { name: "Home", link: "./" },
    { name: "Action", link: "category.html?category=Action" },
    { name: "Fighting", link: "category.html?category=Fighting" },
    { name: "Shooting", link: "category.html?category=Shooting" },
    { name: "Arcade", link: "category.html?category=Arcade" },
    { name: "Sports", link: "category.html?category=Sports" },
    { name: "Puzzle", link: "category.html?category=Puzzle" },
    { name: "Adventure", link: "category.html?category=Adventure" },
    { name: "Simulation", link: "category.html?category=Simulation"},
    { name: "All Games", link: "category.html" },

  ];
  
  function createCategories() {
    const categoryList = document.getElementById('categoryList');
    categories.forEach(category => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = category.link;
      a.textContent = category.name;
      li.appendChild(a);
      categoryList.appendChild(li);
    });
  }
  
  document.addEventListener('DOMContentLoaded', createCategories);