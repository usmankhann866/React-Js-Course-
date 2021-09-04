// import React and Component from react to a component and react app
import React, { Component } from 'react';
import { Media } from 'reactstrap';

// Creating a component Menu containg all the list of dishes
class Menu extends Component{

    /* constructor: 1) it is used for initializing the local state of the component by assigning an object to this.state.
       2) It used for binding event handler methods that occur in your component.  */
    constructor (props){
        super(props);

    // state contain the data (different dishes) which will be rendered on the screen of the page   
        this.state={

            dishes: [

                {
                    id: 0,
                    name:'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
                 {
                    id: 1,
                    name:'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
                 {
                    id: 2,
                    name:'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
                 {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
                 ],
          
        };
    }

    render(){

        /* This menu element will loop over through all the dishes and display each in the screen of the page */
        const menu = this.state.dishes.map((dish)=>{
         
         return(
             <div key={dish.id} className= "col-12 mt-5">
                
                 <Media tag="li">
                     <Media left middle>
                         <Media object src={dish.image} alt={dish.name} />
                     </Media>

                <Media body className="ml-5">
                    <Media heading> {dish.name} </Media>
                    <p> {dish.description} </p>
                    </Media>   

                 </Media>
             </div>
         );
        }); 


        return(
 
              <div className="container">

                <div className="row">

                </div>
                <Media list>
                       {menu}
                </Media>
              </div>
        );
    }
}

export default Menu;