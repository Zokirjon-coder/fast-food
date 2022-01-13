import styled from "styled-components"

export const Container = styled.div`
padding: 5px 30px;
position: relative;
display: flex;
justify-content: flex-start;
background: #E5E5E5;
height: 100vh;
`;

export const SidebarContainer = styled.div`
min-width: 300px;
height: 100vh;
position: relative;
background: #fff;
`;

export const Menu_item = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 20px;
cursor: pointer;
user-select: none;

.active{
    color: white;
    background-color: #FCB600;
    .icons{
        background-color: transparent;
    }
    img{
        filter: brightness(10);
    }
}
`;

export const Menu_icon = styled.div`
background-color: #eee;
width: 30px;
height: 30px;
display: grid;
place-items: center;
border-radius: 5px;
img{
    filter: brightness(0);
    :active{
        filter: brightness(10);
    }
}
`;

export const Menu_title = styled.div`
text-transform: capitalize;
`;

export const LogoBar = styled.div`
padding: 28px 0 0 24px;
display: flex;
align-items: center;
justify-content: flex-start;

.imgLogo {
    background: url(../${({ background }) => background}) no-repeat center center;
    background-size: cover;
    border-radius: 50%;
    width: 80px;
    height: 80px;
}

.title{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-right: 25px;
    margin-left: 15px;

    h1{
        font-size: 18px;
    }

    p{
        font-size: 14px;
        color: #ccc;
    }
}
`;

export const Logout = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;
position: absolute;
bottom: 30px;
left: 50px;
cursor: pointer;
user-select: none;

p{
    text-transform: capitalize;
}
`;

export const MAIN = styled.div`
flex-grow: 1;
position: relative;
min-height: 100%;
`;

export const HEADER = styled.div`
width: 100%;
height: 80px;
`;

export const Flex = styled.div`
display: flex;
align-items: center;
height: 100%;
`;

Flex.spaceBtwn = styled.div`
display: flex;
align-items: center;
height: 100%;
justify-content: space-between;
`;

Flex.spaceBtwnHA = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
` 

Flex.flex = styled.div`
display: flex;
`

export const AddFood = styled.div`
min-width: 200px;
margin: 0 2px;
background-color: white;
height: 100%;
.centered{
    justify-content: center;
    gap: 15px;
}
button{
    all: unset;
    background-color: #20D472;
    padding: 18px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    span{
        background-color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    span:nth-child(1){
        width: 15px;
        height: 2px;
    }
    span:nth-child(2){
        width: 2px;
        height: 15px;
    }
}

p{
    font-size: 13px;
    width: 50%;
}
`;

export const SearchBar = styled.div`
height: 100%;
flex-grow: 1;
background-color: white;
padding-left: 50px;
.search{
    background-color: whitesmoke;
    overflow: hidden;
    height: 50px;
    width: 300px;
    border-radius: 50px;
    input{
        all: unset;
        width: 100%;
        height: 100%;
        padding: 0 15px;
        font-size: 13px;
        background-color: transparent;
    }
    img{
        margin-right: 15px;
    }
}
`;

export const CircleBtn = styled.button`
width: ${({ param }) => param.diametr + 'px'};
height: ${({ param }) => param.diametr + 'px'};
border-radius: 50%;
position: relative;
background-color: white;
border: ${({ param }) => param.borderWidth + 'px'} solid whitesmoke;
margin-left: ${({noML})=> !noML ? '25px': 0};
transition: border linear .2s;
cursor: pointer;

:hover{
    border: ${({ param }) => param.borderWidth + 'px'} solid rgba(0,0,0,.3);
}

:active{
    transition: border linear 0;
    border: ${({ param }) => param.borderWidth + 'px'} solid rgba(195,0,0,1);
}
`;

export const Headings = styled.div`
margin: 20px 0;
background-color: white;
padding: 8px 0 8px 60px;
border-bottom: 2px solid rgba(0, 0, 0, 0.3);
text-transform: uppercase;
font-size: 13px;
font-weight: 600;


div > div{
    padding: 3px 5px;
    border-left: 1px solid rgba(0, 0, 0, 0.3)
}

.maxsulot{
    width: 180px;
    border: 0;
}
.kategoriya{
width: 200px;
}

.narxi{
    width: 150px;
}

.qoshimcha{
    width: 220px;
}
`;

export const FoodList = styled.div`
padding: 0 30px 15px 30px;
height: calc(100% - 180px);
overflow-y: scroll; 
::-webkit-scrollbar{
    max-height: 50%; 
    height: 50%;
    width: 5px;
}

::-webkit-scrollbar-button{
    max-height: 10px;
    border-radius: 5px;
    background-color: #000;
    height: 15px;
}
::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background-color: #FCB600;
    height: 15px;
}
`;

export const FoodItem = styled.div`
background-color: white;
padding: 5px 15px;
border-radius: 5px;
transition: box-shadow linear .5s;
margin-bottom: 5px;

