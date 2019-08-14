import React, {Component} from 'react';
import {naxios} from '../../../../Utilities';
import Button from '../../../Common/Btns/Buttons';
import Campo from '../../../Common/Campo/Campo';



export default class Login extends Component{
    constructor(){
        super();
        //definicion de estado inicial
        this.state ={
            email:'',
            password:'',

        };
        //para el autobinding

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSiginBtnClick = this.onSiginBtnClick.bind(this);

    }

   onChangeHandler(e){
       const {name,value} = e.target;
       this.setState({...this.state,[name]:value});
      


   }
   onSiginBtnClick(e){
       console.log(this.state);
       naxios.get('/api')
         .then( (data)=>{console.log(data)})
         .catch( (err)=> {console.log(err)})

         ;


   }
   render(){
       return(
        <section>
          <h1>-----------------Datos-----------------</h1>
          <section>
           <Campo 
            caption="Nombre del Requerimiento"
            value={this.state.email}
            name="Nombre"
            onChange={this.onChangeHandler}
           />
            
           <Campo 
            caption="Valor Fibonaccio"
            type="valor"
            value={this.state.password}
            name="valor"
            onChange={this.onChangeHandler}
           />

           <Campo 
            caption="Valor Impacto"
            type="valor"
            value={this.state.password}
            name="valor"
            onChange={this.onChangeHandler}
           />
           <section>
              <Button 
                caption="Guardar Datos"
                onClick={this.onSiginBtnClick}
              
              />
              <Button
                 caption="Borrar"
                 onClick={this.onSiginBtnClick}
              />
           </section>       
          </section>     
         </section>

       );
   }
}