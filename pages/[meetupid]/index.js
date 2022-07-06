import MeetUpDetails from "../../components/meetups/MeetUpDetails";
import Head from 'next/head';
import { MongoClient, ObjectId } from "mongodb";

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://chm:12345@cluster0.lgemeim.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}).toArray();
  console.log(meetups);
  client.close();
    return {
        paths: 
            meetups.map((meetup)=>{
                return {params: {meetupid: meetup._id.toString()}}
            })
        ,
        fallback: false
    }
}

export async function getStaticProps(context) {
   
  const client = await MongoClient.connect('mongodb+srv://chm:12345@cluster0.lgemeim.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupid = context.params.meetupid;
  const meetup = await meetupsCollection.findOne({_id: ObjectId(meetupid)});
  console.log(meetup);
  client.close();
  return {
    props: {
      meetup:  {
          title: meetup.title,
          id: meetup._id.toString(),
          address: meetup.address,
          image: meetup.image,
          description: meetup.description
        }
      
    },
    revalidate: 5
  };
}


export default function MeetUp(props){
    
    
    const meetup = props.meetup;
    if(meetup === undefined) return <h2>Not Found</h2>
    // console.log(meetup);
    return  <>
    <Head>
      <title>React MeetUps | {meetup.title}</title>
    </Head>
    <MeetUpDetails id={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address} description={meetup.description}/></>
}