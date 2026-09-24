document.querySelectorAll('.menu-toggle').forEach(function(button){button.addEventListener('click',function(){var links=button.nextElementSibling;links.classList.toggle('open');});});
