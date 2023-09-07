class FormPost {
    constructor(idForm, idTextarea, ListPost) {
        this.form = document.getElementById(idForm);
        this.textarea = document.getElementById(idTextarea);
        this.listPost = document.getElementById(ListPost);
        this.addSubmit();
    }

    formValidate(value){
        if(
            value == '' || 
            value == null || 
            value == undefined || 
            value.length < 3)
        {
            return false;
        }
        return true;
    }

    onSubmit(func) {
        this.form.addEventListener('submit',func);
    }

    addSubmit() {
        const handleSubmit = (event) => {
            event.preventDefault();
            if (this.formValidate(this.textarea.value)) {
                const newPost = document.createElement('li');
                newPost.classList.add('post');
                newPost.innerHTML = `
                <div class="infoUserPost">
                    <div class="imgUserPost"></div>
                        <div class="namePost">
                            <strong>Nome Completo</strong> 
                        </div>
                </div>
                    <p>
                        ${this.textarea.value}
                    </p>
    
                    <div class="actionBtnPost">
                        <button type="button" class="filesPost love">
                            <i class="fa-regular fa-heart" alt="Amei"></i>
                            Amei
                        </button>
    
                        <button type="button" class="filesPost like">
                            <i class="fa-regular fa-thumbs-up"alt="Curtir"></i>
                            Curtir
                        </button>
                    </div>
                    `;
                    this.listPost.appendChild(newPost);
                    this.textarea.value= '';
            } else {
                alert('Verifique o campo digitado. Não é permitido enviar mensagens com menos de 3 caracteres.');
            }
        }
        this.onSubmit(handleSubmit);
    }
}

const postForm = new FormPost('formPost', 'textarea', 'posts');