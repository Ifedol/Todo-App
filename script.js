document.querySelector("#push").onclick =
    function (e) {
        e.preventDefault()

        if (document.querySelector('#newtask input').
            value.length == 0) {
            alert("Please Enter a Task");
        }
        else {
            console.log('jghjrkejsrhtjerjdshfjh');
            document.querySelector('#tasks').innerHTML
                += `<div class="task">
        <span id="taskname">${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">X</button></div>`;
            document.querySelector('#newtask input').value = ''
            let current_tasks = document.querySelectorAll('.delete');

            for (let i = 0; i < current_tasks.length; i++) {
                current_tasks[i].onclick = function () {
                    this.parentNode.remove();
                }

            }

            let tasks = document.querySelectorAll('#taskname');

            for (let i = 0; i < tasks.length; i++) {
                tasks[i].onclick = function () {
                    this.classList.toggle('completed');
                }

            }
            document.querySelectorAll('#newtask input').
                value = "";

        }
    }