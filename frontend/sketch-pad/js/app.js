$(document).ready(function() {
  createGrid(16);

  draw();

  var cell = $('.cell');

  $('.create-grid').on('click', function() {
    var inputSize = prompt('Enter a grid size:')

    $('.cell').remove();

    createGrid(inputSize);
    draw();
  });
});

function createGrid(size) {
  var count = size * size;
  var grid = $('.grid');
  var cellSize = 800 / size;

  for (var i = 0; i < count; i++) {
    var cell = $('<div class="cell"></div>')
      .width(cellSize + 'px')
      .height(cellSize + 'px')

    grid.append(cell);
  }
}

function draw() {
  $('.cell').hover(function() {
    $(this).css('background', '#1abc9c');
  });
}
