
const users = Array.from(document.querySelectorAll('.users'));

console.log(users);

users.forEach(user => {
  user.addEventListener('click', (e) => {
    const newSelection = e.target;
    const oldSelection = document.querySelector('.highlight')

    oldSelection.classList.remove('highlight');
    newSelection.classList.add('highlight');
  })
})

