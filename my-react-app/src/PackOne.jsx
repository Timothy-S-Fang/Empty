import CardPack from "./Swiper";
import ubereats from "./images/ubereats.png"

const cards = [
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
      image: 'path/to/image2.jpg',
      title: 'Card 2',
      rarity: 'Rare',
      description: 'This is the description for card 2.',
      otherSide: {
        title: 'Flipped Side',
        rarity: 'Common',
        description: 'This is the description for card 1.',
      }
    },
  ];

function PackOne() {
    return (
        <div>
            <CardPack cards={cards}/>
        </div>
    )
}

export default PackOne;