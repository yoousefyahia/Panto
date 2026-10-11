  const tabs = document.querySelectorAll('#categoryTabs .nav-link');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });

const addButtons = document.querySelectorAll('.add-btn' );

  addButtons.forEach(button => {
    button.addEventListener('click', function () {
      alert('done');
    });
  });