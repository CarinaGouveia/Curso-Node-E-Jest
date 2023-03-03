
import { makeMockResponse } from "../mocks/mockResponse";
import { UserController } from "./userControllers"
import {Request } from 'express';

describe('Users Controller',()=>{
    
    const userController =  new UserController();
    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()

    it('Deve listar os nosso usuarios',()=>{
       userController.listarUsuario(mockRequest,mockResponse)

       expect(mockResponse.state.status).toBe(200)
       expect(mockResponse.state.json).toHaveLength(4)
    })

})