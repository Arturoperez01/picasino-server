
import Properties from "../../../properties";
import EventoModel from "../../../models/Newtest_db/EventoModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import EventoController from "../EventoController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/eventos`;
    router.post(baseUrl + "", authorize([]), EventoController.create);
    router.delete(baseUrl + "/:id", authorize([]), EventoController.delete);
    router.get(baseUrl + "/:id", authorize([]), EventoController.get);
    router.get(baseUrl + "", authorize([]), EventoController.list);
    router.post(baseUrl + "/:id", authorize([]), EventoController.update);
  },


  // CRUD METHODS

  
  /**
  * EventoModel.create
  *   @description CRUD ACTION create
  *   @param evento obj Object to insert
  *
  */
  create: async (req, res) => {
    try {
      const result = await EventoModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * EventoModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await EventoModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * EventoModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  get: async (req, res) => {
    try {
      const result = await EventoModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * EventoModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await EventoModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * EventoModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await EventoModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  }  
  
};

export default generatedControllers;
