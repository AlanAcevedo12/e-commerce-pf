import { useState } from "react"
import { useDispatch } from "react-redux"
import { modifyCart, removeCart } from "../../redux/actions"
import { MainDiv , Div , Header , Main , Detail , Options , Button , List , Li , Img , Close , IncDiv } from "./styles"


export default function AddPopUp ({ id , nombre , img , precio , close }){
let [amount , setAmount] = useState(1)
const [price , setPrice] = useState(precio)  //Pasaria precio por props

const dispatch = useDispatch()

const incAmount = ()=>{
    setAmount(amount+1)
    setPrice((amount+1)*precio)
    
}
const decAmount = ()=>{
    if (amount>1) {
        setAmount(amount-1)
        setPrice((amount-1)*precio)
    }
}
const addMore = ()=>{
    let newOrder={
        id,
        amount,
    }
    dispatch(modifyCart(newOrder))
    alert(`${amount} items agregados al carrito`)
}
const deleteCartItem = ()=>{
    dispatch(removeCart(id))
    close()
}
const formatPrice = (price) =>{
    return new Intl.NumberFormat("es-AR").format(price)
}
return(
    <MainDiv>
        <Header>
            <h2>{nombre} añadido al carrito</h2><Close onClick={close}>x</Close>
        </Header>
        <Main>
            <Img src={`${img}`}/>
            {/* <Detail>
                <List>
                    <Li>Pantalon wide leg con bolsillos</Li>
                    <Li>Descripcion</Li>
                    <Li>Talle: XL L M S </Li>
                    <Li>Rating o estrellas</Li>
                </List>
            </Detail> */}
            <Options>
                <List>
                    <Li>
                        <div>
                            <p> Se añadió el item al carrito</p>
                        </div>
                    </Li>
                    <Li>
                        <h3>
                        Subtotal: ${formatPrice(precio)}
                        </h3>
                    </Li>
                    <Li>
                        <Div>
                            <h3>Desea añadir más?</h3>
                            <IncDiv>                            
                                <button onClick={decAmount}>-</button><p>{amount}</p><button onClick={incAmount}>+</button>
                            </IncDiv>
                            <h4>Se añadirán {amount} prendas</h4>
                            <h4>Subtotal: ${formatPrice(price)}</h4>
                            <button onClick={addMore}>Añadir</button>
                        </Div>
                    </Li>
                    <Li>
                        <Button>Ir al carrito</Button>
                    </Li>
                    <Li>
                        <h4 onClick={close}>Seguir comprando</h4>
                    </Li>
                    <Li>
                        <h4 onClick={deleteCartItem}>Cancelar compra</h4>
                    </Li>
                </List>
                
                
                
            </Options>
        </Main>
    </MainDiv>
)
}