import React, { useEffect, useState } from 'react';
import Service from '../../utils/http';
import { Avatar, Text, Stack } from '@mantine/core';

const service = new Service();

export default function Profile() { 
  const [profileData, setProfile] = useState(null);

  async function getProfile() {
    let data = await service.get("user/me");
    setProfile(data);
    console.log(data);
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="space-between"
      gap="xl  "
    >
        <center><Avatar src= {profileData?.avatar} size="xl"/></center>
        <Text><strong>Username:</strong>{profileData?.name}</Text>
         <center><Text><strong>Email:</strong>{profileData?.email}</Text></center>
     
     
    </Stack>
  );
}
