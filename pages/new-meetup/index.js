import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from 'next/router';
import Head from 'next/head'
export default function NewMeetUp(props){
    const router = useRouter();
    async function addMeetUpHandler(meetup){
        const response = await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const data = await response.json();
        console.log(data);
        router.push('/');
    }
    return <>
    <Head>
        <title>Add a new MeetUp</title>
    </Head>
    <NewMeetupForm onAddMeetup={addMeetUpHandler}></NewMeetupForm></>
}