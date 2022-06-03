import type { NextPage } from "next";
import Title from '../ui/components/Title/Title';
import List from '../ui/components/List/List';

const Home: NextPage = () => {
  return (
    <div>
      <Title
        title=''
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />

      <List
        pets={[
          {
            id: 1,
            name: 'Marry',
            history: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since. Lorem Ipsum has been the industry standard dummy text ever since.',
            photo: 'https://www.chefbob.com.br/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg'
          },
          {
            id: 2,
            name: 'Bidu',
            history: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since. Lorem Ipsum has been the industry standard dummy text ever since',
            photo: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png'
          }
        ]}
      />
    </div>
  )
};

export default Home;
