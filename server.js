const express = require('express');
const bodyParser = require('body-parser'); // Importa body-parser
const app = express();
const port = 3000;

// Middleware para analizar datos JSON en solicitudes POST
app.use(bodyParser.json());

const tareas = [
  { id: 1, description: 'Hacer la compra', completed: false },
  { id: 2, description: 'Estudiar JavaScript', completed: true },
  { id: 3, description: 'Hacer ejercicio', completed: false }
];



app.get('/tareas', (req, res) => {
  res.json(tareas);
});

// Ruta POST para modificar una tarea por su ID
app.post('/tareas/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body; // Los datos actualizados se envían en el cuerpo de la solicitud

  // Encuentra la tarea por su ID
  const taskIndex = tareas.findIndex(tarea => tarea.id === taskId);

  if (taskIndex === -1) {
    res.status(404).json({ error: 'Tarea no encontrada' });
  } else {
    // Actualiza la tarea con los datos proporcionados
    tareas[taskIndex].id = req.params.id;
    tareas[taskIndex].description = updatedTask.description;
    tareas[taskIndex].completed = updatedTask.completed;
    res.json({ message: 'Tarea modificada con éxito', task: updatedTask });
  }
});

app.post('/tareas2/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body; // Los datos actualizados se envían en el cuerpo de la solicitud

  // Encuentra la tarea por su ID
  const taskIndex = tareas.findIndex(tarea => tarea.id === taskId);

  if (taskIndex === -1) {
    res.status(404).json({ error: 'Tarea no encontrada' });
  } else {
    // Actualiza el estado de la tarea
    tareas[taskIndex].completed = true;
    res.json({ message: 'Tarea '+req.params.id+' Completada' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});


