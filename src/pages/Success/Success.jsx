import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SuccessMain from "../../components/SuccessMain";

export default function Success(props) {
  const { orderData } = props;
  
  
  return (
    <>
    <Header />
    <SuccessMain orderData={orderData} />
    <Footer />
    </>
  ); 
}