:hover{
    box-shadow: 0 8px 15px rgba(0,0,0,0.5);
}

div > img{
border-radius: 50%;
}
div > .foodname{
width: 150px;
margin-left: 20px;
}

div > .foodkategory{
width: 200px;
}
div > .foodprice{
width: 150px;
}
div > .foodinf{
width: 200px;
}

div > .foodaction{
display: flex;
align-items: center;
justify-content: space-between;
}
`;

export const AddFoodButton = styled.div`
padding: 10px 15px;
text-align: center;
border: 1px solid rgba(0,0,0,.3);
cursor: pointer;
user-select: none;
color: #2D3A45;
text-transform: capitalize;
border-radius: 5px;

:hover{
    box-shadow: 0 8px 15px rgba(0,0,0,0.5);
}
`;

export const FILTER = styled.div`
width: 313px;
height: 227px;
position: absolute;
top: 73px;
left: -190px;
background: #FFFFFF;
box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
padding: 20px 24px;
text-align: left;
font-size: 12px;
display: ${({hide}) => hide ? "block" : "none" };
::before{
    content: '';
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    position: absolute;
    top: -20px;
    transform: rotate(45deg);
    right: 55px;
    box-shadow: -5px -5px 5px rgba(176, 177, 181, 0.432802);
}

> div > span{
    color: #ccc;
}

.select{
    margin: 5px 0 15px;
}

> .select > select{
    width: 100%;
    height: 100%;
    padding: 13px 16px;
    border-radius: 6px;
    border-color: #ccc;
    outline-color: #ccc;
    color: #111;
    text-transform: capitalize;
    > option{
        border-radius: 5px;
        padding: 5px 15px;
        display: inline-block;
        height: 150px;
    }
}

> .checkboxses{
    .check{
        user-select: none;
        display: flex;
        justify-content: flex-start;
        column-gap: 15px;
        align-items: center;
        margin-bottom: 10px;
        font-size: 12px;
        input{
            --webkit-appearance: none;
            appearance: none;
            padding: 8px;
            border: 1px solid var(--main-color);
            border-radius: 2px;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                background: var(--main-color);
                padding: 5px;
                border-radius: 2px;
                transition: all .2s;
            }

            &:not(:checked){
                border-color: var(--grey);
            }
            
            &:hover{
                border-color: var(--main-color);
            }
            
            &:not(:checked)::before{
                transform: scale(0);
            }
        }
    }
}
`;


export const HeadingsKategory = styled.div`
margin: 20px 0;
background-color: white;
padding: 8px 0 8px 60px;
border-bottom: 2px solid rgba(0, 0, 0, 0.3);
text-transform: uppercase;
font-size: 13px;
font-weight: 600;


div > div{
    padding: 3px 5px;
    border-left: 1px solid rgba(0, 0, 0, 0.3)
    
}

.kategoryuz{
    width: 250px;
    border: 0;
}
.kategoryru{
    width: 251px;
}
.kategorymain{
    width: 250px;
}

.action{
    flex: 1;
}
`;

export const KategoryItem = styled.div`
background-color: white;
padding: 5px 15px;
border-radius: 5px;
transition: box-shadow linear .5s;
margin-bottom: 5px;

:hover{
    box-shadow: 0 8px 15px rgba(0,0,0,0.5);
}

}
div > .kategoryuz{
width: 245px;
margin-left: 20px;
}

div > .kategoryru{
width: 255px;
}
div > .kategorymain{
width: 230px;
}

div > .kategoryaction{
display: flex;
align-items: center;
justify-content: space-between;
}
`;

export const FilialItem = styled.div`
background-color: white;
padding: 5px 15px;
border-radius: 5px;
transition: box-shadow linear .5s;
margin-bottom: 5px;
font-size: 14px;

:hover{
    box-shadow: 0 8px 15px rgba(0,0,0,0.5);
}

div > img{
border-radius: 50%;
}

div > .filialnameuz{
width: 180px;
margin-left: 20px;
}

div > .filialnameru{
width: 180px;
}
div > .mark{
width: 200px;
}
div > .worktime{
width: 160px;
}

div > .fillialaction{
display: flex;
align-items: center;
justify-content: space-between;
}
`;

export const HeadingsFilial = styled.div`
margin: 20px 0;
background-color: white;
padding: 8px 0 8px 60px;
border-bottom: 2px solid rgba(0, 0, 0, 0.3);
text-transform: uppercase;
font-size: 13px;
font-weight: 600;


div > div{
    padding: 3px 5px;
    border-left: 1px solid rgba(0, 0, 0, 0.3)
}

.maxsulot{
    width: 180px;
    border: 0;
}

.fillial{
    min-width: 180px;
}

.moljal{
    min-width: 200px;
}

.ishvaqti{
    min-width: 180px;
}

.kategoriya{
width: 200px;
}

.narxi{
    width: 150px;
}

.qoshimcha{
    width: 220px;
}
`;