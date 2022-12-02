const people = [
  {
    name: 'Bassem Dimassi',
    role: 'JavaScript Developer',
    email: 'bassemdimassi99@gmail.com',
    imageUrl:
      'https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-1/238810472_2048655508626393_3412035247471087875_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Oupd8Fjb4K8AX9l5mpW&_nc_ht=scontent.ftun9-1.fna&oh=00_AfDwP0mfSFW-lUp-wux6_LHZB93Pjn4ckKt3KpjmdYl8wA&oe=638DC222',
  },
  {
    name: 'Anis Lazaar',
    role: 'Full Stack Developer',
    email: 'anis00723@gmail.com',
    imageUrl:
      'https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-1/317086044_5877436412299987_1129762482173363525_n.jpg?stp=c0.0.480.480a_dst-jpg_p480x480&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=0Xw5Y3iTZL0AX-V1dvL&_nc_ht=scontent.ftun9-1.fna&oh=00_AfDYPHHMFf7B5Xjw3btYKnR14kODLTFtLaINZtprxWPDnw&oe=638EE869',
  },
  {
    name: 'Abdelaziz Ben Salem',
    role: 'Full Stack Developer',
    email: 'bensalemabdelaziz97@gmail.com',
    imageUrl:
      'https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-1/279256668_7500940736612840_6402174375253931671_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=GbI67Lqg2akAX-ICycq&_nc_ht=scontent.ftun9-1.fna&oh=00_AfCAqnMEA6N-fOnxV7t4v3HWnIx_URKdytSJ2R4rbGs41g&oe=638DE42F',
  },
  {
    name: 'Walid Mabrouk',
    role: 'Full Stack Developer',
    email: 'walidmabr123@gmail.com',
    imageUrl:
      'https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-1/96518437_2922725547844066_8320260450251964416_n.jpg?stp=dst-jpg_p480x480&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=DT1vhl_Pf88AX8gVcTY&_nc_ht=scontent.ftun9-1.fna&oh=00_AfAaqA3XbAivGmTqKqyZOFLhb0FiGcJrUzxjvbCwUq9LpA&oe=63B0CE73',
  },
  // More people...
];

const OurTeam = () => {
  return (
    <div className="bg-slate-100">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Team
            </h2>
            <p className="text-xl text-gray-500">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              This website is created in the framework of the Nuit De L'info
              2022 by the team EPI_les_retardataires.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <img
                      className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                      <div className="mt-2 text-base text-gray-500">
                        <p>{person.email}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
