import React from 'react'
import RoomFilter from "./RoomFilter"
import RoomList from "./RoomList"
import Loading from "./Loading"
import {withRoomConsumer} from "../context"

 function RoomContainer ({context})  {
    const {loading,sortedRooms,rooms} = context;
    if(loading){
        return <Loading/>
    }
        
    return (
        <>
            <RoomFilter rooms = {rooms}/>
            <RoomList rooms = {sortedRooms}/>
        </>
    )    
}
export default withRoomConsumer(RoomContainer);


// return (
//     <RoomConsumer>
//         {
//             value => {
//                 const {loading,sortedRooms,rooms} = value;
//                 if(loading){
//                     return <Loading/>
//                 }

//                 return (
//                     <div>
//                         Hello
//                         <RoomFilter rooms = {rooms}/>
//                         <RoomList rooms = {sortedRooms}/>
//                     </div>
//                 )
//             }
//         }
//     </RoomConsumer>
// )

