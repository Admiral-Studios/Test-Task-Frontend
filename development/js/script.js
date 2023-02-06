'use strict';

const optionsList = document.querySelector('.messages__optionList');

document.addEventListener('click', e => {
  if (e.target.closest('.messages__optionImage')) {
    if (document.querySelector('.messages__optionList--opened')) {
      optionsList.classList.remove(`messages__optionList--opened`);
    } else {
      optionsList.classList.add(`messages__optionList--opened`);
    }
  }
});
