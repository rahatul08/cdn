$(document).ready(function(){

  // table-row-select
  $('.table-stx tbody tr').click(function(){
    $(this).toggleClass('gray-row');
  });


  // table-row-context-menu
  $('.table-stx tbody tr').click(function(){
    $('.table-stx tbody tr').removeClass('context-menu-opened');
  });
  $('.table-stx tbody tr').contextmenu(function(){
    $('.table-stx tbody tr').removeClass('context-menu-opened');
  });
  $('.table-stx tbody tr').contextmenu(function(){
    $(this).addClass('context-menu-opened');
  });
  $('.table-stx tbody tr').contextmenu(function(){
    return false;
  });
  $(document).mouseup(function(e){
    var container = $(".table-stx tbody tr");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.table-stx tbody tr').removeClass('context-menu-opened');
    }
  });



  $(document.body).on("click","tr[data-href]", function () {
    window.location.href = this.dataset.href;
  });



  // mark-star-button
  $('.mark-star-d-button').click(function(){
    $(this).find('.cont1').toggleClass('d-none');
    $(this).find('.cont2').toggleClass('d-none');
  })
  
})




{
  let body = document.querySelector('body');
  let pageSidebarOpen = document.querySelector('.page-sidebar-open');
  let pageSidebarClose = document.querySelector('.page-sidebar-close');
  pageSidebarOpen.onclick = () => {
    body.classList.toggle('page-sidebar-opened');
  };
  pageSidebarClose.onclick = () => {
    body.classList.remove('page-sidebar-opened');
  };
};


var myModal = new bootstrap.Modal(document.getElementById('uploading-modal'), {})
myModal.toggle();
