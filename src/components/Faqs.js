import { useState } from "react";
import { Accordion } from "react-bootstrap";

const faqsData = [
  {
    id: 1,
    title: "لورم ایپسوم متن ساختگی از صنعت چاپ?",
  },
  {
    id: 2,
    title: "لورم ایپسوم متن ساختگی  از صنعت چاپ?",
  },
  {
    id: 3,
    title: "لورم ایپسوم متن  از صنعت چاپ ?",
  },
  {
    id: 4,
    title: "لورم ایپسوم متن از صنعت چاپ?",
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
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </Accordion.Collapse>
          </li>
        ))}
      </Accordion>
    </div>
  );
};
export default Faqs;
