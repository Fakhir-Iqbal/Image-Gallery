const images = [
  {
    src: "https://images.unsplash.com/photo-1698591020373-6a183ba43308?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    category: "shoes",
    keywords: "white sneaker nike",
  },
  {
    src: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "shoes",
    keywords: "white sneaker nike",
  },
  {
    src: "https://images.unsplash.com/photo-1698659036249-bf725b48a65f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    keywords: "green plant",
  },
  {
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    keywords: "green plant",
  },
  
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    keywords: "green plant",
  },
  {
    src: "https://images.unsplash.com/photo-1698404328195-fc020ba2ba7c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
    category: "city",
    keywords: "silver bulding train",
  },
  {
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "city",
    keywords: "silver bulding train",
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    keywords: "green plant",
  },
  {
    src: "https://images.unsplash.com/photo-1691431475730-de945e970fc0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    keywords: "tree park green",
  },
  {
    src: "https://images.unsplash.com/photo-1698414787185-a8fe594a22ac?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    keywords: "sea tree road",
  },
  {
    src: "https://images.unsplash.com/photo-1698694839928-3f3520be15cb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
    category: "nature",
    keywords: "tree road jungle",
  },
  {
    src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    category: "shoes",
    keywords: "nike sneaker parrot",
  },
  {
    src: "https://images.unsplash.com/photo-1695762446083-c1f182562229?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    category: "city",
    keywords: "sky building",
  },
  {
    src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    category: "shoes",
    keywords: "girl multi nike pink",
  },
  {
    src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    category: "shoes",
    keywords: "multi sneaker girl",
  },
  {
    src: "https://images.unsplash.com/photo-1698414392472-11bc0a9339ae?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
    category: "city",
    keywords: "sky white building",
  },
  {
    src: "https://images.unsplash.com/photo-1697440110618-c93170f51c94?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    keywords: "sea dive view wallpaper",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220363-35e4621ed990?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    keywords: "tree sun wallpaper jungle",
  },
  {
    src: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "shoes",
    keywords: "multi sneaker girl",
  },
  {
    src: "https://images.unsplash.com/photo-1698005159575-bd743ef0764e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    keywords: "view beach sea",
  },
  {
    src: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNpdHl8ZW58MHx8MHx8fDA%3D",
    category: "city",
    keywords: "london house home city ",
  },
  {
    src: "https://images.unsplash.com/photo-1698399134573-cf1754493ead?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    keywords: "mountain weather view",
  },
  {
    src: "https://images.unsplash.com/photo-1698426665412-4bf9ee4b510f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    keywords: "mountain home sea view",
  },
  {
    src: "https://images.unsplash.com/photo-1688151049001-522f61b0ebee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",
    category: "nature",
    keywords: "mountain bird sea view",
  },
];

const gallery = document.getElementById("gallery");
const filter = document.getElementById("filter");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-button");
const itemsPerPage = 8;
let currentPage = 1;

searchButton.addEventListener("click", () => {
  const searchKeyword = searchInput.value.toLowerCase();
  const selectedCategory = filter.value;
  let filteredImages;

  if (selectedCategory === "all") {
    filteredImages = images.filter(
      (img) =>
        img.category.toLowerCase().includes(searchKeyword) ||
        (img.keywords && img.keywords.toLowerCase().includes(searchKeyword)) ||
        img.src.toLowerCase().includes(searchKeyword)
    );
  } else {
    filteredImages = images.filter(
      (img) =>
        img.category.toLowerCase() === selectedCategory &&
        img.src.toLowerCase().includes(searchKeyword)
    );
  }

  currentPage = 1;
  displayImages(filteredImages);
  updatePagination(filteredImages);
});


searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});

function filterImages(category) {
  const filteredImages =
    category === "all"
      ? images
      : images.filter((img) => img.category === category);
  return filteredImages;
}

function displayImages(imagesToDisplay) {
  gallery.innerHTML = "";
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  for (let i = startIndex; i < endIndex && i < imagesToDisplay.length; i++) {
    const image = imagesToDisplay[i];
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.classList.add("image");
    gallery.appendChild(imgElement);
  }
}

function updatePagination(imagesToDisplay) {
  const totalPages = Math.ceil(imagesToDisplay.length / itemsPerPage);
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.className = 'page-link';
    pageLink.innerText = i;
    pageLink.addEventListener("click", () => {
      currentPage = i;
      displayImages(imagesToDisplay);
      updatePagination(imagesToDisplay);
    });
    pagination.appendChild(pageLink);
  }
}

filter.addEventListener("change", () => {
  const selectedCategory = filter.value;
  const filteredImages = filterImages(selectedCategory);
  currentPage = 1;
  displayImages(filteredImages);
  updatePagination(filteredImages);
});

displayImages(images);
updatePagination(images);
