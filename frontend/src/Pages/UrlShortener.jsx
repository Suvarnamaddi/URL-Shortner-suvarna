import { Button, Container, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import Service from '../utils/http';
import Response from '../Components/Responce';

const service = new Service();


export default function UrlShortener() {
    const [input, setInput] = useState({
        originalUrl: "",
        customUrl: "",
        expiresAt: "",
        title: ""
    });
    const [response, setResponse] = useState(null);
  

   const generateShortUrl = async () => {
       console.log(input?.originalUrl);
       try {
           const data = await service.post("s", input);
           setResponse(data);;
           console.log(data);
       } catch (error) {
           console.error("Error generating short URL:", error);
       }
   }




   return (
       <Container size={"xs"}>
        {!response?
           <>
           <TextInput
               size="lg"
               label="Original Url "
               withAsterisk
               placeholder="originalUrl"
               onChange={(e) => { setInput({ ...input, originalUrl: e.target.value }) }}
           />
           <TextInput
               size="lg"
               label="Custom Url "
               placeholder="Custom Url"
               onChange={(e) => { setInput({ ...input, customUrl: e.target.value }) }}
           />
           <TextInput
               size="lg"
               label="Title"
               placeholder="title"
               onChange={(e) => { setInput({ ...input, title: e.target.value }) }}
           />
           <TextInput
               size="lg"
               type='date'
               label="expiresAt"
               placeholder="expiresAt"
               onChange={(e) => { setInput({ ...input, expiresAt: e.target.value }) }}
           />
           <Button
               onClick={generateShortUrl}
               variant="outline"
               color="cyan"
               size="lg"
               radius="lg">
                   Button
           </Button>;
           </>
             :
            <Response response={response}/>
           }
       </Container>
   )
}






