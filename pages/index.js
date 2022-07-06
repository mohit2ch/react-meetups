import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from 'next/head'
export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://chm:12345@cluster0.lgemeim.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  console.log(meetups);
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          id: meetup._id.toString(),
          address: meetup.address,
          image: meetup.image,
          description: meetup.description
        };
      }),
    },
    revalidate: 5
  };
}

export default function Home(props) {
  return <>
  <Head>
    <title>React MeetUps | Home</title>
  </Head>
  <MeetupList meetups={props.meetups}></MeetupList></>;
}
