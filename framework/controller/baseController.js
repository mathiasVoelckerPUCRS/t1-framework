// const select = require('../service/select');
const insertService = require('../service/insert');
const updateService = require('../service/update');
const selectService = require('../service/select');
const deleteService = require('../service/delete');
const Atribute = require('../service/atribute');

class BaseController {

    async findAll(req, res) {
        try {
            const tableName = req.route.path.substr(1);
            const data = await selectService.findAll(tableName);
            return res.send(data);
        } catch (error) { 
            return error
          .status(500)
          .json({ error: 'Ocorreu um erro ao buscar a lista de professores' });
      }
    }

    async findById(req, res) {
        try {
            const path = req.url.substr(1);
            const pathData = path.split('/');
            const tableName = pathData[0];
            const id = pathData[1];
            const data = await selectService.findById(tableName, id);
            if (data.length == 0) {
                return res.status(500).send({ error: `${tableName} with id ${id} not found` });
            }
            return res.send(data);
        } catch (error) { 
            return error
          .status(500)
          .json({ error: 'Ocorreu um erro ao buscar a lista de professores' });
      }
    }

    async insert(req, res) {
        const tableName = req.route.path.substr(1);
        const atributes = [];
        const object = req.body; 
        for (let atribute in object) {
            atributes.push(new Atribute(atribute, object[atribute]));
        }
        var response = await insertService.insertInto(tableName, atributes);
        if (response.affectedRows == 0) {
            return res.status(500).send({ error: `${tableName} with id ${id} not found` });
        }
        return res.send(response);
    }

    async update(req, res) {
        const path = req.url.substr(1);
        const pathData = path.split('/');
        const tableName = pathData[0];
        const id = pathData[1];
        const object = req.body; 
        var response = await updateService.update(tableName, object, id);
        if (response.affectedRows == 0) {
            return res.status(500).send({ error: `${tableName} with id ${id} not found` });
        }
        return res.send(response);
    }

    async delete(req, res) {
        const path = req.url.substr(1);
        const pathData = path.split('/');
        const tableName = pathData[0];
        const id = pathData[1];
        var response = await deleteService.delete(tableName, id)
        if (response.affectedRows == 0) {
            return res.status(500).send({ error: `${tableName} with id ${id} not found` });
        }
        return res.send(response);
    }
}
module.exports = BaseController

