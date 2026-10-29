import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Boats from './components/Boats';

class AllBoats extends React.Component {
    render() {
        return (
            <ScrollView>
                <Text>GetABoat- For Sale</Text>
                <Boats name={"Sea Ray 500 Sundancer"}
                       description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                       icon_name={"sail-boat"} icon_color={"brown"}
                       picture={require("./img/sea_ray.jpg")}/>

                <Boats name={"Four Winns Horizon 180"}
                       description={"A sporty look and refined details truly set the Horizon 180 above all others."}
                       icon_name={"anchor"} icon_color={"grey"}
                       picture={require("./img/four_winns.jpg")}/>

                <Boats name={"rowing"}
                       description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                       icon_name={"sail-boat"}
                       picture={require("./img/flipper.jpg")}/>

                <Boats name={"Princess V48"}
                       description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                       icon_name={"sail-boat"}
                       picture={require("./img/princess.jpg")}/>

                <Boats name={"Bayliner 175 Bowrider"}
                       description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                       icon_name={"lifebuoy"} icon_color={"red"}
                       picture={require("./img/bayliner.jpg")}/>

                <Boats name={"Fairline Targa 47"}
                       description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                       icon_name={"waves"} icon_color={"blue"}
                       picture={require("./img/fairline.jpg")}/>
            </ScrollView>
        )
    }
}

export default AllBoats;
