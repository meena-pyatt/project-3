const Sidebar = () => {
  return (
    <div className="sidenav">
      <a href="#">New Arrivals</a>
      <a href="#">Tops</a>
      <a href="#">Pants</a>
      <a href="#">Skirts</a>
      <a href="#">Outerwear</a>
      <a href="#">Accessories</a>
      <a href="#">Shoes</a>
      <div></div>
      <a href="#">Clearance</a>

      {/* <div>
        <h6 className="p-1 border-bottom">Filter By</h6>
        <p className="mb-2">Color</p>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action mb-2 rounded">
            <a href="#">
              {' '}
              <span class="fa fa-circle pr-1" id="red"></span>Red{' '}
            </a>
          </li>
          <li className="list-group-item list-group-item-action mb-2 rounded">
            <a href="#">
              {' '}
              <span class="fa fa-circle pr-1" id="teal"></span>Teal{' '}
            </a>
          </li>
          <li className="list-group-item list-group-item-action mb-2 rounded">
            <a href="#">
              {' '}
              <span class="fa fa-circle pr-1" id="blue"></span>Blue{' '}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6>Type</h6>
        <form className="ml-md-2">
          <div className="form-inline border rounded p-sm-2 my-2">
            {' '}
            <input type="radio" name="type" id="boring"></input>{' '}
            <label for="boring" className="pl-1 pt-sm-0 pt-1">
              Boring
            </label>{' '}
          </div>
          <div className="form-inline border rounded p-sm-2 my-2">
            {' '}
            <input type="radio" name="type" id="ugly">
              {' '}
            </input>{' '}
            <label for="ugly" className="pl-1 pt-sm-0 pt-1">
              Ugly
            </label>{' '}
          </div>
          <div className="form-inline border rounded p-md-2 p-sm-1">
            {' '}
            <input type="radio" name="type" id="notugly"></input>{' '}
            <label for="notugly" className="pl-1 pt-sm-0 pt-1">
              Not Ugly
            </label>{' '}
          </div>
        </form>
      </div> */}
      {/* <div>
        <div id="myBtnContainer">
          <button class="btn active" onclick="filterSelection('all')">
            {' '}
            Show all
          </button>
          <button class="btn" onclick="filterSelection('cars')">
            {' '}
            Cars
          </button>
          <button class="btn" onclick="filterSelection('animals')">
            {' '}
            Animals
          </button>
          <button class="btn" onclick="filterSelection('fruits')">
            {' '}
            Fruits
          </button>
          <button class="btn" onclick="filterSelection('colors')">
            {' '}
            Colors
          </button>
        </div>

        <div class="container">
          <div class="filterDiv cars">BMW</div>
          <div class="filterDiv colors fruits">Orange</div>
          <div class="filterDiv cars">Volvo</div>
          <div class="filterDiv colors">Red</div>
          <div class="filterDiv cars">Ford</div>
          <div class="filterDiv colors">Blue</div>
          <div class="filterDiv animals">Cat</div>
          <div class="filterDiv animals">Dog</div>
          <div class="filterDiv fruits">Melon</div>
          <div class="filterDiv fruits animals">Kiwi</div>
          <div class="filterDiv fruits">Banana</div>
          <div class="filterDiv fruits">Lemon</div>
          <div class="filterDiv animals">Cow</div>
        </div>
      </div> */}
    </div>
  )
}

// filterSelection('all')
// function filterSelection(c) {
//   var x, i
//   x = document.getElementsByClassName('filterDiv')
//   if (c == 'all') c = ''
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], 'show')
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], 'show')
//   }
// }

// // Show filtered elements
// function w3AddClass(element, name) {
//   var i, arr1, arr2
//   arr1 = element.className.split(' ')
//   arr2 = name.split(' ')
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += ' ' + arr2[i]
//     }
//   }
// }

// // Hide elements that are not selected
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2
//   arr1 = element.className.split(' ')
//   arr2 = name.split(' ')
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1)
//     }
//   }
//   element.className = arr1.join(' ')
// }

// // Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById('myBtnContainer')
// var btns = btnContainer.getElementsByClassName('btn')
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function () {
//     var current = document.getElementsByClassName('active')
//     current[0].className = current[0].className.replace(' active', '')
//     this.className += ' active'
//   })
// }

export default Sidebar
