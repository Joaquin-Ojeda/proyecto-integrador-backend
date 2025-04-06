const tareaRepository = require('../repository/tareaRepository');

exports.getTareas = ()=>{
    return tareaRepository.getTareasRepo();
};

exports.getTareaById = (id)=>{
    return tareaRepository.getTareaByIdRepo(id);
};

exports.deleteTareaByIdServ = (id) => {
    return tareaRepository.deleteTareaByIdRepo(id);
};

exports.postTarea = async(tarea) => {
    try {
        return tareaRepository.postTareaRepo(tarea);
    } catch (error) {
        console.log(error);
    }
};

exports.updateTarea = (id, tarea)=>{
    return tareaRepository.updateTarea(id, tarea);
};