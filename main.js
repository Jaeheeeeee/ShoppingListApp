const table = document.querySelector('table');
// const listGroup = document.querySelector('.list-group');
// const listContents = document.querySelector('.contents');
// const listDelBtn = document.querySelector('.del-btn>button');

const form = document.querySelector('.list-form');
const input = document.querySelector('.list-input');
const addBtn = document.querySelector('.add-btn');
const allDelBtn = document.querySelector('.all-del-btn');


form.addEventListener('submit', addList);

function addList() {
  if(input.value == false) {
    console.log('no data')
  } else {
    const newListGroup = document.createElement('tr');
    const newContents = document.createElement('td');
    const newDelBtn = document.createElement('td');
    
    table.appendChild(newListGroup);
    newListGroup.appendChild(newContents);
    newListGroup.appendChild(newDelBtn)
    
    
    newListGroup.setAttribute('class','list-group');
    newContents.setAttribute('class','contents');
    newDelBtn.setAttribute('class','del-btn');
    

    newContents.textContent = input.value;
    newDelBtn.innerHTML = `
    <button class='del-btn-img'>
      <i class="far fa-trash-alt"></i>
    </button>
    `;
    input.value = null;

    newDelBtn.addEventListener('click', () => {
    table.removeChild(newListGroup);
    });

  }
};

allDelBtn.addEventListener('click',() => {
  const AllDelAnswer = confirm('정말로 모두 삭제하시겠어요?','false');
  if (AllDelAnswer) {
    while (table.firstChild) {
      table.removeChild(table.firstChild);
  }
  } else {
    console.log('no data')
  }
});
