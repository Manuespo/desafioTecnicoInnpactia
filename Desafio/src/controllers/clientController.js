

// Ruta para obtener la lista de clientes
async function getAllClients (req, res){
  try {
    const clients = "HOLA";
    res.status(200).json(clients);
  } catch (error) {
    console.error('Error obtaining the list of clients.', error);
    res.status(500).json(error);
  }
};
/*
// Ruta para agregar un nuevo cliente
router.post('/clients', async (req, res) => {
    try {
      const newClient = await Client.create(req.body);
      res.json(newClient);
    } catch (error) {
      console.error('Error adding a new client:', error);
      res.status(500).send('Internal server error.');
    }
  });


// Ruta para actualizar un cliente existente
router.put('/clients/:id', async (req, res) => {
    const clientId = req.params.id;
    try {
      const [updatedRowsCount, updatedClient] = await Client.update(req.body, {
        where: { id: clientId },
        returning: true, 
      });
  
      if (updatedRowsCount > 0) {
        res.json(updatedClient[0]);
      } else {
        res.status(404).send('Client not found.');
      }
    } catch (error) {
      console.error('Error updating the client:', error);
      res.status(500).send('Internal server error.');
    }
  });



  // Ruta para eliminar un cliente
router.delete('/clients/:id', async (req, res) => {
    const clientId = req.params.id;
    try {
      const deletedRowCount = await Client.destroy({
        where: { id: clientId },
      });
  
      if (deletedRowCount > 0) {
        res.status(204).send();
      } else {
        res.status(404).send('Client not found.');
      }
    } catch (error) {
      console.error('Error deleting the client:', error);
      res.status(500).send('Internal server error.');
    }
  });


*/
module.exports = {getAllClients}
