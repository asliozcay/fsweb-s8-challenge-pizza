import { Form, FormGroup, Input, Label, Button, ButtonGroup } from "reactstrap";
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
      <section className="pizza-order">
        <div className="container">
          <Form>
            <div className="size-dough">
              <FormGroup check className="pizza-size">
                <h3>
                  Boyut Seç<span className="red"> *</span>
                </h3>
                <span>
                  <Input name="size-radio" type="radio" id="Kucuk" />
                  <Label check htmlFor="Kucuk">
                    Küçük
                  </Label>
                </span>
                <span>
                  <Input name="size-radio" type="radio" id="Orta" />
                  <Label check htmlFor="Orta">
                    Orta
                  </Label>
                </span>
                <span>
                  <Input name="size-radio" type="radio" id="Buyuk" />
                  <Label check htmlFor="Buyuk">
                    Büyük
                  </Label>
                </span>
              </FormGroup>
              <FormGroup className="dough-thickness">
                <Label htmlFor="dough">
                  <h3>
                    Hamur Seç<span className="red"> *</span>
                  </h3>
                </Label>
                <Input id="dough" name="select" type="select">
                  <option hidden>Hamur Kalınlığı</option>
                  <option>İnce</option>
                  <option>Orta</option>
                  <option>Kalın</option>
                </Input>
              </FormGroup>
            </div>
            <FormGroup className="pizza-toppings">
              <h3>Ek Malzemler</h3>
              <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
              <div className="toppings">
                {toppings.map((item, index) => {
                  return (
                    <Label htmlFor={index}>
                      <Input type="checkbox" id={index} />
                      {item}
                    </Label>
                  );
                })}
              </div>
            </FormGroup>
            <FormGroup className="checkout">
              <Label htmlFor="name" className="name-input">
                <h3>İsim</h3>
                <Input id="name" placeholder="Lütfen isminizi giriniz." />
              </Label>
              <Label htmlFor="note" className="note-input">
                <h3>Sipariş Notu</h3>
                <textarea
                  id="note"
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                />
              </Label>
              <hr />
              <div className="order">
                <ButtonGroup className="count-group">
                  <Button className="btn btn-left">-</Button>
                  <p className="count">1</p>
                  <Button className="btn btn-right">+</Button>
                </ButtonGroup>
                <div className="order-detail">
                  <div className="order-text">
                  <h3>Sipariş Toplamı</h3>
                  <span className="selected">
                    <p>Seçimler</p>
                    <p>25.00₺</p>
                  </span>
                  <span className="total">
                    <p>Toplam</p>
                    <p>110.50₺</p>
                  </span>
                  </div>
                  <Button className="order-submit">Sipariş Ver</Button>
                </div>
              </div>
            </FormGroup>
          </Form>
        </div>
      </section>
    </>
  );
}
