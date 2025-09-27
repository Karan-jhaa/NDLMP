"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Shield,
  BookOpen,
  Play,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Trophy,
  Star,
  FileText,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const moduleContent = {
  "1": {
    title: "Earthquake Safety",
    lessons: [
      {
        id: 1,
        title: "Understanding Earthquakes",
       content:`Repair deep plaster cracks in ceilings and foundations. Get expert advice if there are signs of structural defects.
                Anchor overhead lighting fixtures to the ceiling.
                Follow BIS codes relevant to your area for building standards
                Fasten shelves securely to walls.
                Place large or heavy objects on lower shelves.
                Store breakable items such as bottled foods, glass, and china in low, closed cabinets with latches.
                Hang heavy items such as pictures and mirrors away from beds, settees, and anywhere that people sit.
                Brace overhead light and fan fixtures.
                Repair defective electrical wiring and leaky gas connections. These are potential fire risks.
                Secure water heaters, LPG cylinders etc., by strapping them to the walls or bolting to the floor.
                Store weed killers, pesticides, and flammable products securely in closed cabinets with latches and on bottom shelves.
                Identify safe places indoors and outdoors.
                Under strong dining table, bed
                Against an inside wall
                Away from where glass could shatter around windows, mirrors, pictures, or where heavy bookcases or other heavy furniture could fall over
                In the open, away from buildings, trees, telephone and electrical lines, flyovers and bridges
                Know emergency telephone numbers (such as those of doctors, hospitals, the police, etc)
                Educate yourself and family members
                PSHA Table at Grid Points
                Have a disaster emergency kit ready

                Battery operated torch with extra batteries
                Battery operated radio
                First aid kit and manual
                Emergency food (dry items) and water (packed and sealed)
                Candles and matches in a waterproof container
                Knife
                Chlorine tablets or powdered water purifiers
                Can opener.
                Essential medicines
                Cash and credit cards
                Thick ropes and cords
                Sturdy shoes
                Develop an emergency communication plan

                In case family members are separated from one another during an earthquake (a real possibility during the day when adults are at work and children are at school), develop a plan for reuniting after the disaster.
                Ask an out-of-state relative or friend to serve as the 'family contact' after the disaster; it is often easier to call long distance. Make sure everyone in the family knows the name, address, and phone number of the contact person.
                Help your community get ready

                Publish a special section in your local newspaper with emergency information on earthquakes. Localize the information by printing the phone numbers of local emergency services offices and hospitals.
                Conduct week-long series on locating hazards in the home.
                Work with local emergency services and officials to prepare special reports for people with mobility impairment on what to do during an earthquake.
                Provide tips on conducting earthquake drills in the home.
                Interview representatives of the gas, electric, and water companies about shutting off utilities.
                Work together in your community to apply your knowledge to building codes, retrofitting programmes, hazard hunts, and neighborhood and family emergency plans.
                What to Do During an Earthquake

                Stay as safe as possible during an earthquake. Be aware that some earthquakes are actually foreshocks and a larger earthquake might occur. Minimize your movements to a few steps that reach a nearby safe place and stay indoors until the shaking has stopped and you are sure exiting is safe.

                If indoors

                DROP to the ground; take COVER by getting under a sturdy table or other piece of furniture; and HOLD ON until the shaking stops. If there is no a table or desk near you, cover your face and head with your arms and crouch in an inside corner of the building.
                Protect yourself by staying under the lintel of an inner door, in the corner of a room, under a table or even under a bed.
                Stay away from glass, windows, outside doors and walls, and anything that could fall, (such as lighting fixtures or furniture).
                Stay in bed if you are there when the earthquake strikes. Hold on and protect your head with a pillow, unless you are under a heavy light fixture that could fall. In that case, move to the nearest safe place.
                Use a doorway for shelter only if it is in close proximity to you and if you know it is a strongly supported, load bearing doorway.
                Stay inside until the shaking stops and it is safe to go outside. Research has shown that most injuries occur when people inside buildings attempt to move to a different location inside the building or try to leave.
                Be aware that the electricity may go out or the sprinkler systems or fire alarms may turn on.
                If outdoors

                Do not move from where you are. However, move away from buildings, trees, streetlights, and utility wires.
                If you are in open space, stay there until the shaking stops. The greatest danger exists directly outside buildings; at exits; and alongside exterior walls. Most earthquake-related casualties result from collapsing walls, flying glass, and falling objects.
                If in a moving vehicle

                Stop as quickly as safety permits and stay in the vehicle. Avoid stopping near or under buildings, trees, overpasses, and utility wires.
                Proceed cautiously once the earthquake has stopped. Avoid roads, bridges, or ramps that might have been damaged by the earthquake.
                If trapped under debris

                Do not light a match.
                Do not move about or kick up dust.
                Cover your mouth with a handkerchief or clothing.
                Tap on a pipe or wall so rescuers can locate you. Use a whistle if one is available. Shout only as a last resort. Shouting can cause you to inhale dangerous amounts of dust.`
},
    ],
    quiz : {
      title: "Earthquake Safety Quiz",
      questions: [
      {
      id: 1,
      question: "What is the safest action during an earthquake if you are indoors?",
      options: [
        "Run outside immediately",
        "Drop, Cover, and Hold On",
        "Stand near windows",
        "Use the elevator",
      ],
      correct: 1,
      explanation: "The safest action is 'Drop, Cover, and Hold On' to protect yourself from falling objects."
    },
    {
      id: 2,
      question: "Where is the safest place to take cover during an earthquake indoors?",
      options: [
        "Under a sturdy table",
        "Beside a glass wall",
        "Near bookshelves",
        "Next to a mirror",
      ],
      correct: 0,
      explanation: "Taking cover under a sturdy table prevents injuries from falling debris."
    },
    {
      id: 3,
      question: "If you are outdoors during an earthquake, what should you do?",
      options: [
        "Run inside a building",
        "Stay away from trees, streetlights, and power lines",
        "Lie flat on the road",
        "Stand near walls",
      ],
      correct: 1,
      explanation: "Staying away from tall structures and power lines reduces the risk of injury."
    },
    {
      id: 4,
      question: "What should you avoid doing during an earthquake?",
      options: [
        "Using elevators",
        "Staying calm",
        "Taking cover",
        "Following emergency instructions",
      ],
      correct: 0,
      explanation: "Using elevators is dangerous as they may fail or get stuck."
    },
    {
      id: 5,
      question: "What should your emergency kit include for earthquake preparedness?",
      options: [
        "Food and water for at least 3 days",
        "Only snacks",
        "Just a flashlight",
        "Books and games",
      ],
      correct: 0,
      explanation: "An emergency kit must include food, water, and essentials for at least 3 days."
    },
    {
      id: 6,
      question: "What should you do if trapped under debris?",
      options: [
        "Shout loudly for help",
        "Use a whistle or tap on pipes",
        "Light a match",
        "Move around a lot",
      ],
      correct: 1,
      explanation: "Using a whistle or tapping is safer and saves energy; shouting may cause dust inhalation."
    },
    {
      id: 7,
      question: "What is the first step in earthquake preparedness?",
      options: [
        "Ignoring drills",
        "Creating an emergency plan",
        "Waiting for the quake to happen",
        "Collecting only cash",
      ],
      correct: 1,
      explanation: "Creating an emergency plan ensures that everyone knows what to do during an earthquake."
    }
  ]
}
 },
  "2": {
    title: "Tsunami safety",
    lessons: [
      {
        id: 1,
        title: "Understanding Tsunami",
       content:`You should find out if your home, school, workplace, or other frequently visited locations are in tsunami hazard areas along    sea-shore.
              Know the height of your street above sea level and the distance of your street from the coast or other high-risk waters. (Local administration may put sign boards).
              Plan evacuation routes from your home, school, workplace, or any other place you could be where tsunamis present a risk.
              If your children's school is in an identified inundation zone, find out what the school evacuation plan is.
              Practice your evacuation routes.
              Use a Weather Radio or stay tuned to a local radio or television station to keep informed of local watches and warnings.
              Talk to your insurance agent.Homeowners' policies may not cover flooding from a tsunami. Ask the Insurance Agent about the benefits from Multi-Hazard Insurance Schemes.
              Discuss tsunamis with your family.Everyone should know what to do in a tsunami situation. Discussing tsunamis ahead of time will help reduce fear and save precious time in an emergency. Review flood safety and preparedness measures with your family.
              If you are in an area at risk from tsunamis

              You should find out if your home, school, workplace, or other frequently visited locations are in tsunami hazard areas.
              Know the height of your street above sea level and the distance of your street from the coast or other high-risk waters. (Local administration may put sign boards). Also find out the height above sea level and the distance from the coast of outbuildings that house animals, as well as pastures or corrals.
              Plan evacuation routes from your home, school, workplace, or any other place you could be where tsunamis present a risk. If possible, pick areas (30 meters) above sea level or go as far as 3 kilometres inland, away from the coastline. If you cannot get this high or far, go as high or far as you can. Every meter inland or upward may make a difference. You should be able to reach your safe location on foot within 15 minutes. After a disaster, roads may become blocked or unusable. Be prepared to evacuate by foot if necessary. Footpaths normally lead uphill and inland, while many roads parallel coastlines. Follow posted tsunami evacuation routes; these will lead to safety. Local emergency management officials can advise you on the best route to safety and likely shelter locations.
              If your children's school is in an identified inundation zone, find out what the school evacuation plan is. Find out if the plan requires you to pick your children up from school or from another location. Telephone lines during a tsunami watch or warning may be overloaded and routes to and from schools may be jammed.
              Practice your evacuation routes. Familiarity may save your life. Be able to follow your escape route at night and during inclement weather. Practicing your plan makes the appropriate response more of a reaction, requiring less thinking during an actual emergency situation.
              Use a Weather Radio or stay tuned to a local radio or television station to keep informed of local watches and warnings.
              Talk to your insurance agent.Homeowners' policies may not cover flooding from a tsunami. Ask the Insurance Agent about the benefits from Multi-Hazard Insurance Schemes.
              Discuss tsunamis with your family. Everyone should know what to do in a tsunami situation. Discussing tsunamis ahead of time will help reduce fear and save precious time in an emergency. Review flood safety and preparedness measures with your family.
              If you are visiting an area at risk from tsunamis

              Check with the hotel or campground operators for tsunami evacuation information and find out what the warning system is for tsunamis. It is important to know designated escape routes before a warning is issued.
              One of the early warning signals of a tsunami is that the sea water recedes several metres, exposing fish on shallow waters or on the beaches. If you see the sea water receding, you must immediately leave the beach and go to higher ground far away from the beach.
              Protect Your Property
              You should avoid building or living in buildings within 200 meters of the high tide coastline.
              These areas are more likely to experience damage from tsunamis, strong winds, or coastal storms.
              Make a list of items to bring inside in the event of a tsunami.
              A list will help you remember anything that can be swept away by tsunami water.
              Elevate coastal homes.
              Most tsunami waves are less than 3 meters. Elevating your house will help reduce damage to your property from most tsunamis.
              Take precautions to prevent flooding.
              Have an engineer check your home and advise about ways to make it more resistant to tsunami water.
              There may be ways to divert waves away from your property. Improperly built walls could make your situation worse. Consult with a professional for advice.
              Ensure that any outbuildings, pastures, or corrals are protected in the same way as your home. When installing or changing fence lines, consider placing them in such a way that your animals are able to move to higher ground in the event of a tsunami.
              What to Do if You Feel a Strong Coastal Earthquake
              If you feel an earthquake that lasts 20 seconds or longer when you are in a coastal area, you should:

              Drop, cover, and hold on. You should first protect yourself from the earthquake damages.
              When the shaking stops:

              Gather members of your household and move quickly to higher ground away from the coast. A tsunami may be coming within minutes.
              Avoid downed power lines and stay away from damaged buildings and bridges from which Heavy objects might fall during an aftershock.

              If you are on land

              Be aware of tsunami facts. This knowledge could save your life! Share this knowledge with your relatives and friends. It could save their lives!
              If you are in school and you hear there is a tsunami warning:

              You should follow the advice of teachers and other school personnel.
              If you are at home and hear there is a tsunami warning:

              You should make sure your entire family is aware of the warning. Your family should evacuate your house if you live in a tsunami evacuation zone. Move in an orderly, calm and safe manner to the evacuation site or to any safe place outside your evacuation zone. Follow the advice of local emergency and law enforcement authorities.
              If you are at the beach or near the ocean and you feel the earth shake:

              Move immediately to higher ground, DO NOT wait for a tsunami warning to be announced. Stay away from rivers and streams that lead to the ocean as you would stay away from the beach and ocean if there is a tsunami. A regional tsunami from a local earthquake could strike some areas before a tsunami warning could be announced.
              Tsunamis generated in distant locations will generally give people enough time to move to higher ground. For locally-generated tsunamis, where you might feel the ground shake, you may only have a few minutes to move to higher ground.
              High, multi-storied, reinforced concrete hotels are located in many low-lying coastal areas. The upper floors of these hotels can provide a safe place to find refuge should there be a tsunami warning and you cannot move quickly inland to higher ground.
              Homes and small buildings located in low-lying coastal areas are not designed to withstand tsunami impacts. Do not stay in these structures should there be a tsunami warning.
              Offshore reefs and shallow areas may help break the force of tsunami waves, but large and dangerous wave can still be a threat to coastal residents in these areas.
              Staying away from all low-lying areas is the safest advice when there is a tsunami warning.
              If you are on a boat:

              Since tsunami wave activity is imperceptible in the open ocean, do not return to port if you are at sea and a tsunami warning has been issued for your area. Tsunamis can cause rapid changes in water level and unpredictable dangerous currents in harbours and ports.
              If there is time to move your boat or ship from port to deep water (after a tsunami warning has been issued), you should weigh the following considerations:

              Most large harbours and ports are under the control of a harbor authority and/or a vessel traffic system. These authorities direct operations during periods of increased readiness (should a tsunami be expected), including the forced movement of vessels if deemed necessary. Keep in contact with the authorities should a forced movement of vessel be directed.
              Smaller ports may not be under the control of a harbor authority. If you are aware there is a tsunami warning and you have time to move your vessel to deep water, then you may want to do so in an orderly manner, in consideration of other vessels.
              Owners of small boats may find it safest to leave their boat at the pier and physically move to higher ground, particularly in the event of a locally-generated tsunami.
              Concurrent severe weather conditions (rough seas outside of safe harbor) could present a greater hazardous situation to small boats, so physically moving yourself to higher ground may be the only option.
              Damaging wave activity and unpredictable currents can affect harbours for a period of time following the initial tsunami impact on the coast. Contact the harbor authority before returning to port making sure to verify that conditions in the harbor are safe for navigation and berthing.
              What to do after a Tsunami

              You should continue using a Weather Radio or staying tuned to a Coast Guard emergency frequency station or a local radio or television station for updated emergency information.
              The Tsunami may have damaged roads, bridges, or other places that may be unsafe.
              Check yourself for injuries and get first aid if necessary before helping injured or trapped persons.
              If someone needs to be rescued, call professionals with the right equipment to help.
              Help people who require special assistance— Infants, elderly people, those without transportation, large families who may need additional help in an emergency situation, people with disabilities, and the people who care for them.
              Avoid disaster areas.
              Your presence might hamper rescue and other emergency operations and put you at further risk from the residual effects of floods, such as contaminated water, crumbled roads, landslides, mudflows, and other hazards.
              Use the telephone only for emergency calls.Telephone lines are frequently overwhelmed in disaster situations. They need to be clear for emergency calls to get through.
              Stay out of a building if water remains around it.Tsunami water, like floodwater, can undermine foundations, causing buildings to sink, floors to crack, or walls to collapse.
              When re-entering buildings or homes, use extreme caution.Tsunami-driven floodwater may have damaged buildings where you least expect it. Carefully watch every step you take.
              Wear long pants, a long-sleeved shirt, and sturdy shoes.The most common injury following a disaster is cut feet.
              Use battery-powered lanterns or flashlights when examining buildings.Battery-powered lighting is the safest and easiest to use, and it does not present a fire hazard for the user, occupants, or building. DO NOT USE CANDLES.
              Examine walls, floors, doors, staircases, and windows to make sure that the building is not in danger of collapsing. Inspect foundations for cracks or other damage. Cracks and damage to a foundation can render a building uninhabitable.
              Look for fire hazards.Under the earthquake action there may be broken or leaking gas lines, and under the tsunami flooded electrical circuits, or submerged furnaces or electrical appliances. Flammable or explosive materials may have come from upstream. Fire is the most frequent hazard following floods.
              Check for gas leaks.If you smell gas or hear a blowing or hissing noise, open a window and get everyone outside quickly. Turn off the gas using the outside main valve if you can, and call the gas company from a neighbour’s home. If you turn off the gas for any reason, it must be turned back on by a professional.
              Look for electrical system damage. If you see sparks or broken or frayed wires, or if you smell burning insulation, turn off the electricity at the main fuse box or circuit breaker. If you have to step in water to get to the fuse box or circuit breaker, call an electrician first for advice. Electrical equipment should be checked and dried before being returned to service.\CCheck for damage to sewage and water lines. If you suspect sewage lines are damaged under the quake, avoid using the toilets and call a plumber. If water pipes are damaged, contact the water company and avoid using water from the tap. You can obtain safe water from undamaged water heaters or by melting ice cubes that were made before the tsunami hit. Turn off the main water valve before draining water from these sources. Use tap water only if local health officials advise it is safe.
              Watch out for wild animals, especially poisonous snakes that may have come into buildings with the water. Use a stick to poke through debris. Tsunami floodwater flushes snakes and animals out of their homes.
              Watch for loose plaster, drywall, and ceilings that could fall.
              Take pictures of the damage, both of the building and its contents, for insurance claims. Open the windows and doors to help dry the building.
              Shovel mud before it solidifies.
              Check food supplies.
              Any food that has come in contact with floodwater may be contaminated and should be thrown out.
              Expect aftershocks. If the earthquake is of large magnitude (magnitude 8 to 9+ on the Richter scale) and located nearby, some aftershocks could be as large as magnitude 7+ and capable of generating another tsunami. The number of aftershocks will decrease over the course of several days, weeks, or months depending on how large the main shock was.
              Watch your animals closely. Keep all your animals under your direct control. Hazardous materials abound in flooded areas. Your pets may be able to escape from your home or through a broken fence. Pets may become disoriented, particularly because flooding usually affects scent markers that normally allow them to find their homes. The behaviour of pets may change dramatically after any disruption, becoming aggressive or defensive, so be aware of their well-being and take measures to protect them from hazards, including displaced wild animals, and to ensure the safety of other people and animals.`,
},
    ],
    quiz: {
  title: "Tsunami Safety Quiz",
  questions: [
    {
      id: 1,
      question: "What is the safest action if you feel strong shaking near the coast?",
      options: [
        "Wait for announcements",
        "Move to higher ground immediately",
        "Go closer to the shore",
        "Stay indoors",
      ],
      correct: 1,
      explanation: "Strong shaking near a coast can trigger a tsunami, so move to higher ground immediately."
    },
    {
      id: 2,
      question: "Which of the following is a natural warning sign of a tsunami?",
      options: [
        "Unusual ocean withdrawal",
        "Heavy rainfall",
        "Strong winds",
        "Hot weather",
      ],
      correct: 0,
      explanation: "If the ocean suddenly recedes, it is a strong warning sign of an incoming tsunami."
    },
    {
      id: 3,
      question: "What should your tsunami emergency kit contain?",
      options: [
        "Toys and games only",
        "Food, water, flashlight, first aid kit",
        "Only mobile phones",
        "Nothing is needed",
      ],
      correct: 1,
      explanation: "Emergency kits must contain food, water, flashlight, and first aid essentials."
    },
    {
      id: 4,
      question: "Where should you go after a tsunami warning?",
      options: [
        "Stay on the beach",
        "Go to higher ground or inland",
        "Stay in a car by the shore",
        "Move to the basement",
      ],
      correct: 1,
      explanation: "Higher ground or inland is safest during a tsunami warning."
    },
    {
      id: 5,
      question: "How long should you stay away after a tsunami warning?",
      options: [
        "Until the first wave passes",
        "At least several hours after officials declare it safe",
        "Only 10 minutes",
        "No need to wait",
      ],
      correct: 1,
      explanation: "Multiple waves may come; wait until officials confirm it is safe."
    },
    {
      id: 6,
      question: "What should you do if you are at sea during a tsunami warning?",
      options: [
        "Return to shore",
        "Stay in deep water",
        "Jump into the water",
        "Anchor near land",
      ],
      correct: 1,
      explanation: "Staying in deep water is safer as tsunami waves are dangerous near shore."
    },
    {
      id: 7,
      question: "What should communities have for tsunami preparedness?",
      options: [
        "Tsunami evacuation routes and drills",
        "Just posters",
        "No preparation",
        "Only sirens",
      ],
      correct: 0,
      explanation: "Evacuation routes and drills ensure communities know how to act during a tsunami."
    }
  ]
}
},
  "3": {
    title: "Cyclone Saftey",
    lessons: [
      {
        id: 1,
        title: "Understanding Cyclone",
       content:`Before the Cyclone season:
              Check the house; secure loose tiles and carry out repairs of doors and windows
              Remove dead branches or dying trees close to the house; anchor removable objects such as lumber piles, loose tin sheets, loose bricks, garbage cans, sign-boards etc. which can fly in strong winds
              Keep some wooden boards ready so that glass windows can be boarded if needed
              Keep a hurricane lantern filled with kerosene, battery operated torches and enough dry cells
              Demolish condemned buildings
              Keep some extra batteries for transistors
              Keep some dry non-perishable food always ready for use in emergency
              Necessary actions

              The actions that need to be taken in the event of a cyclone threat can broadly be divided into :

              Immediately before the cyclone season
              When cyclone alerts and warnings are communicated
              When evacuations are advised
              When the cyclone has crossed the coast
              When the Cyclone starts

              Listen to the radio (All India Radio stations give weather warnings).
              Keep monitoring the warnings. This will help you prepare for a cyclone emergency.
              Pass the information to others.
              Ignore rumours and do not spread them; this will help to avoid panic situations.
              Believe in the official information
              When a cyclone alert is on for your area continue normal working but stay alert to the radio warnings.
              Stay alert for the next 24 hours as a cyclone alert means that the danger is within 24 hours.
              When your area is under cyclone warning get away from low-lying beaches or other low-lying areas close to the coast

              Leave early before your way to high ground or shelter gets flooded
              Do not delay and run the risk of being marooned
              If your house is securely built on high ground take shelter in the safe part of the house. However, if asked to evacuate do not hesitate to leave the place.
              Board up glass windows or put storm shutters in place.
              Provide strong suitable support for outside doors.
              If you do not have wooden boards handy, paste paper strips on glasses to prevent splinters. However, this may not avoid breaking windows.
              Get extra food, which can be eaten without cooking. Store extra drinking water in suitably covered vessels.
              If you have to evacuate the house move your valuable articles to upper floors to minimize flood damage.
              Ensure that your hurricane lantern, torches or other emergency lights are in working condition and keep them handy.
              Small and loose things, which can fly in strong winds, should be stored safely in a room.
              Be sure that a window and door can be opened only on the side opposite to the one facing the wind.
              Make provision for children and adults requiring special diet.
              If the centre of the cyclone is passing directly over your house there will be a lull in the wind and rain lasting for half an hour or so. During this time do not go out; because immediately after that, very strong winds will blow from the opposite direction.
              Switch off the electrical mains in your house.
              Remain calm.
              During a cyclone

              DO NOT venture out even when the winds appear to calm down. The 'eye' of the cyclone might be passing. Winds might intensify and gush again and cause damage. Be safe inside till it is officially announced that the cyclone has passed.

              When Evacuation is instructed

              Pack essentials for yourself and your family to last a few days. These should include medicines, special food for babies and children or elders.
              Head for the proper shelter or evacuation points indicated for your area.
              Do not worry about your property
              At the shelter follow instructions of the person in charge.
              Remain in the shelter until you are informed to leave
              Post-cyclone measures

              You should remain in the shelter until informed that you can return to your home.
              You must get inoculated against diseases immediately.
              Strictly avoid any loose and dangling wires from lamp posts.
              If you have to drive, do drive carefully.
              Clear debris from your premises immediately.
              Report the correct losses to appropriate authorities.`,
        
},
    ],
    quiz: {
  title: "Cyclone Safety Quiz",
  questions: [
    {
      id: 1,
      question: "What should you do before a cyclone?",
      options: [
        "Ignore warnings",
        "Prepare an emergency kit and secure your home",
        "Go near the sea",
        "Leave windows open",
      ],
      correct: 1,
      explanation: "Preparation reduces risks and secures lives and property."
    },
    {
      id: 2,
      question: "Where is the safest place during a cyclone?",
      options: [
        "Near windows",
        "In a strong building away from glass",
        "On the roof",
        "By the sea",
      ],
      correct: 1,
      explanation: "Stay indoors in a safe room away from windows and glass."
    },
    {
      id: 3,
      question: "What should you avoid during a cyclone?",
      options: [
        "Listening to official updates",
        "Using open flames",
        "Staying indoors",
        "Keeping emergency supplies",
      ],
      correct: 1,
      explanation: "Avoid open flames as gas leaks may occur."
    },
    {
      id: 4,
      question: "What should you do after a cyclone?",
      options: [
        "Go outside immediately",
        "Stay indoors until authorities declare it safe",
        "Play in flood water",
        "Ignore broken wires",
      ],
      correct: 1,
      explanation: "Wait for official announcements before going outside."
    },
    {
      id: 5,
      question: "What is important for cyclone preparedness?",
      options: [
        "Emergency numbers and contacts",
        "Ignoring warnings",
        "Going for a drive",
        "Breaking windows",
      ],
      correct: 0,
      explanation: "Emergency contacts are critical for communication and safety."
    },
    {
      id: 6,
      question: "What should fishermen do during cyclone warnings?",
      options: [
        "Sail further into sea",
        "Return to shore immediately",
        "Stay in boats",
        "Ignore warnings",
      ],
      correct: 1,
      explanation: "Returning to shore reduces the risk of being caught in the storm."
    },
    {
      id: 7,
      question: "What should you stock up on before a cyclone?",
      options: [
        "Perishable foods",
        "Dry food, water, medicine, batteries",
        "Gasoline only",
        "None",
      ],
      correct: 1,
      explanation: "Stocking essentials ensures survival if supply chains are disrupted."
    }
  ]
}
},
  "4": {
    title: "Landslide Safety",
    lessons: [
      {
        id: 1,
        title: "Understanding Landslide",
       content:`We cannot stop disaster but minimize its impact by preparing ourselves better for landslides. The Government of India has made plans to identify the areas where landslides occur repeatedly. This is achieved through Landslide Hazard Zonation (LHZ) maps which shows or demarcates areas by different colors. NDMA has published a guideline on Landslides and Snow Avalanches as given on its website. Following are the precautionary measures for landslides in the form of do's and dont's as given below:

      Do's

      Prepare tour to hilly region according to information given by weather department or news channel.
      Move away from landslide path or downstream valleys quickly without wasting time.
      Keep drains clean,
      Inspect drains for - litter, leaves, plastic bags, rubble etc.
      Keep the weep holes open.
      Grow more trees that can hold the soil through roots,
      Identify areas of rock fall and subsidence of buildings, cracks that indicate landslides and move to safer areas. Even muddy river waters indicate landslides upstream.
      Notice such signals and contact the nearest Tehsil or District Head Quarters.
      Ensure that toe of slope is not cut, remains protected, don't uproot trees unless re-vegetation is planned.
      Listen for unusual sounds such as trees cracking or boulders knocking together.
      Stay alert, awake and active (3A's) during the impact or probability of impact.
      Locate and go to shelters,
      Try to stay with your family and companions.
      Check for injured and trapped persons.
      Mark path of tracking so that you can't be lost in middle of the forest.
      Know how to give signs or how to communicate during emergency time to flying helicopters and rescue team.
      Don'ts

      Try to avoid construction and staying in vulnerable areas.
      Do not panic and loose energy by crying.
      Do not touch or walk over loose material and electrical wiring or pole.
      Do not built houses near steep slopes and near drainage path.
      Do not drink contaminated water directly from rivers, springs, wells but rain water if collected directly without is fine.
      Do not move an injured person without rendering first aid unless the casualty is in immediate danger.`
},
    ],
    quiz: {
  title: "Landslide Safety Quiz",
  questions: [
    {
      id: 1,
      question: "What is a warning sign of a possible landslide?",
      options: [
        "Sudden cracking of ground",
        "Clear skies",
        "Cold weather",
        "Silence",
      ],
      correct: 0,
      explanation: "Cracks on the ground and changes in slope stability are warning signs."
    },
    {
      id: 2,
      question: "Where should you go during a landslide?",
      options: [
        "Move to higher ground immediately",
        "Stay in the path of the slide",
        "Go downhill",
        "Hide in caves",
      ],
      correct: 0,
      explanation: "Higher ground is safer as landslides move downhill."
    },
    {
      id: 3,
      question: "What should you avoid during a landslide?",
      options: [
        "Crossing river valleys during heavy rain",
        "Listening to authorities",
        "Emergency drills",
        "Carrying a radio",
      ],
      correct: 0,
      explanation: "Crossing valleys or slopes during heavy rain increases risk."
    },
    {
      id: 4,
      question: "What should communities do for landslide preparedness?",
      options: [
        "Plant trees on slopes",
        "Cut trees randomly",
        "Build houses on steep slopes",
        "Ignore warning signs",
      ],
      correct: 0,
      explanation: "Trees stabilize slopes and reduce landslide risks."
    },
    {
      id: 5,
      question: "What should you carry in landslide-prone areas?",
      options: [
        "Emergency kit with food, water, and first aid",
        "Only an umbrella",
        "Nothing",
        "Only cash",
      ],
      correct: 0,
      explanation: "Emergency kits are essential for survival during landslides."
    },
    {
      id: 6,
      question: "What should you do after a landslide?",
      options: [
        "Stay away from slide area",
        "Move into the affected area immediately",
        "Ignore damaged power lines",
        "Play in mud",
      ],
      correct: 0,
      explanation: "Slide areas may have further danger; avoid them until safe."
    },
    {
      id: 7,
      question: "What is the main cause of landslides?",
      options: [
        "Heavy rainfall, earthquakes, and human activities",
        "Cold weather",
        "Low winds",
        "Hot sunshine",
      ],
      correct: 0,
      explanation: "Landslides are triggered mainly by heavy rain, seismic activity, or human interference."
    }
  ]
}
},
  "5": {
    title: "Floods Safety",
    lessons: [
      {
        id: 1,
        title: "Understanding Floods",
       content:`What to do before a flood

                To prepare for a flood, you should:

                Avoid building in flood prone areas unless you elevate and reinforce your home.
                Elevate the furnace, water heater, and electric panel if susceptible to flooding.
                Install "Check Valves" in sewer traps to prevent floodwater from backing up into the drains of your home.
                Contact community officials to find out if they are planning to construct barriers (levees, beams and floodwalls) to stop floodwater from entering the homes in your area.
                Seal the walls in your basement with waterproofing compounds to avoid seepage.
                If a flood is likely to hit  your area, you should:

                Listen to the radio or television for information.
                Be aware that flash flooding can occur. If there is any possibility of a flash flood, move immediately to higher ground. Do not wait for instructions to move.
                Be aware of streams, drainage channels, canyons, and other areas known to flood suddenly. Flash floods can occur in these areas with or without such typical warnings as rain clouds or heavy rain.
                If you must prepare to evacuate, you should:

                Secure your home. If you have time, bring in outdoor furniture. Move essential items to an upper floor.
                Turn off utilities at the main switches or valves if instructed to do so. Disconnect electrical appliances. Do not touch electrical equipment if you are wet or standing in water.
                If you have to leave your home, remember these evacuation tips:

                Do not walk through moving water. Six inches of moving water can make you fall. If you have to walk in water, walk where the water is not moving. Use a stick to check the firmness of the ground in front of you.
                Do not drive into flooded areas. If floodwaters rise around your car, abandon the car and move to higher ground if you can do so safely. You and the vehicle can be quickly swept away.
                Footer menu`
},
    ],
    quiz: {
  title: "Flood Safety Quiz",
  questions: [
    {
      id: 1,
      question: "What should you do first in a flood situation?",
      options: [
        "Move to higher ground",
        "Stay in the basement",
        "Drive through flood waters",
        "Wait near rivers",
      ],
      correct: 0,
      explanation: "Higher ground reduces the risk of drowning."
    },
    {
      id: 2,
      question: "What should you avoid during floods?",
      options: [
        "Walking or driving through flood waters",
        "Listening to authorities",
        "Evacuating when told",
        "Carrying emergency supplies",
      ],
      correct: 0,
      explanation: "Flood waters can be deeper and more dangerous than they look."
    },
    {
      id: 3,
      question: "What should you include in a flood emergency kit?",
      options: [
        "Food, water, clothes, flashlight, first aid",
        "Only clothes",
        "Only money",
        "Nothing",
      ],
      correct: 0,
      explanation: "Kits should contain essentials to survive until help arrives."
    },
    {
      id: 4,
      question: "Where should you avoid camping or building in flood-prone areas?",
      options: [
        "Riverbanks and low-lying areas",
        "High ground",
        "Hilltops",
        "Strong buildings",
      ],
      correct: 0,
      explanation: "Riverbanks and low-lying areas are prone to flooding."
    },
    {
      id: 5,
      question: "What should you do if caught in fast-moving flood waters?",
      options: [
        "Grab onto something stable",
        "Swim freely",
        "Go underwater",
        "Hold your breath",
      ],
      correct: 0,
      explanation: "Holding onto stable objects can save you from being swept away."
    },
    {
      id: 6,
      question: "What is the safest action when evacuation is advised?",
      options: [
        "Evacuate immediately",
        "Ignore the warning",
        "Wait until water rises",
        "Stay indoors only",
      ],
      correct: 0,
      explanation: "Early evacuation prevents being trapped by rising water."
    },
    {
      id: 7,
      question: "What is a long-term solution to reduce flood risks?",
      options: [
        "Proper drainage and floodplain management",
        "Ignoring floodplains",
        "Building houses in lowlands",
        "Cutting forests",
      ],
      correct: 0,
      explanation: "Drainage and floodplain management reduce flood impacts long term."
    }
  ]
}
},
  "6": {
    title: "Heat wave Safety",
    lessons: [
      {
        id: 1,
        title: "Understanding Heat wave",
       content:`Heat Wave conditions can result in physiological strain, which could even result in death.

                To minimise the impact during the heat wave and to prevent serious ailment or death because of heat stroke, you can take the following measures:

                Avoid going out in the sun, especially between 12.00 noon and 3.00 p.m.
                Drink sufficient water and as often as possible, even if not thirsty
                Wear lightweight, light-coloured, loose, and porous cotton clothes. Use protective goggles, umbrella/hat, shoes or chappals while going out in sun.
                Avoid strenuous activities when the outside temperature is high. Avoid working outside between 12 noon and 3 p.m.
                While travelling, carry water with you.
                Avoid alcohol, tea, coffee and carbonated soft drinks, which dehydrates the body.
                Avoid high-protein food and do not eat stale food.
                If you work outside, use a hat or an umbrella and also use a damp cloth on your head, neck, face and limbs
                Do not leave children or pets in parked vehicles
                If you feel faint or ill, see a doctor immediately.
                Use ORS, homemade drinks like lassi, torani (rice water), lemon water, buttermilk, etc. which helps to re-hydrate the body.
                Keep animals in shade and give them plenty of water to drink.
                Keep your home cool, use curtains, shutters or sunshade and open windows at night.
                Use fans, damp clothing and take bath in cold water frequently.
                TIPS FOR TREATMENT OF A PERSON AFFECTED BY A SUNSTROKE:

                Lay the person in a cool place, under a shade. Wipe her/him with a wet cloth/wash the body frequently. Pour normal temperature water on the head. The main thing is to bring down the body temperature.
                Give the person ORS to drink or lemon sarbat/torani or whatever is useful to rehydrate the body.
                Take the person immediately to the nearest health centre. The patient needs immediate hospitalisation, as heat strokes could be fatal.
                Acclimatisation

                People at risk are those who have come from a cooler climate to a hot climate. You may have such a person(s) visiting your family during the heat wave season. They should not move about in open field for a period of one week till the body is acclimatized to heat and should drink plenty of water. Acclimatization is achieved by gradual exposure to the hot environment during heat wave.

                Footer menuTe`
},
    ],
    quiz: {
  title: "Heatwave Safety Quiz",
  questions: [
    {
      id: 1,
      question: "What is the best way to stay safe during a heatwave?",
      options: [
        "Drink plenty of water",
        "Wear heavy clothing",
        "Go out in the afternoon sun",
        "Avoid using fans",
      ],
      correct: 0,
      explanation: "Staying hydrated is the most effective protection."
    },
    {
      id: 2,
      question: "What should you avoid drinking during a heatwave?",
      options: [
        "Water",
        "Juices",
        "Alcohol and caffeinated drinks",
        "ORS",
      ],
      correct: 2,
      explanation: "Alcohol and caffeine dehydrate the body."
    },
    {
      id: 3,
      question: "What time of the day should you avoid going out during a heatwave?",
      options: [
        "12 PM to 4 PM",
        "6 AM to 9 AM",
        "9 PM to 11 PM",
        "Early morning",
      ],
      correct: 0,
      explanation: "Afternoon hours have the highest temperatures."
    },
    {
      id: 4,
      question: "What clothes are best for a heatwave?",
      options: [
        "Light, loose, cotton clothes",
        "Dark, tight clothes",
        "Woolen clothes",
        "Synthetic clothes",
      ],
      correct: 0,
      explanation: "Light and loose clothes help the body stay cool."
    },
    {
      id: 5,
      question: "What is a common symptom of heatstroke?",
      options: [
        "High body temperature and confusion",
        "Cold shivers",
        "Runny nose",
        "Back pain",
      ],
      correct: 0,
      explanation: "Heatstroke causes very high temperature and mental confusion."
    },
    {
      id: 6,
      question: "What should you do if someone suffers heatstroke?",
      options: [
        "Move to a cool place, apply wet cloths, and seek medical help",
        "Cover them with blankets",
        "Give only hot drinks",
        "Leave them alone",
      ],
      correct: 0,
      explanation: "Cooling the body and seeking medical attention is critical."
    },
    {
      id: 7,
      question: "What is a long-term way to reduce heatwave risks in cities?",
      options: [
        "Planting more trees and creating green spaces",
        "Increasing concrete areas",
        "Cutting trees",
        "Building metal roofs",
      ],
      correct: 0,
      explanation: "Trees and greenery reduce heat and improve air quality."
    }
  ]
}
},
}

