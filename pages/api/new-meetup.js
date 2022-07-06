import { MongoClient } from "mongodb";
export default async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;
        const {title, address, image, description} = data;
        const client = await MongoClient.connect('mongodb+srv://chm:12345@cluster0.lgemeim.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message: 'Meetup Inserted!'});
    }
}


/*
mongodb+srv://chm:<password>@cluster0.lgemeim.mongodb.net/?retryWrites=true&w=majority
*/