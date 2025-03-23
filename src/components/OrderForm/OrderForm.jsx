import { Form, FormGroup, Input, Label } from "reactstrap";
import "./index.css";
export default function OrderForm() {
  const toppings = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Sucuk",
    "Ananas",
    "Kabak",
  ];
  return (
    <>
      <section className="size-dough">
        <Form className="pizza-size">
          <h3>
            Boyut Seç<span className="red"> *</span>
          </h3>
          <FormGroup check>
            <Input name="radio1" type="radio" id="Kucuk" />
            <Label check htmlFor="Kucuk">
              Küçük
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" id="Orta" />
            <Label check htmlFor="Orta">
              Orta
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" id="Buyuk" />
            <Label check htmlFor="Buyuk">
              Büyük
            </Label>
          </FormGroup>
        </Form>
        <Form className="pizza-dough">
          <FormGroup className="dough-form">
            <Label htmlFor="exampleSelect">
              <h3>
                Hamur Seç<span className="red"> *</span>
              </h3>
            </Label>
            <Input id="exampleSelect" name="select" type="select">
              <option disabled hidden>
                Hamur Kalınlığı
              </option>
              <option>İnce</option>
              <option>Orta</option>
              <option>Kalın</option>
            </Input>
          </FormGroup>
        </Form>
      </section>
      <section className="pizza-toppings">
        <Form>
          <h3>Ek Malzemler</h3>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <section className="toppings-container">
            {toppings.map((item, index) => {
              return (
                <div>
                  <Input type="checkbox" id={index}></Input>
                  <Label htmlFor={index}>{item}</Label>
                </div>
              );
            })}
          </section>
        </Form>
      </section>
    </>
  );
}
