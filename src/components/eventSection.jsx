import React from 'react';

function EventSection(props) {
    let instr = props.eventInfo;
    const displayGeneralInfo = instr.map((i) => {
        return (
            <div className="my-2" key={instr.indexOf(i)}>
                <span>{instr.indexOf(i) + 1}) </span>
                <span>{i}</span>
            </div>
        );
    });

    return (
        <div className="text-left bg-purple-900 p-4 text-white">
            <h2 className="text-2xl">{props.eventName}</h2>
            <div className="flex flex-col sm:flex-row justify-between">
                {/* ppt-div-1 */}
                <div className="w-full sm:w-7/12">
                    <h3 className="text-xl text-pink-500">General Instructions</h3>
                    <div className="general-i">{displayGeneralInfo}</div>
                    <p className="my-2">{props.eventTxt}</p>
                    <div className="event-time my-4">
                        <span className="block my-2">Date: {props.date}</span>
                        <span className="block my-2">Time: {props.time}</span>
                        <p className="my-2">Venue: {props.venue}</p>
                    </div>
                </div>
                {/* ppt-div-2 */}
                <div className="w-full sm:w-4/12 pl-4 sm:pl-8">
                    <h4 className="text-lg">{props.title2}</h4>
                    <p className="my-1">{props.eventInfo1}</p>
                    <p className="my-1">{props.eventInfo2}</p>
                </div>
            </div>
            <div className="flex flex-col mt-4">
                <h4 className="text-lg">Event Co-Ordinator:</h4>
                <span className="my-1">Name: {props.coOrdinatorName}</span>
                <span className="my-1">Phn No.: {props.coOrdinatorPhn}</span>
            </div>
        </div>
    );
}

export default EventSection;
