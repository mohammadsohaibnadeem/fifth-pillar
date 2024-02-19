import { Button } from "@repo/ui/components/ui/button";
import { AccordionDemo } from "../components/accordian-internal";
import { Accordion ,AccordionItem,AccordionTrigger,AccordionContent} from "@repo/ui/components/ui/accordion";

export default function Page() {
  return (
    <main>
    <Accordion type="single" collapsible className="w-[50%]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
    
      </Accordion>
    </main>
  );
}
