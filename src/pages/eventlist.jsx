import Card from './card.jsx'
import Logo from './logo.jsx'
import l1 from './../assets/wow.jpg'
import l2 from './../assets/legend.jpg'

import l3 from './../assets/blue.jpg'
import l4 from './../assets/red.jpg'

import l5 from './../assets/mov.jpg'
import l6 from './../assets/god.jpg'

import l7 from './../assets/music.jpg'
import l8 from './../assets/crowd.jpg'

import l9 from './../assets/mask.jpg'
import l10 from './../assets/aot.jpg'

import l11 from './../assets/ber.jpg';
import l12 from './../assets/1367999.jpeg';

const Eventlist=()=>{


  return (
    <>
    <div className="box">

    <Logo/>
    <div className="event_header">Upcoming Events</div>
    <div className="eventslist">

    <Card Ename="Competitive Gaming Event" img1={l1} img2={l2} event="Competitive Gaming" location="Delhi" time="5 PM"/>

    <Card Ename="Game Awards" event="Game Award" img1={l3} img2={l4} event="Game Awards" location="Mumbai" time="3 PM"/>

    <Card Ename="Classical Movie night" event="Classical Movie Night" location="Bhubaneswar" time="4 PM" img2={l6}  img1={l5}/>

    <Card Ename="Music Event" event="Music Event" img1={l7} img2={l8} location="Bengaluru" time="1 PM"/>

    <Card Ename="Anime Event" event="Anime Event" img1={l9} img2={l10} location="Delhi" time="2 PM"/>

    <Card Ename="Manga Event" event="Manga Event" img1={l11} img2={l12} location="Bhubaneswar" time ="5 PM" />
    </div>


    </div>

    </>
  )
}
export default Eventlist