export default function ModulePage() {
  const params = useParams()
  const moduleId = params.moduleId as string
  const [currentLesson, setCurrentLesson] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const module = moduleContent[moduleId as keyof typeof moduleContent]

  if (!module) {
    return <div>Module not found</div>
  }

  const completedLessons = module.lessons.filter((l) => l.completed).length
  const progress = (completedLessons / module.lessons.length) * 100

  const handleQuizSubmit = () => {
    setQuizSubmitted(true)
  }

  const getQuizScore = () => {
    const correct = module.quiz.questions.filter((q, index) => quizAnswers[index] === q.correct).length
    return Math.round((correct / module.quiz.questions.length) * 100)
  }

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-amber-500 to-orange-700">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/learn" className="flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5" />
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold text-foreground">SafeLearn</span>
                </Link>
                <div className="h-6 w-px bg-border" />
                <h1 className="text-xl font-semibold text-foreground">{module.quiz.title}</h1>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {!quizSubmitted ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  {module.quiz.title}
                </CardTitle>
                <CardDescription>Test your knowledge of earthquake safety principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {module.quiz.questions.map((question, index) => (
                  <div key={question.id} className="space-y-4">
                    <h3 className="text-lg font-medium">
                      {index + 1}. {question.question}
                    </h3>
                    <RadioGroup
                      value={quizAnswers[index]?.toString()}
                      onValueChange={(value) =>
                        setQuizAnswers((prev) => ({ ...prev, [index]: Number.parseInt(value) }))
                      }
                    >
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center space-x-2">
                          <RadioGroupItem value={optionIndex.toString()} id={`q${index}-${optionIndex}`} />
                          <Label htmlFor={`q${index}-${optionIndex}`} className="flex-1 cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}

                <div className="flex justify-between pt-6">
                  <Button variant="outline" onClick={() => setShowQuiz(false)}>
                    Back to Lessons
                  </Button>
                  <Button
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < module.quiz.questions.length}
                  >
                    Submit Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Quiz Complete!</CardTitle>
                <CardDescription>You scored {getQuizScore()}% on this quiz</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {module.quiz.questions.map((question, index) => (
                  <div key={question.id} className="space-y-2">
                    <h4 className="font-medium">
                      {index + 1}. {question.question}
                    </h4>
                    <div
                      className={`p-3 rounded-lg ${
                        quizAnswers[index] === question.correct
                          ? "bg-primary/10 border border-primary/20"
                          : "bg-destructive/10 border border-destructive/20"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {quizAnswers[index] === question.correct ? (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        ) : (
                          <div className="h-4 w-4 rounded-full bg-destructive" />
                        )}
                        <span className="font-medium">
                          {quizAnswers[index] === question.correct ? "Correct" : "Incorrect"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{question.explanation}</p>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center pt-6">
                  <Button onClick={() => setShowQuiz(false)}>Continue Learning</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    )
  }

  const currentLessonData = module.lessons[currentLesson]

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-500 to-orange-700 fade-in">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/learn" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" />
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">SafeLearn</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-semibold text-foreground">{module.title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Lesson {currentLesson + 1} of {module.lessons.length}
              </div>
              <Badge variant="secondary">{Math.round(progress)}% Complete</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Lesson List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Progress</CardTitle>
                <Progress value={progress} className="h-2" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {module.lessons.map((lesson, index) => (
                    <button
                      key={lesson.id}
                      onClick={() => setCurrentLesson(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        index === currentLesson ? "bg-primary/10 border border-primary/20" : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {lesson.completed ? (
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        ) : (
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{lesson.title}</div>
                          <div className="text-xs text-muted-foreground">{lesson.duration}</div>
                        </div>
                      </div>
                    </button>
                  ))}

                  <button
                    onClick={() => setShowQuiz(true)}
                    className="w-full text-left p-3 rounded-lg transition-colors hover:bg-muted border-t border-border mt-4 pt-4"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Final Quiz</div>
                        <div className="text-xs text-muted-foreground">Test your knowledge</div>
                      </div>
                    </div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    {currentLessonData.type === "video" && <Play className="h-5 w-5 text-primary" />}
                    {currentLessonData.type === "article" && <FileText className="h-5 w-5 text-primary" />}
                    {currentLessonData.type === "interactive" && <Star className="h-5 w-5 text-primary" />}
                    {currentLessonData.type === "checklist" && <CheckCircle className="h-5 w-5 text-primary" />}
                  </div>
                  <div>
                    <CardTitle>{currentLessonData.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {currentLessonData.type}
                      </Badge>
                      <span>{currentLessonData.duration}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  {/* Lesson Content Area */}
                  <div className="bg-muted/30 rounded-lg p-8 text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {currentLessonData.type === "video" && <Play className="h-12 w-12 text-primary" />}
                      {currentLessonData.type === "article" && <FileText className="h-12 w-12 text-primary" />}
                      {currentLessonData.type === "interactive" && <Star className="h-12 w-12 text-primary" />}
                      {currentLessonData.type === "checklist" && <CheckCircle className="h-12 w-12 text-primary" />}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{currentLessonData.title}</h3>
                    <div className="text-left text-muted-foreground mb-6">
                         {currentLessonData.content.split("\n").map((line, idx) => (
                          <p key={idx} className="mb-2">{line}</p>
                         ))}
                    </div>



                    {currentLessonData.type === "video" && (
                      <Button>
                        <Play className="mr-2 h-4 w-4" />
                        Play Video
                      </Button>
                    )}
                    {currentLessonData.type === "interactive" && (
                      <Button>
                        <Star className="mr-2 h-4 w-4" />
                        Start Simulation
                      </Button>
                    )}
                    {currentLessonData.type === "article" && (
                      <Button>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Read Article
                      </Button>
                    )}
                    {currentLessonData.type === "checklist" && (
                      <Button>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        View Checklist
                      </Button>
                    )}
                  </div>

                  {/* Navigation */}
                  {/* <div className="flex justify-between items-center pt-6 border-t border-border">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                      disabled={currentLesson === 0}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button> */}

                    {/* <div className="flex items-center gap-2">
                      {!currentLessonData.completed && (
                        <Button variant="secondary">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Mark Complete
                        </Button>
                      )}
                    </div> */}

                    {/* <Button
                      onClick={() => setCurrentLesson(Math.min(module.lessons.length - 1, currentLesson + 1))}
                      disabled={currentLesson === module.lessons.length - 1}
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
