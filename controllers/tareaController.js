const tareaService = require('../services/tareaService');

exports.readTareas = async (req, res)=>{
    try{
        const tareas = await tareaService.getTareas();
        res.status(200).send(tareas);
    }catch(error){
        console.log(error)
        res.status(500).send("Error al conseguir tareas.");
    }
    
};

exports.readTareaById = async (req, res)=>{
    try{
        const tarea = await tareaService.getTareaById(req.params.id);
        if(tarea){
            res.status(200).send(tarea);
        }else{
            res.status(404).send("Error al encontrar tarea con id: "+req.params.id)
        }
        
    }catch(error){
        console.log(error)
        res.status(500).send("Error al encontrar tarea.");
    }
};

exports.deleteTareaById = async (req, res) => {
    try {
       let borrar = await tareaService.deleteTareaByIdServ(req.params.id);

       if(borrar){
        return res.status(200).json("La tarea se eliminó con éxito");
       }else{
        return res.status(400).json(`Controller: Tarea n°: ${req.params.id} no existe`);
       }
       
    } catch (error) {
        console.log(error)
        res.status(500).send(`Controller: Error al eliminar la tarea id: ${req.params.id}`);
    }
};

exports.createTarea = async(req, res) => {
    try {
        const tarea = await tareaService.postTarea(req.body)
        res.status(200).send(tarea);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al crear la tarea.")

    }
};

exports.updateTarea = async (req, res)=>{
    try{
        const tarea = await tareaService.updateTarea(req.params.id, req.body);
        if(tarea){
            res.status(200).send(req.body);
        }else{
            res.status(404).send("Error al actualizar tarea con id: "+req.params.id)
        }
        
    }catch(error){
        console.log(error)
        res.status(500).send("Error al actualizar tarea.");    
    }
};