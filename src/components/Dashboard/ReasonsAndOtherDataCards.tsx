import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatsCard from './StatsCard';

interface Reason {
    percentage: number;
    description: string;
}

const reasonsData: Reason[] = [
    { percentage: 40, description: "The proposal is unclear" },
    { percentage: 20, description: "However venture pursuit" },
    { percentage: 10, description: "Other" },
    { percentage: 30, description: "The proposal is unclear" },
];

const ReasonsAndOtherDataCards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="text-primary-text">Reasons of leads lost</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                        {reasonsData.map((reason, index) => (
                            <div key={index}>
                                <p className="text-4xl font-semibold text-primary-text">{reason.percentage}%</p>
                                <p className="text-sm text-muted-foreground mt-1">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-primary-text">Other data</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-around pt-8">
                    <StatsCard
                        value="900"
                        label="total leads count"
                    />
                    <StatsCard
                        value="12"
                        label="days in average to convert lead"
                    />
                    <StatsCard
                        value="30"
                        label="inactive leads"
                        tooltip="These are leads that have not been updated in the last 30 days."
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default ReasonsAndOtherDataCards;
