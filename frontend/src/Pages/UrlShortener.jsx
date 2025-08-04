import { Button, Container,Title,Center, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
            <Title
            order={2}
            ta="center"
            mb="lg"
            style={{
                color: 'black',
                textShadow: '0 0 3px rgba(0, 0, 0, 0.1), 0 0 6px rgba(0, 0, 0, 0.15)'
            }}
            >
            URL Shortener
            </Title>


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
          <Center mt="md">
            <Button
                onClick={generateShortUrl}
                variant="outline"
                color="cyan"
                size="lg"
                radius="lg">
                Generate
            </Button>
            </Center>

           </>
             :
            <Response response={response}/>
           }
       </Container>
   )
}






