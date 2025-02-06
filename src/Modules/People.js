"use client";

import React, { useState } from "react";
import Image from "next/image";

const People = ({  }) => {
    const [data, setData] = useState(
        {
            "teams": [
              {
                "name": "Executive Team",
                "members": [
                  {
                    "name": "Pk Sen Sharma",
                    "position": "Founder & Chairman",
                    "image": "/Images/pksensharma.png",
                    "description":
                    "Sunny joined Indxx in 2011 and serves as the Chief Operating Officer. He manages day-to-day operations and designs business strategies.",
                  "linkedin": "https://linkedin.com/in/sunny-goyal"
                  },
                  {
                    "name": "Naveen Kumar",
                    "position": "Co-Founder, COO & Co-CEO",
                    "image": "/Images/Naveen.png"
                  },
                  {
                    "name": "Rahul Sen Sharma",
                    "position": "President & Co-CEO",
                    "image": "/Images/rahul.png"
                  }
                ]
              },
              {
                "name": "Leadership Team",
                "members": [
                  {
                    "name": "Sunny goyal",
                    "position": "Chief Operating Officer - India",
                    "image": "/Images/sunny.png"
                  },
                  {
                    "name": "Vaibhav Agarwal",
                    "position": "Chief Product Officer",
                    "image": "/Images/vaibhav.png"
                  },
                  {
                    "name": "Paul Starkey",
                    "position": "Chief Revenue Officer",
                    "image": "/Images/paul.png"
                  },
                  {
                    "name": "Mohit Bhardwaj",
                    "position": "CCO & CFO",
                    "image": "/Images/mohit.png"
                  },
                  {
                    "name": "Animesh Singh",
                    "position": "Chief Growth Officer",
                    "image": "/Images/animesh.png"
                  }
                ]
              }
            ]
          }
    )
  const [activeMemberIndex, setActiveMemberIndex] = useState(
    data.teams.map(() => null) 
  );

  const handleMouseEnter = (teamIndex, memberIndex) => {
    setActiveMemberIndex((prev) => {
      const newState = [...prev];
      newState[teamIndex] = memberIndex;
      return newState;
    });
  };

  const handleMouseLeave = (teamIndex) => {
    setActiveMemberIndex((prev) => {
      const newState = [...prev];
      newState[teamIndex] = null;
      return newState;
    });
  };

  return (
    <div
      className="bg-black text-white py-12 bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/Images/peoplebg.png)",
      }}
    >
      <div className="mx-[8%]">
        <h2 className="font-diakon font-medium text-[60px] leading-none tracking-[-0.03em] text-[#FAFAFA] text-center">
          {data.header}
        </h2>
        <div className="mt-10">
          {data.teams.map((team, teamIndex) => (
            <div key={teamIndex} className="mb-12">
            
              <h3 className="font-inter-tight font-medium text-[30px] leading-[150%] tracking-[1px] underline text-[#FAFAFA] text-center mb-5">
                {team.name}
              </h3>
              
              <div className="flex flex-wrap justify-between gap-12">
                {team.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="relative flex flex-col items-center max-w-[362px] w-full"
                  >
                  
                    <div
                      onMouseEnter={() => handleMouseEnter(teamIndex, memberIndex)}
                      onMouseLeave={() => handleMouseLeave(teamIndex)}
                      className="bg-transparent border border-[#302f2f] rounded-xl shadow-lg text-center pb-12 cursor-pointer transition-all"
                    >
                      
                      <div className="overflow-hidden w-full rounded-t-lg">
                        <Image
                          height={399}
                          width={362}
                          src={member.image}
                          alt={member.name}
                        />
                      </div>
                      
                      <h4 className="font-diakon font-bold text-[36px] leading-none text-center tracking-[-0.03em] mt-8">
                        {member.name}
                      </h4>
                      <p className="font-inter-tight font-medium text-[20px] leading-[24px] tracking-[-0.04em] mt-2">
                        {member.position}
                      </p>
                    </div>

                    <div
                      className={`${
                        activeMemberIndex[teamIndex] === memberIndex
                          ? "max-h-[300px] opacity-100 "
                          : "max-h-0 opacity-0"
                      } mt-6 bg-[#1a1a1a] p-6 rounded-lg shadow-lg text-left overflow-hidden transition-all duration-500 ease-in-out w-full`}
                    >

                      <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-[#1a1a1a] mx-auto mb-2"></div>
                      {/* <h4 className="font-diakon font-bold text-[24px] mb-4">
                        {member.name}
                      </h4> */}
                      <p className="text-[16px] leading-[24px]">
                        {member.description}
                      </p>

                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-blue-500"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;