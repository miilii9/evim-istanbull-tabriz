import { useState } from "react";
import { Accordion } from "react-bootstrap";

const faqsData = [
  {
    id: 1,
    title: "هزینه خرید خانه در استانبول چقدر است؟",
    answer:
      "با توجه به اطلاعات موجود، شما با چیزی حدود 4 میلیارد تومان می توانید در ترکیه صاحب خانه شوید",
  },
  {
    id: 2,
    title: "در کدام مناطق استانبول بهتر است خانه خرید؟",
    answer:
      "استانبول دارای مناطق مختلفی است و انتخاب منطقه بستگی به نیازها و ترجیحات شما دارد",
  },
  // {
  //   id: 3,
  //   title: "آیا خرید خانه در استانبول به من اجازه اقامت در ترکیه را می‌دهد؟",
  //   answer:
  //     "بله، خرید ملک در ترکیه می‌تواند به شما امکان اقامت در ترکیه را بدهد",
  // },
  {
    id: 4,
    title: "چه مدارکی برای خرید خانه در استانبول نیاز است؟",
    answer:
      "استانبول دارای مناطق مختلفی است و انتخاب منطقه بستگی به نیازها و ترجیحات شما دارد",
  },
];

const Faqs = () => {
  const [active, setActive] = useState(faqsData[0].id);
  return (
    <div id='tab1' className='tab_content'>
      <Accordion
        defaultActiveKey={faqsData[0].id}
        as={"ul"}
        className='accordion'>
        {faqsData.map((faq) => (
          <li key={faq.id}>
            <Accordion.Toggle
              as='a'
              eventKey={faq.id}
              onClick={() => setActive(faq.id == active ? null : faq.id)}
              className={faq.id == active ? "active" : ""}>
              <span> {faq.title} </span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={faq.id}>
              <p>{faq.answer}</p>
            </Accordion.Collapse>
          </li>
        ))}
      </Accordion>
    </div>
  );
};
export default Faqs;
