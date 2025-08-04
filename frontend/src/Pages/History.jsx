import React,{useState} from 'react'
import { Button, Container,Title,Center, TextInput } from '@mantine/core'
import Service from '../utils/http';
const service = new Service();

export default function History() {

     const [input, setInput] = useState({
            Serialno: "",
            LongUrl: "",
            Shorturl: "",
            shortcode: ""
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
                 History
                  </Title>
                 <>
                 <TextInput
                     size="lg"
                     label="Serialno"
                     withAsterisk
                     placeholder="Serialno"
                     onChange={(e) => { setInput({ ...input, Serialno: e.target.value }) }}
                 />
                 <TextInput
                     size="lg"
                     label="LongUrl"
                     placeholder="LongUrl"
                     onChange={(e) => { setInput({ ...input, longUrl: e.target.value }) }}
                 />
                 <TextInput
                     size="lg"
                     label="Shorturl"
                     placeholder="Shorturl"
                     onChange={(e) => { setInput({ ...input, Shorturl: e.target.value }) }}
                 />
                 <TextInput
                     size="lg"
                     label="Shortcode"
                     placeholder="Shortcode"
                     onChange={(e) => { setInput({ ...input, Shortcode: e.target.value }) }}
                 />
                <Center mt="md">
                  <Button
                     // onClick={}
                      variant="outline"
                      color="cyan"
                      size="lg"
                      radius="lg">
                     Back to Profile
                  </Button>
                  </Center>
      
                 </>
                 </Container>
    )
}
