class FormPost {
    constructor(idForm, idInput, idTextarea, ListPost) {
        this.form = document.getElementById(idForm);
        this.input = document.getElementById(idInput);
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
            if (this.formValidate(this.input.value) && (this.formValidate(textarea.value))) {
                const newPost = document.createElement('li');
                newPost.classList.add('post');
                newPost.innerHTML = `
                <div class="infoUserPost">
                    <div class="imgUserPost"></div>
                        <div class="namePost">
                            <strong>
                                ${this.input.value}
                            </strong> 
                        </div>
                </div>
                    <p>
                        "${this.textarea.value}"
                    </p>
    
                    <div class="actionBtnPost">
                    <button type="button" class="filesPost love" id="btnLove"><i class="fa-regular fa-heart" alt="Amei"></i>Amei</button>
                    <span id="displayLove">0</span>


                    <button type="button" class="filesPost like" id="btnLike"><i class="fa-regular fa-thumbs-up" alt="Curtir"></i>Curtir</button>
                            <span id="displayLike">0</span>
                </div>
                    `;
                    this.listPost.appendChild(newPost);
                    this.input.value = '';
                    this.textarea.value= '';
            } else {
                alert('Verifique os campo digitados. Não é permitido enviar mensagens sem identificação ou com menos de 3 caracteres.');
            }
        }
        this.onSubmit(handleSubmit);
    }
}

const postForm = new FormPost('formPost', 'input', 'textarea', 'posts');