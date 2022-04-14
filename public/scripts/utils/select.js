function selectFunction() {
  const selector = document.querySelector('.custom-selector');
// const ariaSelect = document.querySelector('.ariaSelect');
// console.log(".custom-selector", selector);

selector.addEventListener('change', e => {
  console.log('changed', e.target.value);
})

selector.addEventListener('mousedown', e => {
  e.preventDefault();
  const select = selector.children[0];  
  const dropDown = document.createElement('ul');
  dropDown.className = "selector-options"; 
  selector.setAttribute('aria-expanded', 'true');
  
  [...select.children].forEach(option => {
    const dropDownOption = document.createElement('li');
    const arrow = document.createElement('i');
    arrow.setAttribute("class", "fas fa-chevron-up arrow");
    dropDownOption.textContent = option.textContent;

    // const arrow = document.querySelector(".arrow");
    // arrow.setAttribute("class", "fas fa-chevron-up arrow");

    dropDownOption.addEventListener('mousedown', e => {
      // console.log("click");
      e.stopPropagation();
      select.value = option.value;
      selector.value = option.value;
      // console.log(select.value, selector.value);
      select.dispatchEvent(new Event('change'));
      selector.dispatchEvent(new Event('change'));
      // console.log(select.children[2]);
      // // console.log("a");
      dropDown.remove();
      selector.setAttribute('aria-expanded', 'false');
      // arrow.setAttribute("class", "fas fa-chevron-up arrow");
      // console.log("selector.value", selector.value);
    });    
    dropDown.appendChild(dropDownOption);
    dropDown.appendChild(arrow);
  })
  selector.appendChild(dropDown);
  document.addEventListener('click', e=> {    
    if(!selector.contains(e.target)) {
      dropDown.remove();
      selector.setAttribute('aria-expanded', 'false');
      // arrow.setAttribute("class", "fas fa-chevron-up arrow");
      // console.log("b");
    }
  })
})
}

selectFunction();

