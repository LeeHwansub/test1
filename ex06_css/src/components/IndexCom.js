import { StyleContentBlock,StyleContentWrap } from "./Common/StyleContent"
import imageFile from "../styles/images/ex03.jpg"
import { ProductContext, ProductImg, ProductList, ProductListBox, ProductName, ProductPrice, ProductTitle } from "./Common/StylePrduct";

const products =[
  {id: 1, name:"탱이사료",constext:"맛잇고 건강한 다이어트 사료!! 냥이들의 식사시간~", 
    price:"100원", URL:imageFile},
  {id: 2, name:"탱이간식",constext:"맛잇고 건강한 다이어트 간식!! 냥이들의 식사시간~", 
    price:"200원", URL:imageFile},
  {id: 3, name:"탱이사료",constext:"맛잇고 건강한 다이어트 사료!! 냥이들의 식사시간~", 
    price:"5000원", URL:imageFile},
  {id: 4, name:"탱이사료",constext:"맛잇고 건강한 다이어트 사료!! 냥이들의 식사시간~", 
    price:"4500원", URL:imageFile},
  {id: 5, name:"탱이간식",constext:"맛잇고 건강한 다이어트 간식!! 냥이들의 식사시간~", 
    price:"700원", URL:imageFile},
  {id: 6, name:"탱이사료",constext:"맛잇고 건강한 다이어트 사료!! 냥이들의 식사시간~", 
    price:"1000원", URL:imageFile},
  {id: 7, name:"탱이사료",constext:"맛잇고 건강한 다이어트 사료!! 냥이들의 식사시간~", 
    price:"1300원", URL:imageFile},
  {id: 8, name:"탱이간식",constext:"맛잇고 건강한 다이어트 간식!! 냥이들의 식사시간~", 
    price:"1700원", URL:imageFile},
  {id: 9, name:"탱이간식",constext:"맛잇고 건강한 다이어트 간식!! 냥이들의 식사시간~", 
    price:"2500원", URL:imageFile}
]

function IndexCom() {
  return (
    <>
      <StyleContentBlock>
        <StyleContentWrap>
          <ProductTitle>
          맛있고 건강한 사료!
          <ProductList>
            {products.map(pro=>(
              <ProductListBox key={pro.id}>
                <ProductImg src={pro.URL} alt=""/>
                <ProductName>{pro.name}</ProductName>
                <ProductContext>{pro.constext}</ProductContext>
                <ProductPrice>{pro.price}</ProductPrice>
                </ProductListBox>
            ))}
         </ProductList>
          </ProductTitle>
        </StyleContentWrap>
      </StyleContentBlock>
    </>
  );
}
export default IndexCom;