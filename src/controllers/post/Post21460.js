export const Post21460 = () => {
    return (
        <div className="w-full text-left">
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Sentiment-Analysis-with-Natural-Language-Processing-image1.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <p className="mt-4">PART 2 of a Three part series.</p>
            <p className="mt-4">In the last article on understanding the role of sentiment analysis in data analytics, we discussed how Natural Language Processing (NLP)-based Sentiment Analysis is an excellent opinion-mining tool to derive deeper insights from the digital space, especially in analyzing insights from structured data. However, it needs to give deeper context and meaning to the same data, which semantic analysis does.</p>
            <p className="mt-4">Semantic Analysis is a sub-field of NLP that not just picks up relevant critical phrases in data but finds more profound meaning in natural language while correlating them. The role of machines in understanding and interpreting data is limited, given the vast complexity and subjectivity involved in natural language. But semantics captures this meaning, bringing context, logical sentence structure, and grammar connotation into it.</p>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Sentiment-Analysis-with-Natural-Language-Processing-image2-scaled.webp)`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <h2 className="mt-4 text-[22px] font-bold">Classification of Semantic Analytics</h2>
            <p className="mt-4">Divided into two broad parts, semantic analytics can be classified into;</p>
            <ol className="mt-4 list-decimal list-inside">
                <li><strong>Lexical Semantic Analysis</strong> – This tries to understand the meaning of each word of the text separately. The definition refers to the dictionary meaning of the word we all know.</li>
                <li><strong>Compositional Semantic Analysis</strong> – Even though it is possible to know the meaning of every individual word of a text, it isn’t always possible to understand the whole purpose of the sentence from them.</li>
            </ol>
            <p className="mt-4">For example, <em>NLP</em> is an <em>insight</em>-driven branch of <em>AI</em> &amp; <em>AI</em> that uses NLP to derive insights – these are two sentences with the exact ‘root’ words but convey very different meanings.</p>
            <p className="mt-4">Compositional semantic analysis tries to understand how different word combinations can derive meaning from texts.</p>
            
            <h2 className="mt-4 text-[22px] font-bold">How does Semantic Analysis work?</h2>
            <p className="mt-4">By understanding the meaning of words by themselves and in combination with others, semantic analysis works according to the below significant processes.</p>
            <ol className="mt-4 list-decimal list-inside">
                <li>Word Sense Disambiguation</li>
                <li>Relationship Extraction</li>
            </ol>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/Sentiment-Analysis-with-Natural-Language-Processing-image3.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <h2 className="mt-4 text-[22px] font-bold">Word Sense Disambiguation</h2>
            <p className="mt-4">In the case of natural language, every word used in a sentence differs in meaning according to context, reference, or occurrence. In Word Sense Disambiguation, the meaning of words is interpreted based on the context of their event in a sentence.</p>
            <p className="mt-4">For example, the word ‘fine’ may be ‘making all right’ or ‘payment for defaulting’ based on the context of its usage within the text.</p>
            <p className="mt-4">In essence, the machine is doing some part of what we do in verbalizing natural language. For example, this process overcomes the ambiguity in understanding and identifying the meaning of a word based on its context and use.</p>
            
            <h2 className="mt-4 text-[22px] font-bold">Relationship Extraction</h2>
            <p className="mt-4">The semantic analysis does a crucial task called Relationship Extraction, involving identifying different entities present in a sentence and then extracting their relationships to each other.</p>
            <p className="mt-4">For example, in the sentence, ‘Charlee.ai led insurance analytics predicts user behavior,’ the entities in <span style={{color: '#ff0000'}}>red</span>, when correlated, derive the below interpretation,</p>
            
            <div className="w-full min-h-[400px] md:min-h-[500px] rounded-xl" style={{background: `url(/blog-photos/charlee-ai-insurance-analytics-1024x1024.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            
            <h2 className="mt-4 text-[22px] font-bold">Conclusion</h2>
            <p className="mt-4">Semantic analysis is the way machines understand textual information. While for humans, it is simple to understand tone and context; this NLP-based technique represents texts in specific formats to interpret their meaning. This task is done by assessing new data, comparing it against existing past data, and helping predict claims cycle times, severity, and loss while foreseeing user behavior, enabling the insurance industry to save time and money and improve reserve management and risk selection.</p>
            
            <h2 className="mt-4 text-[22px] font-bold">Request a Demo:</h2>
            <form action="https://charlee.ai/part-2-sentiment-analysis-with-nlp-next-gen-ai-in-insur-tech/" method="post" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstname" className="block">First Name <abbr title="required">*</abbr></label>
                        <input type="text" name="firstname" id="firstname" className="w-full border rounded p-2" required placeholder="First Name *" />
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block">Last Name <abbr title="required">*</abbr></label>
                        <input type="text" name="lastname" id="lastname" className="w-full border rounded p-2" required placeholder="Last Name *" />
                    </div>
                    <div>
                        <label htmlFor="phone_number" className="block">Phone Number</label>
                        <input type="tel" name="phone_number" id="phone_number" className="w-full border rounded p-2" placeholder="888-888-8888" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block">Email <abbr title="required">*</abbr></label>
                        <input type="email" name="email" id="email" className="w-full border rounded p-2" required placeholder="@email *" />
                    </div>
                </div>
                <div className="mt-4">
                    <p>I would like to:</p>
                    <div className="flex flex-col">
                        <label>
                            <input type="checkbox" name="product[]" value="Learn more about the Free POC *" className="mr-2" />
                            Learn more about the Free POC *
                        </label>
                        <label>
                            <input type="checkbox" name="product[]" value="Receive Product Information" className="mr-2" />
                            Receive Product Information
                        </label>
                        <label>
                            <input type="checkbox" name="product[]" value="Request a Demo" className="mr-2" />
                            Request a Demo
                        </label>
                        <label>
                            <input type="checkbox" name="product[]" value="Receive your Whitepaper" className="mr-2" />
                            Receive your Whitepaper
                        </label>
                    </div>
                </div>
                <div className="mt-4 text-right">
                    <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded">Submit</button>
                </div>
            </form>
        </div>
    );
};
