import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div>
            <h2 className="text-3xl font-bold my-10 text-center">Services We Provide</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    events.map(event =><Card event={event} key={event.name}></Card>)
                }
            </div>

        </div>
    );
};

export default Cards;