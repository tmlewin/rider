import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import Map from './components/Map'
import Link from 'next/link'



export default function Home() {
 



  return (
    <Wrapper>
      <Map/>
      <ActionItems> 
        <Header>
          <Uberlogo src= " https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" alt="uber logo"/>
          <Profile>
            <Name>Thomas</Name>
            <UserImage src="https://media-exp1.licdn.com/dms/image/D4E03AQGG7idKe3lkhQ/profile-displayphoto-shrink_800_800/0/1633012806193?e=1642032000&v=beta&t=XNQmgODlNFxlbp5XAy4cZlV8h5X11_sEB2PBm3B8_DY" alt="profile"/>
          </Profile>
          </Header>

        <ActionButtons>
          <Link href="/search" >
          <ActionButton>

          <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" alt="ride"/>
            
               Ride 
               
            </ActionButton>
          </Link>
          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" alt="ride"/>
               Drive
             </ActionButton>
          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" alt="Wheel"/>
               Wheel 
            </ActionButton>


        </ActionButtons>
        <InputButton>Where to?</InputButton>


      </ActionItems>
      
      
    </Wrapper>

  )
}

const  Wrapper = tw.div`
  flex flex-col  h-screen
  
  
  `




const ActionItems = tw.div`
flex-1 p-4

`

const Header = tw.div`
flex justify-between items-center

`

const Uberlogo = tw.img`
h-28



`

const Profile = tw.div`
flex items-center
`


const Name = tw.div`
 mr-4 w-20 text-sm

`


const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px

`

const ActionButtons = tw.div`
 flex 

`


const ActionButton = tw.div`
flex bg-gray-200  flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition ease-in-out duration-300 text-xl

`

const ActionButtonImage = tw.img`
h-3/5 cursor-pointer

`

const   InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg p
`