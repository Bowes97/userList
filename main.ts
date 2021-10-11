let form: HTMLFormElement = document.forms.f1;
let arr = [];
let userIndex;
form.btn.addEventListener('click', function () {
    class Registr {
        login: string;
        password: string;
        email: string;
        constructor(login: string, password: string, email: string,) {
            this.login = login;
            this.password = password;
            this.email = email;
        }
    }
    let registr = new Registr(form.login.value, form.password.value, form.email.value)
    arr.push(registr);
    form.login.value = "";
    form.password.value = "";
    form.email.value = "";

    render();
})
function render() {
    let body = document.querySelector('.table tbody');
    body.textContent = '';
    let i = 1;
    arr.forEach(function (item) {
        let tr = document.createElement('tr');
        let child = body.appendChild(tr);
        child.innerHTML += `<td>${i}</td><td>${item.login}</td><td>${item.password}</td><td>${item.email}</td><td><button data-edit-id=${i} class="edit">Edit</button></td><td><button data-remove-id=${i} class="delete">Delete</button></td>`;
        i++;
    })
    remove()
    editUser()

}
function remove() {
    $(".delete").on('click', (e) => {
        let id = $(e.target).attr('data-remove-id');
        console.log(id);
        arr.splice(id - 1, 1);
        render();
    })
}
function editUser() {
    $(".edit").on('click', (e) => {
        let id = $(e.target).attr('data-edit-id');
        console.log(id);
        userIndex = id;
        form.password.value = arr[id - 1].password;
        form.login.value = arr[id - 1].login;
        form.email.value = arr[id - 1].email;
        $('.submit').hide();
        $('.editUser').show();
        render();
    })
}
function saveEditUser() {
    $('.editUser').click(function () {
        class NewRegistr {
            login: string;
            password: string;
            email: string;
            constructor(login: string, password: string, email: string,) {
                this.login = login;
                this.password = password;
                this.email = email;
            }
        }
        let newRegistr = new NewRegistr(form.login.value, form.password.value, form.email.value)
        arr[userIndex - 1] = newRegistr;
        form.login.value = "";
        form.password.value = "";
        form.email.value = "";
        render();
        $('.submit').show();
        $('.editUser').hide();
    })
}
saveEditUser();