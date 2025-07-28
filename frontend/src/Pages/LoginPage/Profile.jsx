import React, { useEffect, useState } from 'react';
import Service from '../../utils/http';
import { Avatar, Stack, Center, Title, Text, Loader } from "@mantine/core";

const service = new Service();

export default function Profile() {
  const [profileData, setProfile] = useState(null);

  useEffect(() => {
    async function getProfile() {
      const data = await service.get("user/me");
      setProfile(data);
    }
    getProfile();
  }, []);

  if (!profileData) {
    return (
      <Center h="100vh">
        <Loader color="cyan" />
      </Center>
    );
  }

  return (
    <Center mt="xl">
      <div>
        <Title
          order={2}
          ta="center"
          mb="lg"
          style={{
            color: 'black',
            textShadow: '0 0 3px rgba(0, 0, 0, 0.1), 0 0 6px rgba(0, 0, 0, 0.15)'
          }}
        >
          Profile
        </Title>

        <Stack
          align="center"
          spacing="md"
          bg="var(--mantine-color-body)"
          p="xl"
          w={360}
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: '10px',
            boxShadow: '0 0 8px rgba(0,0,0,0.05)',
          }}
        >
          <Avatar src={profileData?.avatar} size={100} radius={100} />
          <Text size="md"><strong>Username:</strong> {profileData?.name}</Text>
          <Text size="md"><strong>Email:</strong> {profileData?.email}</Text>
          <Text size="md"><strong>Phone:</strong> {profileData?.phone || 'Not added'}</Text>
          <Text size="md"><strong>Role:</strong> {profileData?.role}</Text>
          <Text size="md"><strong>Joined:</strong> {new Date(profileData?.createdAt).toLocaleDateString()}</Text>
        </Stack>
      </div>
    </Center>
  );
}
