import React from "react";

function JobCard() {
  const jobs = [
    {
      title: "web devloper",
      image:
        "https://plus.unsplash.com/premium_photo-1664297869562-099d73ff472a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "web devloper",
      image:
        "https://plus.unsplash.com/premium_photo-1664297869562-099d73ff472a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "web devloper",
      image:
        "https://plus.unsplash.com/premium_photo-1664297869562-099d73ff472a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "web devloper",
      image:
        "https://plus.unsplash.com/premium_photo-1664297869562-099d73ff472a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className=" md:px-24 px-4 py-10">
        <div className="font-bold ml-8 my-4">Explore job opportunities</div>
      <div className=" grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg">
            <img className="rounded-lg" src={job.image} alt="" />
            <h1 className="text-xl font-black">{job.title}</h1>
            <p>{job.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
