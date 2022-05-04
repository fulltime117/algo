import React from 'react'
import theme from '../../theme.json';
import {
  TeamsLists,
  Content,
  MemberCard,
  ProfileImg,
  UserName,
  UserJobTitle,
  Title
} from './styles'

export const Team = (props) => {
  const teamList = [
    { id: 1, profileImg: '/images/Team/Delroy Edwards.webp', name: 'Delroy Edwards', jobTitle: 'FULL NAME', locationURl: '#' },
    { id: 2, profileImg: '/images/Team/EddiePabon.webp', name: 'Eddie Pabon', jobTitle: 'FULL NAME', locationURl: '#' },
    { id: 3, profileImg: '/images/Team/Jalissa Fulton.webp', name: 'Jalissa Fulton', jobTitle: 'FULL NAME', locationURl: '#' },
    { id: 4, profileImg: '/images/Team/Jessie Paulino.webp', name: 'Jessie Paulino', jobTitle: 'FULL NAME', locationURl: '#' },
    { id: 5, profileImg: '/images/Team/Julissa Edwards.webp', name: 'Julissa Edwards', jobTitle: 'FULL NAME', locationURl: '#' },
    { id: 6, profileImg: '/images/Team/Matthew.webp', name: 'Matthew', jobTitle: 'FULL NAME', locationURl: '#' }
  ]
  return (
    <TeamsLists bgimage={theme.images.teamListBack} id='about'>
      <Title>
        <h1>THE TEAM</h1>
      </Title>
      <Content>
        {teamList && teamList.length > 0 && teamList.map((member, i) => (
          <MemberCard key={i}>
            <ProfileImg>
              <img src={member?.profileImg} alt='' />
            </ProfileImg>
            <UserName>{member?.name}</UserName>
            <UserJobTitle>{member?.jobTitle}</UserJobTitle>
          </MemberCard>
        ))}
      </Content>
    </TeamsLists>
  )
}