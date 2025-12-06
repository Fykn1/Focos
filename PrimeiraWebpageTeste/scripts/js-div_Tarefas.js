function concluir_div_Tarefas(N) {
  concluir_button_Tarefas(N);
  concluir_img_Checkbutton(N);
  concluir_p_Tarefas(N);
  concluir_p_MaisPontos(N);
}

function concluir_img_Checkbutton(N) {
  const img_Checkbutton_Concluida = document.querySelector('.js-img_Checkbutton' + N);
  img_Checkbutton_Concluida.classList.toggle('img_Checkbutton_Concluida' + N);
}

function concluir_button_Tarefas(N) {
  const button_Tarefa_Concluida = document.querySelector('.js-button_Tarefa' + N);
  button_Tarefa_Concluida.classList.toggle('button_Tarefa_Concluida' + N);
}

function concluir_p_Tarefas(N) {
  const p_Tarefa_Concluida = document.querySelector('.js-p_Tarefas' + N);
  p_Tarefa_Concluida.classList.toggle('p_Tarefa_Concluida' + N);
}

function concluir_p_MaisPontos(N) {
  const p_MaisPontos_Concluida = document.querySelector('.js-p_MaisPontos' + N);
  p_MaisPontos_Concluida.classList.toggle('p_MaisPontos_Concluida' + N);
}
