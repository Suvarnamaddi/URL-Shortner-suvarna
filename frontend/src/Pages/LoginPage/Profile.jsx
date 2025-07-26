import React,{use,useEffect,useState} from 'react'

import Service from '../../utils/http';
import {Avatar, Text} from '@mantine/core';
import { Stack, Button } from '@mantine/core';
const service = new Service();

export default function Profile() { 
        const[profileData, setProfile] = useState(null);
        async function getProfile()
     {
        let data = await service.get("user/me");
        setProfile(data);
        console.log(data);

    }
    useEffect( ()=>{
        getProfile();
    },[])
  return (
     <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="md"
    >
    <div>
        
        <Avatar color="cyan" radius="xl">S</Avatar>
      <Text tt="capitalize"> {profileData?.email}</Text>
        <Text tt="uppercase">{profileData?.name}</Text>
    
    </div>
    </Stack>
  )
}
