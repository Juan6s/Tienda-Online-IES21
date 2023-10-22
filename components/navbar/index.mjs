export function navbar(options) {
  let list = "";
  for (const option of options) {
    list += parse_option(option);
  }

  return `    
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="../index.html">
          <img src="../../img/icon.png" alt="El aguila" width="30" height="24" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav nav-underline me-auto mb-2 mb-lg-0">
            ${list}
          </ul>
          <a class="btn btn-outline-danger" href="#">Logout</a>
        </div>
      </div>
    </nav>`;
}

function parse_option(option) {
  if (option.isDropwdown === true) {
    let dropdown = "";
    for (const dropwdown_option of option.options) {
      dropdown += ` <li>
                    <a class="dropdown-item" href=${dropwdown_option.href}>${dropwdown_option.header}</a>
                  </li>`;
    }
    return ` <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                      >Categorias</a
                    >
                    <ul class="dropdown-menu">
                     ${dropdown}
                    </ul>
                  </li>`;
  }
  return `<li class="nav-item">
      <a class="nav-link ${option.active ? "active" : ""}" onclick="${
    option.onClick
  }">${option.header}</a>
      </li>`;
}
