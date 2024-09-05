import React from "react";

const BusRoute = () => {
    const routes = [
        {
            id: 1,
            routeName: "Route 1 :Tiruchengodu Bus Stand",
            stops: ["Stop A", "Stop B", "Stop C", "Stop D"],
            schedule: "7:00 AM - 8:00 PM",
            frequency: "Every 30 minutes",
        },
        {
            id: 2,
            routeName: "Route 2 : Salem New Bus Stand",
            stops: ["Stop E", "Stop F", "Stop G", "Stop H"],
            schedule: "6:00 AM - 10:00 PM",
            frequency: "Every 20 minutes",
        },
        {
            id: 3,
            routeName: "Route 3 : Namakkal Bus Stand",
            stops: ["Stop I", "Stop J", "Stop K", "Stop L"],
            schedule: "5:00 AM - 9:00 PM",
            frequency: "Every 15 minutes",
        },
        {
            id: 4,
            routeName: "Route 4 : Erode Bus Stand",
            stops: ["Stop I", "Stop J", "Stop K", "Stop L"],
            schedule: "5:00 AM - 9:00 PM",
            frequency: "Every 15 minutes",
        },
    ];

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-300 text-center mb-8"> Bus Routes & Schedules </h2>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                    {routes.map((route) => (
                        <div
                            key={route.id}
                            className="bg-slate-900 shadow-lg rounded-lg overflow-hidden p-6 z-10"
                        >
                            <h3 className="text-xl font-semibold text-gray-200 mb-4">
                                {route.routeName}
                            </h3>
                            <ul className="list-disc list-inside mb-4">
                                {route.stops.map((stop, index) => (
                                    <li key={index} className="text-gray-600">
                                        {stop}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-600">
                                <strong>Schedule:</strong> {route.schedule}
                            </p>
                            <p className="text-gray-600">
                                <strong>Frequency:</strong> {route.frequency}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusRoute;