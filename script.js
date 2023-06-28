const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

/* Fruit Search Bar Element */
const searchbar = document.querySelector('#searchbar');
const buttons = document.querySelectorAll("button");


searchbar.addEventListener("input", whileTyping);


function whileTyping() {
  removeOldDropdown();
  
  const typing = searchbar.value.toLowerCase();
  const filtered = [];
  
  fruits.forEach(function(fruitname){
    if(typing.length === 0){
      return;
    };
    if((fruitname.substring(0, typing.length).toLowerCase()) === typing){
    console.log();
    return filtered.push(fruitname);
  }
  });

  /*console.log();
   console.log(filtered);*/

  createDropdown(filtered);
}


function createDropdown(list) {
  const ul = document.querySelector("ul");
  
  console.log(list);

  for(let name of list){
  const newli = document.createElement("li");
  const newbtn = document.createElement("button");

  newbtn.innerText = name;

  newbtn.addEventListener("click", (e) => {
    e.preventDefault();

    searchbar.value = newbtn.innerText;
    removeOldDropdown();
  });

  newli.appendChild(newbtn);
  ul.appendChild(newli);
  }
  

}

function removeOldDropdown(){
	const allLi = document.querySelectorAll("li");

	for(let li of allLi){
		li.remove();
	}
}
