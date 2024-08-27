import CardPack from "./Swiper";
import ubereats from "./images/handDrawn/ubereats.png";
import sing from './images/handDrawn/sing.png';
import travel from './images/handDrawn/travel.png';
import picture from './images/handDrawn/picture.png';
import letter from "./images/handDrawn/letter.png"
import airport from './images/pictures/airport.jpg';
import bald from './images/pictures/bald.jpg';
import banduck from './images/pictures/banduck.jpg';
import bighug from './images/pictures/bighug.jpg';
import chrimlights from './images/pictures/chrimlights.jpg';
import crimescene from './images/pictures/crimescene.jpg';
import coalHarb from './images/pictures/coalHarb.jpg'
import eiftower from './images/pictures/eiftower.jpg';
import firstmeet from './images/pictures/firstmeet.jpg';
import firstnight from './images/pictures/firstnight.jpg';
import foot from './images/pictures/foot.jpg';
import foot2 from './images/pictures/foot2.jpg';
import glorfilm from './images/pictures/glorfilm.jpg';
import montreal from './images/pictures/montreal.jpg'
import QE from './images/pictures/QE.jpg';
import suncoast from './images/pictures/suncoast.jpg';
import swede from './images/pictures/swede.jpg';
import toronto from './images/pictures/toronto.jpg';


