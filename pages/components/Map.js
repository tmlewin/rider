import React from 'react'
import 'tailwindcss/tailwind.css'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import { useState, useEffect } from 'react'



mapboxgl.accessToken = 'pk.eyJ1IjoidG1sZXdpbiIsImEiOiJja3Zsbzd0emUzNzV4Mm9xaTQ5ZDA5dnZuIn0.m7RfFUTWcX_k9HBo-ORDjQ'

const Map = (props) => {
    

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011,  39.39172],
          zoom: 3
          })
          if(props.pickupCoordinates){
              addToMap(map, props.pickupCoordinates)
          }
            if(props.dropoffCoordinates){
                addToMap(map, props.dropoffCoordinates)
            }

            if(props.pickupCoordinates && props.dropoffCoordinates){
                map.fitBounds([
                    props.pickupCoordinates, 
                    props.dropoffCoordinates
                
                ], {
                    padding: 60
                    })
            }
          
        
        }, [props.pickupCoordinates, props.dropoffCoordinates])

        const addToMap=(map,coordinates) => {
            const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
        }

       

    return (
        <Wrapper id ='map'>


        </Wrapper>
    )
}




export default Map

const Wrapper = tw.div`
flex-1 h-1/2


`