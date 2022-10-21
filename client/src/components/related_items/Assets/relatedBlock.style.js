import styled from 'styled-components';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

export const RelatedBlockContainer = styled.div`
background-color: lightgrey;
position: relative;
display: flex;
align-items: center;
width: 90%;
height: 500px;

// width: 100%;
// height: auto;
// display: flex;
// flex-direction: row;
// justify-content: space-around;
// flex-flow: wrap;
// align-items: center;
`;

export const RelatedCardGraphic = styled.div`
display: inline-block;
height: 450px;
width: 300px;
margin-left: 1em;
margin-right: 1em;
// display: grid;
// grid-template-columns: 300px;
// grid-template-rows: 300px 150px;
// grid-template-areas: "image" "text";
border-radius: 18px;
background: white;
box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
position: relative;
`;

// export const ImageOnCard = styled.div`
// grid-area: image;
// background: url("https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80");
// background-size: cover;
// border-top-left-radius: 15px;
// border-top-right-radius: 15px;
// `;

export const ImageOnCard = styled.div`
height: 70%;
width: 100%;
background: url("${(props) => (props.image)}");
background-size: cover;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
`;

export const TextOnCard = styled.div`
grid-area: text;
margin: 0px 0px 0px 10px;
`;

export const LeftArrow = styled(BsFillArrowLeftCircleFill)`
color: black;
font-size: 2em;
left: 0;
position: absolute;
z-index: 10;
&:hover,
&:focus {
  color: moccasin;
}
`;

export const RightArrow = styled(BsFillArrowRightCircleFill)`
color: black;
font-size: 2em;
right: 0;
position: absolute;
&:hover,
&:focus {
  color: moccasin;
}
`;

export const SalePrice = styled.span`
background-color: red;
color: white;
`;

export const PriceStruckthrough = styled.span`
text-decoration: line-through;
`;

export const RelatedActnBttn = styled(AiFillStar)`
color: gold;
font-size: 1.5em;
position: absolute;
left: 50px;
`;

// export const Slider = styled.div`
// height: 100%;
// width: 100%;
// white-space: nowrap;
// overflow-x: scroll;
// scrollbar-width: none;
// // &::-webkit-scrollbar {
// //   display: none;
// // }
// `;

// background: url(https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80");
// width: 100%;
// height: 300px;
// margin: 20px;
// box-sizing: border-box;
// font-size: 1em;
// color: white;
// border-radius: 25px;
// box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);