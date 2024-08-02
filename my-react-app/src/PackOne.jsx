import CardPack from "./Swiper";
import sing from "./images/sing.jpg"

const cards = [
    {
      image: sing,
      title: 'Card 1',
      rarity: 'Legendary',
      description: 'This is the description for card 1.',
      otherSide: {
        image: sing,
        title: 'Flipped Side',
        rarity: 'Common',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Integer sodales augue vel mattis laoreet. Porttitor et commodo adipiscing magna molestie integer amet dictumst. Suscipit ad arcu; blandit vulputate cras litora. Ligula aliquet elementum tristique nisl orci conubia. Eget eget ultricies volutpat venenatis ac himenaeos ipsum efficitur. Facilisi leo hac aptent libero porttitor cras ullamcorper est mi. Vestibulum tellus felis ultrices fusce quis rutrum. Pharetra mauris imperdiet arcu efficitur elementum Lorem ipsum odor amet, consectetuer adipiscing elit. Integer sodales augue vel mattis laoreet. Porttitor et commodo adipiscing magna molestie integer amet dictumst. Suscipit ad arcu; blandit vulputate cras litora. Ligula aliquet elementum tristique nisl orci conubia. Eget eget ultricies volutpat venenatis ac himenaeos ipsum efficitur. Facilisi leo hac aptent libero porttitor cras ullamcorper est mi. Vestibulum tellus felis ultrices fusce quis rutrum. Pharetra mauris imperdiet arcu efficitur elementum'
      }
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Card 2',
      rarity: 'Rare',
      description: 'This is the description for card 2.',
      otherSide: {
        image: sing,
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