import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const CollapsibleText = ({items})  => {
  return (
    <Accordion allowZeroExpanded>
    {items.map((item) => (
        <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    {item.header}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.body}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
  </Accordion>
  );
}

export default CollapsibleText