const cards = [
  {
    image: coalHarb,
    title: 'Photo Card : Fave new Photo!',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'Broies Birthday WHOOO!!!!',
      rarity: 'RARE',
      description: 'This is one of my new favorite photos of us! I think we both look so cute, and I really liked bros cute dress. I had so much fun that night even though it was broies birthday and not mine! It was one of the more recent fancier dinners we\'ve had and it felt very cozy because we got to spend time downtown which we don\'t go as often as we used to when we first started dating. Also of course, broie wore the watch I made her :))) ',
    }
  },
  {
    image: toronto,
    title: 'Photo Card : Home away from Home',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: '310 Brunny',
      rarity: 'RARE',
      description: 'I think there were a lot of different photos I could\'ve chosen to represent what I want to tell bro in this card but I think this card shows the best out of it all. When bro visited me in Toronto, honestly I had so much fun. It was so happy because Toronto felt like almost a bubble where I didn\'t have to focus on what I usually do in Vancouver. Even though the environment was different, and I was focused on different things from usual, when bro came to visit, it just felt so home like. I know I\'ve told you many times, but I felt so happy that we could recreate a little life together in a new city. I knew that after a long day at work which was basically everyday, I got to spend it with bro and that made work feel like it wasn\'t work at all :). Of those moments, I cherished the fun little moments we shared in what would typically be a regular day the most. Like us in this photo, it was just a regular day but we were able to spend it together which made it special. I\'ll never forget the nights we crammed into a tiny bed because even though it was uncomfortable, I felt so safe with bro beside me.',
    }
  },
  {
    image: montreal,
    title: 'Photo Card : First ever trip!',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'Montreal Trip!',
      rarity: 'RARE',
      description: 'Our very first actual trip together. I\'ve always dreamed of travelling the world and having someone to share that experience with and this was the first time that me an bro got to do that! ',
    }
  },
  {
    image: glorfilm,
    title: 'Photo Card : Beautiful Lady spotted!',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'HEHEHE',
      rarity: 'RARE',
      description: 'I really like this photo because bro literally looks like a model!!! Also the film aesthetic really adds to the picture :). Bro is gorgeous!!!',
    }
  },
  {
    image: picture,
    title: '5x GUARANTEED PICS',
    rarity: 'SUPER RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'FOR WHEN I MAKE A GOOFY FACE',
      rarity: 'SUPER RARE',
      description: 'With this card, when I make a silly goofy face and bro misses the screenshot, bro can UNFORTUNATELY force me up to FIVE times to recreate that moment :((((. The 5 times can be spread out across completely different times.',
    }
  },
  {
    image: swede,
    title: 'Photo Card : Heading home',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'Late night flight',
      rarity: 'RARE',
      description: 'As much as I enjoyed travelling around the world and exploring, I was so happy to finally head back to Vancouver so that I could finally be with bro forever!! Our flight plan was extremely exhausting though heh',
    }
  },
  {
    image: airport,
    title: 'Photo Card : Me at the Airport',
    rarity: 'RARE',
    description: 'Airport Facetime',
    otherSide: {
      title: 'Airport Facetime',
      rarity: 'RARE',
      description: 'When this photo was taken, I was so so so sad. I felt like we had just finally got back to spending time together in person right after toronto, and literally no more than a week passes and I have to head to a country I literally know nobody in. I just wanted time to stop or the flight to cancel so I could at least spend more time with you before leaving :(. I was extremely scared and nervous for life in general but im so glad that I at least had bro to talk to and spend time virtually online with. Also bro was punching me!!!!! PHYSICAL ABUSE!!',
    }
  },
  {
    image: suncoast,
    title: 'Photo Card : Life on the coast :)',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'Pembie and Coastie!',
      rarity: 'RARE',
      description: 'HEHE you know how much I loved pemberton and sunshine coast. It honestly was just as fun as when me and bros other travels throughout the world. I loved the city, the food, the fact that we travel so comfy and relaxed. But I love the city the most because I got to explore and experience a sort of new life with bro even though its only a couple hours away. We have to do more of these when bros back! Also got to half experience van life so very happy hehehehe',
    }
  },
  {
    image: chrimlights,
    title: 'Photo Card : Christmas Romance',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'Beautiful lights!',
      rarity: 'RARE',
      description: 'One of my fondest earlier memories of our relationship. It was so cold but the lights were very pretty and I felt like at this point, I knew bro very well already even though we were only 4 months in. ',
    }
  },
  {
    image: ubereats,
    title: 'ONE UBER EATS DATE!',
    rarity: 'SUPER RARE',
    description: 'This is the description for card 1.',
    otherSide: {
      title: 'FREE UBER EATS!!!',
      rarity: 'Common',
      description: 'With this coupon broie gets to make a reasonably sized order from any restaurant she wants! Depending on broies order size, Tim may order as well so it turns into a virtual date! Some suggestions Tim has thought of for inspo are galbi tang for a hearty soup, Nachies cuz broie loves nachies, and tteokbeoki with spam! Disclaimer: Delivery service need not be Uber Eats. '
    }
  },
  {
    image: crimescene,
    title: 'Photo Card : Accident at TSUJIRI!',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'CRIME REPORT!',
      rarity: 'RARE',
      description: 'CRIME SCENE : BRO BRO FOUND PASSED OUT AT TSUJIRI! Number one suspect: Gloria!',
    }
  },
  {
    image: foot,
    title: 'Photo Card : Me and Broie take on the world!',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'Cold Exploration',
      rarity: 'RARE',
      description: 'I remember this day very clearly when we were exploring Uppsala. I felt so happy that bro could see everything that I had experienced and everything that made me really like Uppsala finally. It was a really good feeling going to places I went to numerous times but this time with broie because when I first saw these places, I thought of what broie would think and whether she would like it or not. From the cozy drinks at the espresso tea house, to the cold photos I took of bro at the bus stop, this was a really fun day :)))',
    }
  },
  {
    image: eiftower,
    title: 'Photo Card : Paris Nights',
    rarity: 'RARE',
    description: 'OKAY this is my actual favourite photo of all time! hehehe travelling europe was also really fun!',
    otherSide: {
      title: 'Eiffy Towie ',
      rarity: 'RARE',
      description: 'OKAY this is my actual favourite photo of all time! hehehe eeing the eiffel tower with bro and those nights in paris walking around the city was very romantic :)). It felt like we escaped the hectic business of London and it was just me and bro in Paris! Bro passed out at like 8pm though and then slap me at 6am when i didn\'t wake up!',
    }
  },
  {
    image: travel,
    title: 'TRAVEL SAFE KIT',
    rarity: 'EPIC',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'SAFETY FIRST!!!',
      rarity: 'EPIC',
      description: 'GAVE THIS TO BRO ALREADY!!!! The drawing was supposed to be dazai but he looks like he ate one too many crumbies',
    }
  },
  {
    image: firstnight,
    title: 'Photo Card : The night it happened!',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'Day One!',
      rarity: 'RARE',
      description: 'HEHEHEHE one of the greatest nights ever! We both look so happy even though it might be because we\'re under the influence :o',
    }
  },
  {
    image: foot2,
    title: 'Photo Card : Me and Broie take on the world 2!',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'London nights',
      rarity: 'RARE',
      description: 'Can\'t forget the wingstop nights and uber eats every day!!!',
    }
  },
  {
    image: bald,
    title: 'Photo Card : Day of the buzzcut',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'IM GONNA DO IT AGAIN!!!',
      rarity: 'RARE',
      description: 'Bro when she saved my entire existence by helping me cut my hair. Also broie looks extra cute on my shoulder in this photo :)',
    }
  },
  {
    image: banduck,
    title: 'Photo Card : Bro and Banana Duckie!',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: ':)',
      rarity: 'RARE',
      description: 'I\'ve travelled a lot in the past year and there were a lot of times where I came back to visit like the start of toronto, and the week after toronto, etc. I feel like everytime I step into bros house after coming back from someplace i feel so safe. We\'ve spent so much time at broies house and room that whenever I see banana duckie, your photo wall, your closet, dresser and everything in your room, i feel safer and relieved. And this also happens when I call bro and see you in your bed, it just makes me feel happy and relaxed :))',
    }
  },
  {
    image: sing,
    title: 'FREE HOBBY CLASS!',
    rarity: 'LEGENDARY',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'FOR SINGING OR ANYTHING!',
      rarity: 'LEGENDARY',
      description: 'Bro has always been so supportive of every little dumb thing that I come up with or my new hobby / passion of the month, especially with art. I want bro to feel the same way and I remember how we talked about how you would want to do singing lessons on the side when you have time. Bro can redeem this card for 600 dollars in funding for a hobby that she likes!!!',
    }
  },
  {
    image: bighug,
    title: 'Photo Card : Cuddies :)',
    rarity: 'RARE',
    description: 'This is the description for card 2.',
    otherSide: {
      title: 'HEHEHE',
      rarity: 'RARE',
      description: 'Cute photo of me loving bro',
    }
  },
  {
    image: letter,
    title: 'BIRTHDAY LETTER :)',
    rarity: 'LEGENDARY',
    description: 'This is the description for card 2.',
    otherSide: {
        title: '- Love Broie',
        rarity: 'LEGENDARY',
        description: 'This is the description for card 1.',
    }
},
];


function PackOne() {
  return (
    <div>
      <CardPack cards={cards} />
    </div>
  )
}

export default PackOne;