import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {
    return (
        <div className='w-full border-b border-secondary py-16 '>
            <h1 className='text-center text-2xl underline pb-8'>FAQ{"'"}s</h1>
            <main className='md:max-w-[900px] p-4 py-6 rounded-md bg-secondary xl:max-w-7xl mx-auto'>
                <Accordion type="single" collapsible className="w-full ">
                    <AccordionItem value="item-1">
                        <AccordionTrigger >Is the Platform Free?</AccordionTrigger>
                        <AccordionContent>
                            Yes. the platform is free to use.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What is Minimum cost to participate in contest?</AccordionTrigger>
                        <AccordionContent>
                            0.001Eth.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How many Members can take part in contest?</AccordionTrigger>
                        <AccordionContent>
                            There is no Max limit as of now
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Can one take part in multiple contest?</AccordionTrigger>
                        <AccordionContent>
                            Yes.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>What is the fee to participate in any contest ?</AccordionTrigger>
                        <AccordionContent>
                            The Fees is 0.002 for now
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
        </div>

    )
}
